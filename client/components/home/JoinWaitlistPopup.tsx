import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import Dialog from "@/ui/dialog/dialog.component";
import Input from "@/ui/input/input";
import { useState } from "react";
import { IWaitUser } from "@/interfaces/IWaitUser";
import useWaitlistValidator from "@/service/validator/useWaitListValidator";
import { useAddWaitUserMutation } from "@/store/api/apiSlice";

export default function JoinWaitlistPopup({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [addWaitUser] = useAddWaitUserMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState<IWaitUser>({
    name: '',
    email: '',
  });

  const validator = useWaitlistValidator(form);

  const onSend = () => {
    validator.validate();
    if (!validator.isFormInvalid()) {
      addWaitUser(form)
        .unwrap()
        .then(() => {
          setIsSuccess(true);
        });
    }
  }

  return (
    <Dialog
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      className="px-20 py-20"
    >
      {!isSuccess ?
        <div className='flex flex-col items-center'>
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
              {'Count Me In!'}
            </Button>
          </div>
        </div> : <Typography text={'You will be notified when we will launch the Product 🙂'} type={'healine4'}/>}
    </Dialog>
  )
}
