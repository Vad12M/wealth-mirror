import { removeUserToken } from "@/service/useAuthHandler";
import { useRouter } from "next/router";
import useGetUser from "@/hooks/useGetUser";
import { useLogoutMutation } from "@/store/api/apiSlice";

export default function useAuth() {
  const router = useRouter();
  const { isPaid } = useGetUser();
  const [logoutFunc] = useLogoutMutation();

  const logout = () => {
    const makeActionsAfterLogout = () => {
      removeUserToken();
      router.push('/auth/login');
      window.location.reload();
    }

    if (!isPaid) {
      logoutFunc().unwrap().then(makeActionsAfterLogout);
    } else {
      makeActionsAfterLogout();
    }
  }

  return {
    logout
  }
}
