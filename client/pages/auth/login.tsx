import AuthLayout from "@/components/layouts/AuthLayout";
import AuthLogo from "@/ui/icons/logos/AuthLogo";
import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";
import useLoginValidator from "@/service/validator/useLoginValidator";
import { useState } from "react";
import { useRouter } from "next/router";
import { useLoginMutation } from "@/store/api/apiSlice";
import { ILogin } from "@/interfaces/IAuth";
import { loginByToken } from "@/store/actions/global.actions";
import { setUserToken } from "@/service/useAuthHandler";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter()
  const [form, setForm] = useState<ILogin>({
    email: '',
    password: '',
  });

  const validator = useLoginValidator(form);

  const handleLogin = () => {
    validator.validate()
    if (!validator.isFormInvalid()) {
      login(form).unwrap()
        .then((res) => {
          setUserToken(res.token);
          loginByToken({ token: res.token })
          router.push('/canvas')
        })
    }
  }

  return (
    <AuthLayout>
      <div className="flex items-center justify-center flex-col h-screen">
        <AuthLogo/>
        <Typography text={'Sign in to your account'} className={'mb-4 mt-6'} type="sub1"/>
        <Typography text={'Start your demo version'} className={'mb-6'} type="body" color="text-gray"/>
        <Input
          label={'Email'}
          value={form.email}
          placeholder={'Email'}
          onUpdate={(e) => {
            setForm({ ...form, email: e.target.value })
            validator.clear(['email'])
          }}
          className={'mb-6 w-[400px]'}
          invalid={validator.isFieldInvalid('email')}
        />
        <Input
          label={'Password'}
          value={form.password}
          placeholder={'Password'}
          onUpdate={(e) => {
            setForm({ ...form, password: e.target.value })
            validator.clear(['password'])
          }}
          className={'mb-4 w-[400px]'}
          invalid={validator.isFieldInvalid('password')}
          type={'password'}
        />
        <Button
          typeButton={'primary'}
          className={'w-[400px] mt-6 flex justify-center h-[46px]'}
          onClick={handleLogin}
          rounded={6}
          loading={isLoading}
          disabled={isLoading}
        >
          {'Sign In'}
        </Button>
        <div className="flex items-center space-x-1">
          <Typography text={'Don’t have an account?'} className={'mt-6'} type="body"/>
          <Anchor href={'/auth/register'}>
            <Typography text={'Sign up'} className={'mt-6'} type="body" color={'text-primary'}/>
          </Anchor>
        </div>
      </div>
    </AuthLayout>
  )
}
