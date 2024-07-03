import Typography from "@/ui/typography/Typography";
import BlurCircleMDIcon from "@/ui/icons/waitlist/BlurCircleMDIcon";
import BlurCircleSMIcon from "@/ui/icons/waitlist/BlurCircleSMIcon";
import { FireflyLayout } from "@/components/FireflyLayout";

export default function JoinWaitlistBlock({
  onClick
}: {
  onClick?: () => void;
}) {
  return (
    <section className="relative min-w-[100%] bg-cover">
      <FireflyLayout/>
      <div className="m-container">
        {/*<div className="absolute">*/}
        {/*  <VerticalLinesIcon/>*/}
        {/*</div>*/}
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
        <Typography text={"See Your Wealth Growing with You️ ❤️"} className={'text-center w-[1100px] mb-2 z-10'}/>
        <Typography
          text={"Bring all your Assets and Liabilities in a single platform. Wealth Mirror helps you in Centralize, Visualize, Analyze and Take Actions to Grow your Wealth."}
          color='text-gray'
          type={'body'}
          className={'text-center w-[770px] mb-6 z-10'}
        />
        <button
          onClick={onClick}
          className="py-2 rounded-[5px] w-[150px] flex justify-center z-10 mt-6"
          style={{
            background: 'linear-gradient(90deg, #3EDC79 0%, #1E6BEB 100%)',
            border: '1px solid rgba(255, 255, 255, 0.40)'
          }}
        >
          <Typography text={'Join Waitlist'} type={'healine6'}/>
        </button>
      </div>
    </section>
  )
}
