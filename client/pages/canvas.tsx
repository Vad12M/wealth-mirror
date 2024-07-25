import { useRouter } from "next/router";
import { Paint } from "@/components/paint/Paint";
import useGetUser from "@/hooks/useGetUser";
import { useEffect } from "react";

export default function CanvasPage() {
  const { isLoggedIn } = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/auth/login')
    }
  }, [isLoggedIn])

  return (
    <Paint/>
  )
}
