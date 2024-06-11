import AuthLayout from "@/components/layouts/AuthLayout";
import AuthLogo from "@/ui/icons/logos/AuthLogo";
import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";
import useLoginValidator from "@/service/validator/useLoginValidator";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLoginMutation } from "@/store/api/apiSlice";
import { ILogin } from "@/interfaces/IAuth";
import { loginByToken } from "@/store/actions/global.actions";
import Link from "next/link";
import { setUserToken } from "@/service/useAuthHandler";

export default function LoginPage() {
  const [login] = useLoginMutation();
  const router = useRouter()
  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<ILogin>({
    email: '',
    password: '',
  });

  const validator = useLoginValidator(form);

  useEffect(() => {
    setError('');
  }, [form.email, form.password]);

  const handleLogin = () => {
    validator.validate()
    if (!validator.isFormInvalid()) {
      login(form).unwrap()
        .then((res) => {
          setUserToken(res.token);
          loginByToken({ token: res.token })
          router.push('/')
        })
        .catch((e) => {
          console.log(e)
          setError('Something went wrong, please try again later')
        });
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
          className={'mb-6 w-[360px]'}
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
          className={'mb-4 w-[360px]'}
          invalid={validator.isFieldInvalid('password')}
          type={'password'}
        />
        {/*<ValidationHint validationHint={error}/>*/}
        <Button
          typeButton={'primary'}
          className={'w-[360px] mt-6 flex justify-center h-[46px]'}
          onClick={handleLogin}
          rounded={6}
        >
          {'Sign In'}
        </Button>
        <div className="flex items-center space-x-1">
          <Typography text={'Don’t have an account?'} className={'mt-6'} type="body"/>
          <Link href={'/auth/register'}>
            <Typography text={'Sign up'} className={'mt-6'} type="body" color={'text-primary'}/>
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
