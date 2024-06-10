import { KEYS } from "@/service/globalConstants";

let handleExpireToken: () => void;

export const setUserToken = (token: string) => typeof localStorage !== 'undefined' && localStorage.setItem(KEYS.userToken, token);
export const getUserToken = () => typeof localStorage !== 'undefined' && localStorage.getItem(KEYS.userToken);
export const removeUserToken = () => typeof localStorage !== 'undefined' && localStorage.removeItem(KEYS.userToken);

const useAuthHandler = (handleExpire?: () => void) => {
  if (handleExpire) {
    handleExpireToken = handleExpire;
  }
  const getAuthToken = async () => {
    let token = getUserToken() || null;
    if (!token) {
      handleExpireToken?.();
      return null;
    }
    if (token && isTokenValid(token)) {
      return token;
    }

    removeUserToken();
    handleExpireToken?.();

    return null;
  }

  const hasAuthToken = () => !!getUserToken();

  return {
    getAuthToken,
    hasAuthToken,
  };
};

const isTokenValid = (token: string) => {
  const payload = decodeTokenPayload(token);
  if (!payload) {
    return false;
  }
  const currentTimestamp = (new Date().getTime() / 1000) + 5; // add 5 sec for request time
  return payload.exp >= currentTimestamp;
}

const decodeTokenPayload = (token: string): any => {
  const base64Url = token.split('.')[1];
  if (!base64Url) {
    removeUserToken();
    return null;
  }
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  if (!base64) {
    removeUserToken();
    return null;
  }
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export default useAuthHandler;
