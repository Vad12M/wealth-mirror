import useAuthHandler from "@/service/useAuthHandler";
import { useGetMeQuery } from "@/store/api/apiSlice";

export default function useGetUser() {
  const authHandler = useAuthHandler();
  const isLoggedIn = authHandler.hasAuthToken();
  const { data: user, isSuccess: isSuccessUser } = useGetMeQuery({}, { skip: !isLoggedIn });
  const isAdmin = user?.role === 'admin';

  return { user, isSuccessUser, isLoggedIn, isAdmin };
}
