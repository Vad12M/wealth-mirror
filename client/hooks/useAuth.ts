import { removeUserToken } from "@/service/useAuthHandler";
import { useRouter } from "next/router";
import useCanvas from "@/hooks/useCanvas";
import useGetUser from "@/hooks/useGetUser";


export default function useAuth() {
  const { clearAll } = useCanvas();
  const router = useRouter();
  const { isPaid } = useGetUser();

  const logout = () => {
    if (!isPaid) {
      removeUserToken();
      router.push('/auth/login');
      window.location.reload();
    } else {
      removeUserToken();
      router.push('/auth/login');
      window.location.reload();
    }

  }

  return {
    logout
  }
}
