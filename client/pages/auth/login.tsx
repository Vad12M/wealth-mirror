import AuthLayout from "@/components/layouts/AuthLayout";
import AuthLogo from "@/ui/icons/logos/AuthLogo";
import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center flex-col h-screen">
        <AuthLogo/>
        <Typography text={'Sign in to your account'} className={'mb-4 mt-6'} type="sub1"/>
        <Typography text={'Sign in to your account'} className={'mb-[26px]'} type="body"/>
        <Input/>
        <Input/>
        <Button typeButton={'primary'} className={'w-[360px] mt-6'}>
          {'Sign In'}
        </Button>
      </div>
    </AuthLayout>
  )
}
