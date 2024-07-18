import { useEffect, useState } from "react";
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

export default function Register() {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter()
  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<IRegister>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const validator = useRegisterValidator(form);

  useEffect(() => {
    setError('');
  }, [form.email, form.password]);

  const handleRegister = () => {
    validator.validate()
    if (!validator.isFormInvalid()) {
      register(form).unwrap()
        .then(() => router.push('/auth/login'))
        .catch((e) => {
          console.log(e)
          setError('Something went wrong, please try again later')
        });
    }
  }

  return (
    <AuthLayout>
      <div className="flex items-center justify-center flex-col h-screen">
        <div className="absolute top-12 left-10">
          <Anchor href={"/"} className="flex items-center space-x-3 mb-10">
            <PrimaryLogo/>
            <Typography text={'Wealth Mirror'} type={'navBar'} color={'text-white'}/>
          </Anchor>
        </div>
        <div className="flex flex-col">
          <Typography text={'Sign Up'} className={'mb-2'} type="heading2"/>
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
            className={'mb-2 w-[400px]'}
            invalid={validator.isFieldInvalid('firstName')}
          />
          <Input
            value={form.lastName}
            placeholder={'Last Name'}
            onUpdate={(e) => {
              setForm({ ...form, lastName: e.target.value })
              validator.clear(['lastName'])
            }}
            className={'mb-2 w-[400px]'}
            invalid={validator.isFieldInvalid('lastName')}
          />
          <Input
            value={form.phone}
            placeholder={'Phone'}
            onUpdate={(e) => {
              setForm({ ...form, phone: e.target.value })
              validator.clear(['phone'])
            }}
            className={'mb-2 w-[400px]'}
            invalid={validator.isFieldInvalid('phone')}
          />
          <Input
            value={form.email}
            placeholder={'Email'}
            onUpdate={(e) => {
              setForm({ ...form, email: e.target.value })
              validator.clear(['email'])
            }}
            className={'mb-2 w-[400px]'}
            invalid={validator.isFieldInvalid('email')}
          />
          <Input
            value={form.password}
            placeholder={'Password'}
            onUpdate={(e) => {
              setForm({ ...form, password: e.target.value })
              validator.clear(['password'])
            }}
            className={'mb-2 w-[400px]'}
            invalid={validator.isFieldInvalid('password')}
            type={'password'}
          />
          {error && <Typography text={error} className={'mb-2'} color={'text-danger'} type={'body'}/>}
        </div>
        <Button
          typeButton={'primary'}
          onClick={handleRegister}
          className={'w-[400px] mt-6 flex justify-center h-[46px]'}
          loading={isLoading}
          disabled={isLoading}
          rounded={6}
        >
          {'Sign Up'}
        </Button>
      </div>
    </AuthLayout>
  )
}
