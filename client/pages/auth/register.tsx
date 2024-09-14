import { useState } from "react";
import { useRegisterMutation } from "@/store/api/apiSlice";
import { useRouter } from "next/router";
import useRegisterValidator from "@/service/validator/useRegisterValidator";
import { IRegister } from "@/interfaces/IAuth";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/ui/button/Button";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import PrimaryLogo from "@/ui/icons/logos/PrimaryLogo";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import HeaderMobileMenu from "@/components/layouts/HeaderMobileMenu";

export default function Register() {
  const isMobile = useGetIsMobile();
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [form, setForm] = useState<IRegister>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const validator = useRegisterValidator(form);

  const handleRegister = () => {
    validator.validate()
    if (!validator.isFormInvalid()) {
      register(form).unwrap().then(() => router.push('/auth/login'))
    }
  }

  return (
    <AuthLayout type={'register'}>
      <div className="flex items-center justify-center flex-col md:h-screen h-auto">
        <div className="absolute top-12 left-10 md:block hidden">
          <Anchor href={"/"} className="flex items-center space-x-3 mb-10">
            <PrimaryLogo/>
            <Typography text={'Wealth Mirror'} type={'navBar'} color={'text-white'}/>
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
          <Typography text={'Sign Up'} className={'mb-2'} type={isMobile ? "heading3" : "heading2"}/>
          <Typography
            text={'See your wealth like never before.'}
            className={'mb-[60px]'}
            type="body1"
            color="text-grayBody2"
          />
          <Input
            value={form.firstName}
            placeholder={'First Name'}
            onUpdate={(e) => {
              setForm({ ...form, firstName: e.target.value })
              validator.clear(['firstName'])
            }}
            className={'mb-2 md:w-[400px] w-[340px]'}
            invalid={validator.isFieldInvalid('firstName')}
            validationMessage={validator.getFieldError('firstName')}
          />
          <Input
            value={form.lastName}
            placeholder={'Last Name'}
            onUpdate={(e) => {
              setForm({ ...form, lastName: e.target.value })
              validator.clear(['lastName'])
            }}
            className={'mb-2 md:w-[400px] w-[340px]'}
            invalid={validator.isFieldInvalid('lastName')}
            validationMessage={validator.getFieldError('lastName')}
          />
          <Input
            value={form.phone}
            placeholder={'Phone'}
            onUpdate={(e) => {
              setForm({ ...form, phone: e.target.value })
              validator.clear(['phone'])
            }}
            className={'mb-2 md:w-[400px] w-[340px]'}
            invalid={validator.isFieldInvalid('phone')}
            validationMessage={validator.getFieldError('phone')}
          />
          <Input
            value={form.email}
            placeholder={'Email'}
            onUpdate={(e) => {
              setForm({ ...form, email: e.target.value })
              validator.clear(['email'])
            }}
            className={'mb-2 md:w-[400px] w-[340px]'}
            invalid={validator.isFieldInvalid('email')}
            validationMessage={validator.getFieldError('email')}
          />
          <Input
            value={form.password}
            placeholder={'Password'}
            onUpdate={(e) => {
              setForm({ ...form, password: e.target.value })
              validator.clear(['password'])
            }}
            className={'mb-2 md:w-[400px] w-[340px]'}
            invalid={validator.isFieldInvalid('password')}
            validationMessage={validator.getFieldError('password')}
            type={'password'}
          />
        </div>
        <Button
          typeButton={'primary'}
          onClick={handleRegister}
          className={'md:w-[400px] w-[340px] mt-6 flex justify-center h-[46px]'}
          loading={isLoading}
          disabled={isLoading}
          rounded={6}
        >
          {'Sign Up'}
        </Button>
        <img src={'/register/group-canvas.svg'} className="-mb-20 mt-10 block md:hidden" alt={'bg'}/>
      </div>
      {mobileMenu && <HeaderMobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}
    </AuthLayout>
  )
}
