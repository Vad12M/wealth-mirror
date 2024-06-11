import { useEffect, useState } from "react";
import { useRegisterMutation } from "@/store/api/apiSlice";
import { useRouter } from "next/router";
import useRegisterValidator from "@/service/validator/useRegisterValidator";
import { IRegister } from "@/interfaces/IAuth";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";
import PasswordInputComponent from "@/ui/input/PasswordInput.component";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/ui/button/Button";

export default function Register() {
  const [register] = useRegisterMutation();
  const router = useRouter()
  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<IRegister>({
    email: '',
    password: '',
    confirmPassword: '',
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
        .then(() => router.push('/login'))
        .catch((e) => {
          console.log(e)
          setError('Something went wrong, please try again later')
        });
    }
  }

  return (
    <AuthLayout>
      <div className="w-full flex flex-col items-center justify-center mt-[20%]">
        <Typography text={'Register'} className={'text-2xl font-bold mb-4'}/>
        <Input
          label={'Name'}
          value={form.firstName}
          placeholder={'First Name'}
          onUpdate={(e) => {
            setForm({ ...form, firstName: e.target.value })
            validator.clear(['firstName'])
          }}
          className={'mb-2 w-[360px]'}
          invalid={validator.isFieldInvalid('firstName')}
        />
        <Input
          value={form.lastName}
          placeholder={'Last Name'}
          onUpdate={(e) => {
            setForm({ ...form, lastName: e.target.value })
            validator.clear(['lastName'])
          }}
          className={'mb-2 w-[360px]'}
          invalid={validator.isFieldInvalid('lastName')}
        />
        <Input
          value={form.email}
          placeholder={'Email'}
          onUpdate={(e) => {
            setForm({ ...form, email: e.target.value })
            validator.clear(['email'])
          }}
          className={'mb-2 w-[360px]'}
          invalid={validator.isFieldInvalid('email')}
        />
        <Input
          value={form.phone}
          placeholder={'Phone'}
          onUpdate={(e) => {
            setForm({ ...form, phone: e.target.value })
            validator.clear(['phone'])
          }}
          className={'mb-2 w-[360px]'}
          invalid={validator.isFieldInvalid('phone')}
        />
        <Input
          value={form.address}
          placeholder={'Address'}
          onUpdate={(e) => setForm({ ...form, address: e.target.value })}
          className={'mb-2 w-[360px]'}
        />
        <PasswordInputComponent
          value={form.password}
          placeholder={'Password'}
          onUpdate={(e) => {
            setForm({ ...form, password: e.target.value })
            validator.clear(['password'])
          }}
          className={'mb-2 w-[360px]'}
          invalid={validator.isFieldInvalid('password')}
        />
        <PasswordInputComponent
          value={form.confirmPassword}
          placeholder={'Confirm Password'}
          onUpdate={(e) => {
            setForm({ ...form, confirmPassword: e.target.value })
            validator.clear(['confirmPassword'])
          }}
          className={'mb-2 w-[360px]'}
          invalid={validator.isFieldInvalid('confirmPassword')}
        />

        <Button typeButton={'primary'} onClick={handleRegister} className={'w-[360px] mt-6'}>
          {'Register'}
        </Button>
      </div>
    </AuthLayout>
  )
}
