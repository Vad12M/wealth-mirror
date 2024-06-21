import useAuthHandler from "@/service/useAuthHandler";
import { Button } from "@/ui/button/Button";
import { useRouter } from "next/router";

export default function CanvasPage() {
  const { hasAuthToken } = useAuthHandler();
  const router = useRouter();
  return (
    <section className="py-[140px] flex flex-col items-center space-y-6">
     <div className="m-container h-[700px] flex items-center justify-center bg-white relative">
       <Button onClick={() => router.push('/payment')} className="absolute top-8 right-8">
         {'Save'}
       </Button>
     </div>
      {!hasAuthToken() && <Button onClick={() => router.push('/auth/register')}>
        {'Register'}
      </Button>}
    </section>
  )
}
