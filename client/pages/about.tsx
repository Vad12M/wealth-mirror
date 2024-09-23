import Typography from "@/ui/typography/Typography";
import React from "react";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import { FireflyLayout } from "@/components/FireflyLayout";
import OurValues from "@/components/about-blocks/OurValues";

export default function About() {
  const isMobile = useGetIsMobile();
  return (
    <section className="py-[140px] md:py-[200px] flex flex-col items-center max-w-[1110px]">
      <FireflyLayout/>
      <Typography
        text={'About Us'}
        type={isMobile ? 'heading1' : 'txt1'}
        primaryElements={['Us']}
        className="md:mb-[130px] mb-[100px]"
      />
      <div className='flex flex-col mb-[60px] w-full'>
        <Typography text={'Our Vision'} type={'heading2'} primaryElements={['Vision']} className="mb-5"/>
        <Typography
          text={'Empowering Individuals and Businesses to Visualize and Optimize their Wealth.'}
          type={'heading5'}
          primaryElements={['Us']}
          className="md:w-full w-[360px]"
        />
      </div>
      <div className='flex flex-col mb-[60px] w-full'>
        <Typography text={'Our Mission'} type={'heading2'} primaryElements={['Mission']} className="mb-5"/>
        <Typography
          text={'To create a World-Class Product that helps its users to manage their Tangible/Intangible Assets and Liabilities to make informed decisions and achieve their financial goals with clarity and confidence.  While every member of our Dream Team has different skills, we look for common strengths that make us better together.'}
          type={'heading5'}
          primaryElements={['Us']}
          className="md:w-full w-[360px]"
        />
      </div>
      <div>
        <FireflyLayout/>
        <OurValues/>
      </div>

    </section>
  )
}
