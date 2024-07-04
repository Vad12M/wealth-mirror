import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import FireIcon from "@/ui/icons/FireIcon";
import { useRouter } from "next/router";
import useGetUser from "@/hooks/useGetUser";
import CentralizeIcon from "@/ui/icons/hero/CentralizeIcon";
import VisualizeIcon from "@/ui/icons/hero/VisualizeIcon";
import AnalyzeIcon from "@/ui/icons/hero/AnalyzeIcon";
import ActionsIcon from "@/ui/icons/hero/ActionsIcon";

export default function HeroBlock() {
  const { isLoggedIn } = useGetUser();
  const router = useRouter();
  return (
    <section
      className="py-40 relative bg-cover bg-bottom w-full h-[1200px]"
      style={{ backgroundImage: 'url("/header-banner.svg")' }}
    >
      <div className='m-container px-10 flex items-center flex-col pt-[125px]'>
        <Typography
          text={'See Your Wealth Growing With You ❤️'}
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

        <div className="flex items-center space-x-10 mb-[46px]">
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
