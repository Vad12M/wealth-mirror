import Typography from "@/ui/typography/Typography";
import { IContactForm } from "@/interfaces/IContactForm";
import { useState } from "react";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";
import { useContactMutation } from "@/store/api/apiSlice";
import useContactValidator from "@/service/validator/useContactValidator";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import Contact1 from "@/ui/icons/contact/Contact1";
import Contact2 from "@/ui/icons/contact/Contact2";
import Contact3 from "@/ui/icons/contact/Contact3";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function About() {
  const isMobile = useGetIsMobile();
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
    <section className="pt-[180px] pb-[60px] fixed-container flex space-x-[72px]">
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
        <Typography text={'Contact Us'} className="mb-2" primaryElements={['Us']} type={isMobile ? "heading3" : "heading1"}/>
        <div className='mb-12 flex flex-col md:flex-row items-center space-x-1'>
          <Typography text={'Please reach out to us at:'} color={'text-bodyGray'} type={'bodyB1'}/>
          <Anchor
            href={"mailto: wealthmirrorofficial@gmail.com"}
            className="text-bodyGray underline"
            style={{ fontFamily: 'Open Sans' }}
          >
            {'wealthmirrorofficial@gmail.com'}
          </Anchor>
        </div>

        <div className="flex flex-col space-y-5 w-full md:items-start items-center">
          <Input
            label={'Full Name'}
            value={form.fullName}
            placeholder={'John Doe'}
            onUpdate={(e) => {
              setForm({ ...form, fullName: e.target.value })
              validator.clear(['fullName'])
            }}
            className={'w-full'}
            invalid={validator.isFieldInvalid('fullName')}
          />
          <Input
            label={'Your Email'}
            value={form.email}
            placeholder={'johndoe@yourmail.com'}
            onUpdate={(e) => {
              setForm({ ...form, email: e.target.value })
              validator.clear(['email'])
            }}
            className={'w-full'}
            invalid={validator.isFieldInvalid('email')}
          />
          <Input
            label={'Your Company'}
            value={form.company}
            placeholder={'Your Company Name'}
            onUpdate={(e) => setForm({ ...form, company: e.target.value })}
            className={'w-full'}
          />
          <Input
            label={'Message Subject'}
            value={form.subject}
            placeholder={'Subject of your message'}
            onUpdate={(e) => setForm({ ...form, subject: e.target.value })}
            className={'w-full'}
          />
          <div className='flex flex-col pb-4 w-full'>
            <Typography text={"Your Message"} type={'body1'} className={'mb-2'}/>
            <textarea
              className={'w-full h-[180px] p-4 rounded-[8px]  bg-transparent outline-0'}
              placeholder={'Hello! I would like to talk about....'}
              style={{ border: '1px solid rgba(188, 232, 187, 0.75)' }}
              onChange={(e) => setForm((prevState) => ({ ...prevState, message: e.target.value }))}
            />
          </div>
          <Button
            onClick={handleContact}
            className="text-[18px] font-bold text-[#458244] bg-white rounded-[43px] py-2 px-6 w-[180px]"
            typeButton={'none'}
          >
            {'Send Message'}
          </Button>
        </div>
      </div>
      <div className="w-1/2 relative md:block hidden">
        <div className="ml-36 mt-10 mb-6">
          <Contact1/>
        </div>
        <div>
          <Contact2/>
        </div>
        <div className="absolute -right-[80px] top-[300px]">
          <Contact3/>
        </div>
      </div>
    </section>
  )
}
