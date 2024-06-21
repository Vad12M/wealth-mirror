import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";
import { useRouter } from "next/router";

export default function PaymentPage() {
  const router = useRouter();
  return (
    <section className="py-[140px] m-container flex flex-col items-center">
      <Typography text={'Payment for 1 year'} className={'mb-6'}/>
      <div className="flex justify-between">
        <div className="w-[400px]">
          <Input placeholder={'Card Number'} className={'mb-6'}/>
          <div className="flex justify-between space-x-4">
            <Input placeholder={'MM/YY'} className={'mb-6'}/>
            <Input placeholder={'CVV'} className={'mb-6'}/>
          </div>
        </div>

      </div>
      <Button
        className={'w-[360px] mt-6 flex justify-center h-[46px]'}
        onClick={() => router.push('/canvas')}

      >
        {'Pay'}
      </Button>
    </section>
  )
}
