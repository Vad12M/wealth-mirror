import Typography from "@/ui/typography/Typography";
import { IContactForm } from "@/interfaces/IContactForm";
import { useState } from "react";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";
import { useContactMutation } from "@/store/api/apiSlice";
import useContactValidator from "@/service/validator/useContactValidator";

export default function About() {
  const [postContact] = useContactMutation();
  const [form, setForm] = useState<IContactForm>({
    fullName: '',
    email: '',
    message: '',
    company: '',
    subject: '',
  });

  const validator = useContactValidator(form);

  const handleContact = () => {
    validator.validate()
    if (!validator.isFormInvalid()) {
      postContact(form).unwrap().then(() => {
        setForm({
          fullName: '',
          email: '',
          message: '',
          company: '',
          subject: '',
        })
      })
    }
  }

  return (
    <section className="py-[180px] m-container flex flex-col items-center">
      <Typography text={'Contact Us'} className="mb-2" primaryElements={['Us']}/>
      <Typography
        text={'Here\'s our pricing plan: affordable, straightforward, and no hidden fees. That\'s it. Let\'s get started!'}
        className="mb-20 text-center  w-[470px]"
        color={'text-bodyGray'}
        type={'bodyB1'}
      />

      <div className="flex flex-col space-y-10 w-full">
        <div className="flex items-center space-x-6">
          <Input
            label={'Full name *'}
            value={form.fullName}
            placeholder={'John David'}
            onUpdate={(e) => {
              setForm({ ...form, fullName: e.target.value })
              validator.clear(['fullName'])
            }}
            className={'w-full'}
            invalid={validator.isFieldInvalid('fullName')}
          />
          <Input
            label={'Your email *'}
            value={form.email}
            placeholder={'example@yourmail.com'}
            onUpdate={(e) => {
              setForm({ ...form, email: e.target.value })
              validator.clear(['email'])
            }}
            className={'w-full'}
            invalid={validator.isFieldInvalid('email')}
          />
        </div>
        <div className="flex items-center space-x-6">
          <Input
            label={'Company'}
            value={form.company}
            placeholder={'Password'}
            onUpdate={(e) => setForm({ ...form, company: e.target.value })}
            className={'w-full'}
          />
          <Input
            label={'Subject'}
            value={form.subject}
            placeholder={'Password'}
            onUpdate={(e) => setForm({ ...form, subject: e.target.value })}
            className={'w-full'}
          />
        </div>
        <Input
          label={'Message'}
          value={form.message}
          placeholder={'Hello there,I would like to talk about how to...'}
          onUpdate={(e) => setForm({ ...form, message: e.target.value })}
          className={'w-full mb-[36]'}
        />
        <Button onClick={handleContact}>
          {'Send Message'}
        </Button>
      </div>
    </section>
  )
}
