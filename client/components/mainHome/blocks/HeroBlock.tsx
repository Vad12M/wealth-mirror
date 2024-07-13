import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import FireIcon from "@/ui/icons/FireIcon";
import { useRouter } from "next/router";
import useGetUser from "@/hooks/useGetUser";
import CentralizeIcon from "@/ui/icons/hero/CentralizeIcon";
import VisualizeIcon from "@/ui/icons/hero/VisualizeIcon";
import AnalyzeIcon from "@/ui/icons/hero/AnalyzeIcon";
import ActionsIcon from "@/ui/icons/hero/ActionsIcon";
import HeartIcon from "@/ui/icons/HeartIcon";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function HeroBlock() {
  const { isLoggedIn } = useGetUser();
  const router = useRouter();
  const isMobile = useGetIsMobile();

  return (
    <section
      className="py-6 md:py-40 relative bg-cover bg-bottom w-full md:h-[1000px] h-[1300px]"
      style={{ backgroundImage: 'url("/header-banner.svg")' }}
    >
      <div className='m-container px-10 flex items-center flex-col pt-[125px]'>
        <div
          className="flex lg:flex-row flex-col items-center justify-center mb-8 lg:space-x-6 z-10 md:w-full w-[290px]">
          <Typography
            type={isMobile ? "heading3" : "title"}
            text={"See Your Wealth Growing with You️"}
            className={'text-center md:mb-0 mb-2'}
            color={'text-primaryDark'}
          />
          <div>
            <HeartIcon size={isMobile ? 28 : 52}/>
          </div>
        </div>
        <Typography
          text={"Wealth Mirror helps its users to manage their Tangible/Intangible Assets and Liabilities to make informed decisions and achieve their financial goals with clarity and confidence."}
          color='text-primaryLight'
          type={'heading6'}
          className={'text-center mb-8 z-10 px-3'}
        />

        <div className="hidden md:flex items-center space-x-10 mb-[44px] z-10">
          <div className="flex items-center space-x-2">
            <CentralizeIcon/>
            <Typography text={'Centralize'} type={'heading6'} color={'text-primaryLight'}/>
          </div>
          <div className="flex items-center space-x-2">
            <VisualizeIcon/>
            <Typography text={'Visualize'} type={'heading6'} color={'text-primaryLight'}/>
          </div>
          <div className="flex items-center space-x-2">
            <AnalyzeIcon/>
            <Typography text={'Analyze'} type={'heading6'} color={'text-primaryLight'}/>
          </div>
          <div className="flex items-center space-x-2">
            <ActionsIcon/>
            <Typography text={'Take Actions'} type={'heading6'} color={'text-primaryLight'}/>
          </div>
        </div>

        <div className="flex md:hidden flex-col items-center mt-[35px] mb-[44px] z-10">
          <div className="flex items-center space-x-2 mb-[60px]">
            <CentralizeIcon/>
            <Typography text={'Centralize'} type={'heading6'} color={'text-primaryLight'}/>
          </div>
          <div className='flex items-center space-x-[60px] mb-[60px]'>
            <div className="flex items-center space-x-2">
              <VisualizeIcon/>
              <Typography text={'Visualize'} type={'heading6'} color={'text-primaryLight'}/>
            </div>
            <div className="flex items-center space-x-2">
              <AnalyzeIcon/>
              <Typography text={'Analyze'} type={'heading6'} color={'text-primaryLight'}/>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ActionsIcon/>
            <Typography text={'Take Actions'} type={'heading6'} color={'text-primaryLight'}/>
          </div>
        </div>

        <Button
          prefixBtn={() => <FireIcon/>}
          typeButton={'secondary'}
          onClick={() => router.push(isLoggedIn ? '/canvas' : '/auth/login')}
        >
          {'Try Wealth Mirror'}
        </Button>
      </div>
    </section>
  )
}
