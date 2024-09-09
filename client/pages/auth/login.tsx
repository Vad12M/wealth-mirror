import AuthLayout from "@/components/layouts/AuthLayout";
import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";
import useLoginValidator from "@/service/validator/useLoginValidator";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLoginMutation } from "@/store/api/apiSlice";
import { ILogin } from "@/interfaces/IAuth";
import { loginByToken } from "@/store/actions/global.actions";
import { setUserToken } from "@/service/useAuthHandler";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import PrimaryLogo from "@/ui/icons/logos/PrimaryLogo";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import HeaderMobileMenu from "@/components/layouts/HeaderMobileMenu";
import useGetUser from "@/hooks/useGetUser";

export default function LoginPage() {
  const isMobile = useGetIsMobile();
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const { isLoggedIn } = useGetUser();
  const [mobileMenu, setMobileMenu] = useState(false);

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
          router.push('/wealthverse')
        })
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/wealthverse')
    }
  }, [isLoggedIn]);

  return (
    <AuthLayout type={'login'}>
      <div className="flex items-center justify-center flex-col md:h-screen h-auto">
        <div className="absolute top-12 left-10 md:block hidden">
          <Anchor href={"/"} className="flex items-center space-x-3 mb-10">
            <PrimaryLogo/>
            <Typography text={'Wealth Mirror'} type={'navBar'} color={'text-white'}/>
          </Anchor>
          <Anchor href={'/'}>
            <Typography text={'Back to homepage'} type={'link2'} color={'text-primary'} className="pl-4"/>
          </Anchor>
        </div>
        <div className="items-center justify-between flex md:hidden w-full py-10 px-6 mb-[80px]">
          <Anchor href={"/"} className="flex items-center space-x-3">
            <PrimaryLogo/>
            <Typography text={'Wealth Mirror'} type={'navBar'} color={'text-white'}/>
          </Anchor>
          <button className="flex flex-col items-end space-y-1 md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
              <path d="M19 1H1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
              <path d="M11 1H1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
              <path d="M19 1H1" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <Typography text={'Log in'} className={'mb-2'} type={isMobile ? "heading3" : "heading2"}/>
          <Typography
            text={'See your wealth like never before.'}
            className={'mb-[60px]'}
            type="body1"
            color="text-grayBody2"
          />
          <Input
            label={'Email'}
            value={form.email}
            placeholder={'Email'}
            onUpdate={(e) => {
              setForm({ ...form, email: e.target.value })
              validator.clear(['email'])
            }}
            className={'mb-6 md:w-[400px] w-[340px]'}
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
            className={'mb-4 md:w-[400px] w-[340px]'}
            invalid={validator.isFieldInvalid('password')}
            type={'password'}
          />
        </div>
        <Button
          typeButton={'primary'}
          className={'md:w-[400px] w-[340px] mt-6 flex justify-center h-[46px] z-50'}
          onClick={handleLogin}
          rounded={6}
          loading={isLoading}
          disabled={isLoading}
        >
          {'Log in'}
        </Button>
        <div className="flex items-center space-x-1 z-50">
          <Typography text={'Don’t have an account?'} className={'mt-6'} type="link2" color={"text-grayBody2"}/>
          <Anchor href={'/auth/register'}>
            <Typography text={'Sign up'} className={'mt-6'} type="link2" color={'text-primary'}/>
          </Anchor>
        </div>

        <img src={'/login/podium.svg'} className="-mt-28 -mb-20 block md:hidden" alt={'podium'}/>
      </div>
      {mobileMenu && <HeaderMobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}
    </AuthLayout>
  )
}
