import VideoBlock from "@/components/mainHome/blocks/VideoBlock";
import PriceBlock from "@/components/mainHome/blocks/PriceBlock";
import HeroBlock from "@/components/mainHome/blocks/HeroBlock";
import FAQBlock from "@/components/mainHome/blocks/FAQBlock";
import { useGetMeQuery } from "@/store/api/apiSlice";
import useAuthHandler from "@/service/useAuthHandler";
import { FireflyLayout } from "@/components/FireflyLayout";
import HowIsItWorkBlock from "@/components/mainHome/blocks/HowIsItWorkBlock";
import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import FireIcon from "@/ui/icons/FireIcon";
import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "next/router";


export default function HowItWorks() {
  const { hasAuthToken } = useAuthHandler();
  const { isLoggedIn } = useGetUser();
  const router = useRouter();
  const { data } = useGetMeQuery({}, { skip: !hasAuthToken() });
  return (
    <main className="w-full">
      <HeroBlock/>
      <VideoBlock/>
      <div>
        <div className="mt-20">
          <FireflyLayout/>
        </div>
        <HowIsItWorkBlock/>
      </div>
      {/*<PlatformToAnalyzeBlock/>*/}
      {/*<ServicesBlock/>*/}
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
      {/*<SpotlightBlock/>*/}
      <div className="md:mt-[100px] mt-[60px] w-full flex justify-center items-center flex-col md:mb-40 mb-20">
        <Typography text={'Ready to join Wealth Mirror?'} type={'heading6'} className="mb-6"/>
        <Button
          onClick={() => router.push(isLoggedIn ? '/wealthverse' : '/auth/login')}
          typeButton='white-shadow'
          prefixBtn={() => <FireIcon color={'#E0FFDF'}/>} className={'z-10'}
        >
          {'Try Wealth Mirror'}
        </Button>
      </div>
    </main>
  );
}
