import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import Dialog from "@/ui/dialog/dialog.component";
import { useState } from "react";
import { IWaitUser } from "@/interfaces/IWaitUser";
import useWaitlistValidator from "@/service/validator/useWaitListValidator";
import { useAddWaitUserMutation } from "@/store/api/apiSlice";
import UserInputIcon from "@/ui/icons/UserInputIcon";
import EmailInputIcon from "@/ui/icons/EmailInputIcon";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function JoinWaitlistPopup({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const isMobile = useGetIsMobile();
  const [addWaitUser, { isLoading }] = useAddWaitUserMutation();
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
      className="md:px-20 px-10 md:py-20 py-14 md:w-[940px] w-[360px]"
    >
      {!isSuccess ?
        <div className='flex flex-col items-center'>
          <Typography
            text={'Join Waitlist'}
            type={isMobile ? 'heading2' : 'txt1'}
            className={'mb-[60px]'}
            primaryElements={['Waitlist']}
          />
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col items-center space-y-5">
              <div className="relative">
                <div className="absolute top-3 left-5 flex items-center space-x-4">
                  <UserInputIcon/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18" viewBox="0 0 2 18" fill="none">
                    <path d="M1 1V17" stroke="white" strokeLinecap="round"/>
                  </svg>
                </div>
                <input
                  className={`flex pl-[64px] py-2 bg-[#F5F5F5] rounded-[8px] bg-transparent border ${validator.isFieldInvalid('name') ? 'border-danger' : 'border-white'}  md:w-[500px] w-[300px] outline-0`}
                  placeholder={'john doe'}
                  onChange={(e) => {
                    validator.clear(['name'])
                    setForm({ ...form, name: e.target.value })
                  }}
                  value={form.name}
                />
              </div>
              <div className="relative">
                <div className="absolute top-3 left-5 flex items-center space-x-4">
                  <EmailInputIcon/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18" viewBox="0 0 2 18" fill="none">
                    <path d="M1 1V17" stroke="white" strokeLinecap="round"/>
                  </svg>
                </div>
                <input
                  className={`flex pl-[64px] py-2 bg-[#F5F5F5] rounded-[8px] bg-transparent border ${validator.isFieldInvalid('email') ? 'border-danger' : 'border-white'} md:w-[500px] w-[300px] outline-0`}
                  placeholder={'johndoe@gmail.com'}
                  onChange={(e) => {
                    validator.clear(['email'])
                    setForm({ ...form, email: e.target.value })
                  }}
                  value={form.email}
                />
              </div>
            </div>
            <Button
              disabled={isLoading}
              className="md:w-[240px] w-[200px] mx-auto"
              onClick={onSend}
              style={{
                boxShadow: '0px 1px 74.6px 4px rgba(198, 224, 197, 0.39)'
              }}
            >
              {'Count me in'}
            </Button>
          </div>
        </div> : <Typography text={'You will be notified when we will launch the Product 🙂'} type={'healine4'}/>}
    </Dialog>
  )
}
