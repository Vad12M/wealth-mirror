import { Button } from "@/ui/button/Button";
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
    <section className="py-[140px] flex flex-col items-center space-y-6">
      <div className="m-container flex items-center justify-center  relative">
        {/*<Button onClick={() => router.push('/payment')} className="absolute top-8 right-8">*/}
        {/*  {'Save'}*/}
        {/*</Button>*/}

        <div className="m-container bg-white p-4">
          <Paint/>
        </div>
      </div>

      {!isLoggedIn && <Button onClick={() => router.push('/auth/register')}>
        {'Register'}
      </Button>}
    </section>
  )
}
