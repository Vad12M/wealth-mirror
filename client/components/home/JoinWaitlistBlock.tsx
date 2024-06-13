import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import VerticalLinesIcon from "@/ui/icons/home/VerticalLinesIcon";
import BlurCircleMDIcon from "@/ui/icons/home/BlurCircleMDIcon";
import BlurCircleSMIcon from "@/ui/icons/home/BlurCircleSMIcon";
import Dialog from "@/ui/dialog/dialog.component";
import { useState } from "react";
import Input from "@/ui/input/input";
import { IWaitUser } from "@/interfaces/IWaitUser";
import { useAddWaitUserMutation } from "@/store/api/apiSlice";

export default function JoinWaitlistBlock() {
  const [addWaitUser, { isLoading }] = useAddWaitUserMutation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<IWaitUser>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  return (
    <section
      className="relative min-w-[100%] bg-cover"
      style={{ backgroundImage: 'url(/yCombinator/Subtract.svg)', }}
    >
      <div className="m-container">
        <div className="absolute">
          <VerticalLinesIcon/>
        </div>
        <div
          className={'absolute top-[15%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'}
          style={{
            width: '538px',
            height: '538px',
            borderRadius: '538px',
            background: 'radial-gradient(50% 50% at 50% 50%, #222228 0%, rgba(34, 34, 40, 0.00) 100%)'
          }}
        />
      </div>
      <div className="flex items-center justify-center flex-col pt-[200px] pb-[400px] relative m-container">
        <div className="absolute -left-6 top-[45%]">
          <BlurCircleMDIcon/>
        </div>
        <div className="absolute right-6 top-[32%]">
          <BlurCircleSMIcon/>
        </div>

        <Typography
          text={"See Your Wealth Growing with You️"}
          className={'text-center w-[1000px] mb-2 z-10'}
        />
        <Typography
          text={"Bring all your Assets and Liabilities in a single platform. Wealth Mirror helps you in Centralize, Visualize, Analyze and Take Actions to Grow your Wealth."}
          color='text-gray'
          type={'body'}
          className={'text-center w-[770px] mb-6 z-10'}
        />
        <Button
          className={'z-10'}
          onClick={() => setOpen(true)}
        >
          {'Join Waitlist'}
        </Button>
      </div>
      <Dialog
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="px-20 py-20 flex flex-col items-center "
      >
        <Typography
          text={'Join Weight list'}
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
              onUpdate={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              label={'Your email *'}
              placeholder={'example@yourmail.com'}
              className="w-[500px]"
              value={form.email}
              onUpdate={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex items-center space-x-10">
            <Input
              label={'Company'}
              placeholder={'yourcompany name here'}
              className="w-[500px]"
              value={form.company}
              onUpdate={(e) => setForm({ ...form, company: e.target.value })}
            />
            <Input
              label={'Message'}
              placeholder={'How can we Help'}
              className="w-[500px]"
              value={form.message}
              onUpdate={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <Button
            className="w-[220px] mx-auto"
            onClick={() => {
              addWaitUser(form)
              setOpen(false)
            }}
          >
            {'Send Message'}
          </Button>
        </div>
      </Dialog>
    </section>
  )
}
