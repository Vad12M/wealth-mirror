import React from 'react';
import BlockLayout from "@/components/layouts/BlockLayout";
import Typography from "@/ui/typography/Typography";

export default function HowIsItWorkBlock() {
  const [hoveredType, setHoveredType] = React.useState<string | null>(null);

  return (
    <BlockLayout
      title={'How it Works?'}
      primaryElements={['Works?']}
      styleDescription={'md:w-[1176px] w-[352px]'}
      description={'Get rid of Old School ways of managing your Wealth in 2D Matrix. We will help you visualize your Wealth so that you can “Actually” see it growing and take Necessary Actions :)'}
    >
      <div
        className="p-6 md:p-8 md:rounded-[72px] rounded-[34px] m-container flex flex-col space-y-8"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.12)',
          background: 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0px 0px 74.6px 4px rgba(0, 179, 134, 0.39)'
        }}
        onMouseEnter={() => setHoveredType('centralize')}
        onMouseLeave={() => setHoveredType(null)}
      >
        <div className="flex md:flex-row flex-col items-center md:space-x-8 space-x-0 md:space-y-0 space-y-8">
          <div
            className="relative overflow-hidden md:w-[592px] w-[306px] md:h-[289px] h-[313px] md:rounded-[40px] rounded-[20px] border border-primary flex justify-end items-end bg-no-repeat bg-cover">
            <img
              src="/howItWorks/c1-gradient.svg"
              alt="gradient"
              className="absolute md:rounded-[40px] rounded-[20px] md:w-[588px] w-[303px] md:h-[287px] h-[311px] z-10"
            />
            {hoveredType === 'centralize'
              ? <video
                src={'/howItWorks/centralize.mp4'}
                autoPlay loop muted
                className="md:rounded-[40px] rounded-[20px] absolute"
              />
              : <img
                src="/howItWorks/c1.svg"
                alt="gradient"
                className="absolute md:rounded-[40px] rounded-[20px] md:w-[388px] w-[303px] md:h-[286px] h-[310px] left-0"
              />}
            <div className="flex flex-col items-end mb-16 mr-5 z-20">
              <Typography text={'Centralize'} type={'heading3'} className="mb-2"/>
              <Typography
                text={'Bring in all different aspects of your wealth in a single place.'}
                type={'body2'}
                className="w-[210px] text-end opacity-60"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: hoveredType === 'visualize' ? undefined : 'url("/howItWorks/v1.svg")' }}
            className="relative overflow-hidden md:w-[484px] w-[306px] h-[289px] md:rounded-[40px] rounded-[20px] border border-primary flex justify-end items-end bg-no-repeat bg-cover"
            onMouseEnter={() => setHoveredType('visualize')}
            onMouseLeave={() => setHoveredType(null)}
          >
            {hoveredType === 'visualize'
              ? <video
                src={'/howItWorks/visualize.mp4'}
                autoPlay loop muted
                className="md:rounded-[40px] rounded-[20px] absolute h-full"
              />
              : <img
                src="/howItWorks/v1-gradient.svg"
                alt="gradient"
                className="absolute md:rounded-[40px] rounded-[20px] md:w-[481px] w-[306px] h-[287px]"
              />}

            <img
              src="/howItWorks/v1-gradient.svg"
              alt="gradient"
              className="absolute md:rounded-[40px] rounded-[20px] md:w-[481px] w-[306px] h-[287px]"
            />
            <div className="flex flex-col items-end mb-[76px] mr-5 z-10">
              <Typography text={'Visualize'} type={'heading3'} className="mb-2"/>
              <Typography
                text={'See your Wealth growing in a way like Never Before.'}
                type={'body2'}
                className="w-[210px] text-end opacity-60"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:space-x-8 space-x-0 md:space-y-0 space-y-8">
          <div
            style={{ backgroundImage: 'url("/howItWorks/a1.svg")' }}
            className=" overflow-hidden relative md:w-[436px] w-[306px] h-[351px] md:rounded-[40px] rounded-[20px] border border-primary flex justify-end items-start"
            onMouseEnter={() => setHoveredType('analyse')}
            onMouseLeave={() => setHoveredType(null)}
          >
            {hoveredType === 'analyse' &&
              <video
                src={'/howItWorks/analyse.mp4'}
                autoPlay loop muted
                className="md:rounded-[40px] rounded-[20px] absolute"
              />
            }
            <img
              src="/howItWorks/a1-gradient.svg"
              alt="gradient"
              className="absolute md:rounded-[40px] rounded-[20px] md:w-[432px] w-[306px] md:h-[349px] h-[349px]"
            />
            <div className="flex flex-col items-end mt-8 mr-5 z-20">
              <Typography text={'Analyze'} type={'heading3'} className="mb-2"/>
              <Typography
                text={'Get daily / monthly / \n' +
                  'yearly / lifetime analysis of your portfolio.'}
                type={'body2'}
                className="w-[200px] text-end opacity-60"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url("/howItWorks/t1.svg")' }}
            className="overflow-hidden relative md:w-[640px] w-[306px] h-[351px] md:rounded-[40px] rounded-[20px] border border-primary flex justify-end items-start"
            onMouseEnter={() => setHoveredType('takeActions')}
            onMouseLeave={() => setHoveredType(null)}
          >
            {hoveredType === 'takeActions' &&
              <video
                src={'/howItWorks/takeaction.mp4'}
                autoPlay
                loop
                muted
                className="md:rounded-[40px] rounded-[20px] absolute"
              />}
            <img
              src="/howItWorks/t1-gradient.svg"
              alt="gradient"
              className="absolute md:rounded-[40px] rounded-[20px] md:w-[636px] w-[306px] md:h-[349px] h-[349px]"
            />

            <div className="flex flex-col items-end mt-8 mr-5 z-10">
              <Typography text={'Take Actions'} type={'heading3'} className="mb-2"/>
              <Typography
                text={'AI Engine that will give valuable recommendations on your wealth.'}
                type={'body2'}
                className="w-[210px] text-end opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </BlockLayout>
  )
}
