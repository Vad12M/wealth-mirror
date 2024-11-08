import JoinWaitlistBlock from "@/components/join-waitlist/JoinWaitlistBlock";
import FAQBlock from "@/components/home/blocks/FAQBlock";
import { useState } from "react";
import { FireflyLayout } from "@/components/FireflyLayout";
import PriceBlock from "@/components/home/blocks/PriceBlock";
import JoinWaitlistPopup from "@/components/join-waitlist/JoinWaitlistPopup";
import HowIsItWorkBlock from "@/components/home/blocks/HowIsItWorkBlock";
import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import FireIcon from "@/ui/icons/FireIcon";

export default function Joinwaitlist() {
  const [open, setOpen] = useState(false);
  return (
    <main className="w-full h-full">
      <JoinWaitlistBlock onClick={() => setOpen(true)}/>
      <div>
        <div className="mt-20">
          <FireflyLayout/>
        </div>
        <HowIsItWorkBlock/>
      </div>
      <div>
        <div className="mt-20">
          <FireflyLayout/>
        </div>
        <PriceBlock/>
      </div>
      <div>
        <FireflyLayout/>
        <FAQBlock primaryElements={['FAQ’s']}/>
      </div>
      <div className="md:mt-[100px] mt-[60px] w-full flex justify-center items-center flex-col md:mb-40 mb-20">
        <Typography text={'Ready to join Wealth Mirror?'} type={'heading6'} className="mb-6"/>
        <Button
          onClick={() => setOpen(true)}
          typeButton='white-shadow'
          prefixBtn={() => <FireIcon color={'#E0FFDF'}/>} className={'z-10'}
        >
          {'Join Waitlist'}
        </Button>
      </div>
      <JoinWaitlistPopup open={open} setOpen={setOpen}/>
    </main>
  );
}
