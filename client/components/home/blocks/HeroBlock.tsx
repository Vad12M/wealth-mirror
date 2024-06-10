import Typography from "@/ui/typography/Typography";
import Hero1Icon from "@/ui/icons/heroBlock/Hero1Icon";
import Hero2Icon from "@/ui/icons/heroBlock/Hero2Icon";
import Hero3Icon from "@/ui/icons/heroBlock/Hero3Icon";
import { Button } from "@/ui/button/Button";
import FireIcon from "@/ui/icons/FireIcon";
import PresentIcon from "@/ui/icons/PresentIcon";

export default function HeroBlock() {

  return (
    <section
      className="py-40 relative bg-cover w-screen h-screen"
      style={{
        backgroundImage: 'url("/header-banner.svg")',
      }}
    >
      <div className='m-container px-10 flex items-center flex-col pt-[125px]'>
        <Typography
          text={'Discover endless possibilities in the world of Trading.'}
          type={'h1'}
          color={'text-black'}
          className={'text-center mb-6'}
        />
        <Typography
          text={'Step into the world of trading excellence and seize every opportunity with our advanced platform, expert guidance, and strategic insights for unrivaled financial success.'}
          type={'body'}
          color={'text-gray'}
          className={'text-center w-[820px] mb-10'}
        />

        <div className="flex items-center space-x-6 mb-[46px]">
          <div className="flex items-center space-x-2">
            <Hero1Icon/>
            <Typography text={'Feasible'} type={'bodySB'} color={'text-black'}/>
          </div>
          <div className="flex items-center space-x-2">
            <Hero2Icon/>
            <Typography text={'Secure & Reliable'} type={'bodySB'} color={'text-black'}/>
          </div>
          <div className="flex items-center space-x-2">
            <Hero3Icon/>
            <Typography text={'Continuous Market Updates'} type={'bodySB'} color={'text-black'}/>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Button
            prefixBtn={() => <FireIcon/>}
            typeButton={'secondary'}
            onClick={() => {}}
          >
            {'Start Trading'}
          </Button>
          <Button
            prefixBtn={() => <PresentIcon/>}
            typeButton={'transparent'}
            onClick={() => {}}
          >
            {'Try Demo'}
          </Button>

        </div>
      </div>
    </section>
  )
}
