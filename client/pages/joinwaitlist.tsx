import JoinWaitlistBlock from "@/components/home/JoinWaitlistBlock";
import JoinWaitlistGraphicsBlock from "@/components/home/JoinWaitlistGraphicsBlock";
import OurServicesBlock from "@/components/home/OurServicesBlock";
import FAQBlock from "@/components/mainHome/blocks/FAQBlock";
import PennyWiseBlock from "@/components/home/PennyWiseBlock";
import { useAddWaitUserMutation } from "@/store/api/apiSlice";
import { useState } from "react";
import { IWaitUser } from "@/interfaces/IWaitUser";
import Dialog from "@/ui/dialog/dialog.component";
import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { Button } from "@/ui/button/Button";
import useWaitlistValidator from "@/service/validator/useWaitListValidator";

export default function Joinwaitlist() {
  const [addWaitUser] = useAddWaitUserMutation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<IWaitUser>({
    name: '',
    email: '',
  });

  const validator = useWaitlistValidator(form);

  const onSend = () => {
    validator.validate();
    if (!validator.isFormInvalid()) {
      addWaitUser(form);
      setOpen(false);
    }
  }

  return (
    <main className="w-full">
      <JoinWaitlistBlock onClick={() => setOpen(true)}/>
      <div className="w-full flex justify-center -mt-[300px]">
        <JoinWaitlistGraphicsBlock/>
      </div>
      <OurServicesBlock/>
      <PennyWiseBlock onClick={() => setOpen(true)}/>
      <FAQBlock primaryElements={[]}/>
      <Dialog
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="px-20 py-20 flex flex-col items-center "
      >
        <Typography
          text={'Join Waitlist'}
          type={'h1'}
          className={'mb-[100px]'}
          primaryElements={['Weight list']}
        />
        <div className="flex flex-col space-y-10">
          <div className="flex items-center space-x-10">
            <Input
              label={'Name *'}
              placeholder={'John David'}
              className="w-[500px]"
              value={form.name}
              onUpdate={(e) => {
                validator.clear(['name'])
                setForm({ ...form, name: e.target.value })
              }}
              invalid={validator.isFieldInvalid('name')}
            />
            <Input
              label={'Your email *'}
              placeholder={'example@yourmail.com'}
              className="w-[500px]"
              value={form.email}
              onUpdate={(e) => {
                validator.clear(['email'])
                setForm({ ...form, email: e.target.value })
              }}
              invalid={validator.isFieldInvalid('email')}
            />
          </div>
          <Button className="w-[220px] mx-auto" onClick={onSend}>
            {'Send Message'}
          </Button>
        </div>
      </Dialog>
    </main>
  );
}
