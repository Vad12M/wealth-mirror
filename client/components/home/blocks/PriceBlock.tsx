import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import BlockLayout from "@/components/layouts/BlockLayout";
import TickIcon from "@/ui/icons/TickIcon";
import HeartSmallIcon from "@/ui/icons/HeartSmallIcon";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function PriceBlock() {
  const whatIsIncluded = [
    'Auto Save Progress',
    'Bring data from various Apps',
    'Extended Support',
    'Free Product Upgrades',
  ]
  return (
    <BlockLayout
      title={'Wealth Mirror Premium'}
      primaryElements={['Premium']}
      styleDescription={'md:w-full w-[357px]'}
      description={'Simple pricing, no hidden fees — just straightforward plans that work for you. Let’s get started!'}
    >
      <div
        className="flex md:flex-row flex-col rounded-[30px] mt-10 md:mt-20 w-full"
        style={{ boxShadow: '0px 0px 74.6px 4px rgba(0, 179, 134, 0.39)' }}
      >
        <div className="rounded-[30px] p-[60px] w-[425px] h-[460px] border-2 border-primary bg-[#21342F]">
          <div className="flex space-x-4 items-start mb-7">
            <img src="/pricing/month.svg" alt="calendar"/>
            <div className="flex flex-col">
              <Typography text={'For Everyone'} type={'body1'} color={'text-grayLight'}/>
              <Typography text={'Monthly Plan'} type={'heading3'} color={'text-primary'}/>
            </div>
          </div>
          <div className="relative mb-12">
            <Typography
              text={'Take charge of your Wealth now and let it Prosper'}
              type={'body2'}
              color={'text-grayLight'}
              className={'w-[300px]'}
            />
            <div className="absolute left-[80px] bottom-1.5">
              <HeartSmallIcon/>
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <Typography text={'$19'} type={'heading1'} color={'text-primary'}/>
            <Typography text={'/ month'} type={'heading6'} color={'text-grayLight'} className="mb-5"/>
          </div>
          <Button className="w-[300px] mt-8 px-6 py-[18px] bg-primary rounded-[76px] font-bold" typeButton="none">
            {'Get Started'}
          </Button>
        </div>
        <div
          className="rounded-[30px] p-[60px] w-[425px] h-[460px]] border-2 border-primary bg-[#21342F] z-50 md:-ml-10 -mt-8 md:mt-0">
          <div className="flex space-x-4 items-start mb-7">
            <img src="/pricing/year.svg" alt="calendar"/>
            <div className="flex flex-col">
              <Typography text={'For Everyone'} type={'body1'} color={'text-grayLight'}/>
              <Typography text={'Yearly Plan'} type={'heading3'} color={'text-primary'}/>
            </div>
          </div>
          <div className="relative mb-12">
            <Typography
              text={'Take charge of your Wealth now and let it Prosper'}
              type={'body2'}
              color={'text-grayLight'}
              className={'w-[300px]'}
            />
            <div className="absolute left-[80px] bottom-1.5">
              <HeartSmallIcon/>
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <Typography text={'$99'} type={'heading1'} color={'text-primary'}/>
            <Typography text={'/ year'} type={'heading6'} color={'text-grayLight'} className="mb-5"/>
          </div>
          <Button className="w-[300px] mt-8 px-6 py-[18px] bg-primary rounded-[76px] font-bold" typeButton="none">
            {'Get Started'}
          </Button>
        </div>
        <div
          className="rounded-r-[30px] md:py-10 py-6 pl-16 pr-8 md:w-[405px] md:h-[465px] h-[320px] flex items-start justify-center flex-col space-y-4 z-20 ml-0 md:-ml-10 md:mt-0 -mt-10"
          style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.04)',
            borderRight: '2px solid rgba(255, 255, 255, 0.04)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.04)',
            background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%)'
          }}
        >
          <Typography text={'What’s included'} type={'heading5'} className="mb-2"/>
          <ul className="flex flex-col space-y-3">
            {whatIsIncluded.map((item, index) => (
              <li key={index} className={'flex items-center space-x-4'}>
                <TickIcon/>
                <Typography text={item} type={'body1'} color={'text-white'}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BlockLayout>
  )
}
