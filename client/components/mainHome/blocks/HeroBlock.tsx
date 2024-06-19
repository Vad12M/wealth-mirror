import Typography from "@/ui/typography/Typography";
import Hero1Icon from "@/ui/icons/heroBlock/Hero1Icon";
import Hero2Icon from "@/ui/icons/heroBlock/Hero2Icon";
import Hero3Icon from "@/ui/icons/heroBlock/Hero3Icon";
import { Button } from "@/ui/button/Button";
import FireIcon from "@/ui/icons/FireIcon";

export default function HeroBlock() {
  return (
    <section
      className="py-40 relative bg-cover bg-bottom w-full h-[1200px]"
      style={{ backgroundImage: 'url("/header-banner.svg")' }}
    >
      <div className='m-container px-10 flex items-center flex-col pt-[125px]'>
        <Typography
          text={'Discover endless possibilities in the world of Trading.'}
          type={'h1'}
          color={'text-black'}
          className={'text-center mb-6'}
        />
        <Typography
          text={'Wealth Mirror helps its users to manage their Tangible/Intangible Assets and Liabilities to make informed decisions and achieve their financial goals with clarity and confidence.'}
          type={'body'}
          color={'text-gray'}
          className={'text-center w-[820px] mb-10'}
        />

        <div className="flex items-center space-x-6 mb-[46px]">
          <div className="flex items-center space-x-2">
            <Hero1Icon/>
            <Typography text={'Centralize'} type={'bodySB'} color={'text-black'}/>
          </div>
          <div className="flex items-center space-x-2">
            <Hero2Icon/>
            <Typography text={'Visualize'} type={'bodySB'} color={'text-black'}/>
          </div>
          <div className="flex items-center space-x-2">
            <Hero3Icon/>
            <Typography text={'Analyze'} type={'bodySB'} color={'text-black'}/>
          </div>
          <div className="flex items-center space-x-2">
            <Hero3Icon/>
            <Typography text={'Take Actions'} type={'bodySB'} color={'text-black'}/>
          </div>
        </div>

        <Button
          prefixBtn={() => <FireIcon/>}
          typeButton={'secondary'}
          onClick={() => {
          }}
        >
          {'Try Wealth Mirror'}
        </Button>
      </div>
    </section>
  )
}
