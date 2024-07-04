import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import BlockLayout from "@/components/layouts/BlockLayout";
import ColorsIcon from "@/ui/icons/servicesBlock/ColorsIcon";
import TickIcon from "@/ui/icons/TickIcon";
import HeartSmallIcon from "@/ui/icons/HeartSmallIcon";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function PriceBlock() {
  const isMobile = useGetIsMobile();
  const whatIsIncluded = [
    'Auto Save Progress',
    'Bring data from various Apps',
    'Extended Support',
    'Free Product Upgrades',
  ]
  return (
    <BlockLayout
      title={'Our Pricing Plan'}
      primaryElements={['Pricing']}
      styleDescription={'md:w-[776px] w-[352px]'}
      description={'Here\'s our pricing plan: affordable, straightforward, and no hidden fees. That\'s it. Let\'s get started!'}
    >
      <div
        className="flex md:flex-row flex-col"
        style={{
          filter: isMobile ? undefined : 'drop-shadow(1px 0px 35px rgba(0, 179, 134, 0.47))',
          boxShadow: isMobile ? '0px 0px 74.6px 4px rgba(0, 179, 134, 0.39)' : undefined,
        }}
      >
        {/*Desktop*/}
        <div
          className="md:block hidden rounded-l-[30px] py-10 px-8 w-[450px] h-[450px] pl-[50px] pt-[64px]"
          style={{
            borderTop: '2px solid #00D094',
            borderBottom: '2px solid  #00D094',
            borderLeft: '2px solid #00D094',
            background: '#21342F',
          }}
        >
          <div className="flex space-x-4 items-start mb-5">
            <ColorsIcon/>
            <div className="flex flex-col">
              <Typography text={'For Everyone'} type={'body'} color={'text-grayLight'}/>
              <Typography text={'1 Year Membership'} type={'sub1'} color={'text-primary'}/>
            </div>
          </div>
          <div className="relative mb-6">
            <Typography
              text={'Take charge of your Wealth now and let it Prosper'}
              type={'body'}
              color={'text-grayLight'}
              className={'w-[320px]'}
            />
            <div className="absolute left-[84px] bottom-1">
              <HeartSmallIcon/>
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <Typography text={'₹999'} type={'h1'} color={'text-primary'}/>
            <Typography text={'/ year'} type={'heading6'} color={'text-grayLight'} className="mb-5"/>
          </div>
          {/*<div className="flex items-center space-x-2">*/}
          {/*  <Typography text={'$99'} type={'h1'} color={'text-primary'}/>*/}
          {/*  <Typography text={'/ year for International Users'} type={'body'} color={'text-grayLight'}/>*/}
          {/*</div>*/}
          <Button className="w-[300px] mt-4">
            {'Get Started'}
          </Button>
        </div>

        {/*Mobile*/}
        <div
          className="md:hidden block rounded-t-[16px] w-[352px] h-[410px] p-[22px]"
          style={{
            borderTop: '2px solid #00D094',
            borderLeft: '2px solid #00D094',
            borderRight: '2px solid #00D094',
            background: '#21342F',
          }}
        >
          <div className="flex space-x-4 items-start mb-5">
            <ColorsIcon/>
            <div className="flex flex-col">
              <Typography text={'For Everyone'} type={'body1'} color={'text-grayLight'}/>
              <Typography text={'1 Year Membership'} type={'heading5'} color={'text-primary'}/>
            </div>
          </div>
          <div className="relative mb-6">
            <Typography
              text={'Take charge of your Wealth now and let it Prosper'}
              type={'body2'}
              color={'text-grayLight'}
              className={'w-[290px]'}
            />
            <div className="absolute left-[84px] bottom-1">
              <HeartSmallIcon/>
            </div>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <Typography text={'₹999'} type={'h1'} color={'text-primary'}/>
            <Typography text={'/ year'} type={'heading6'} color={'text-grayLight'} className="mb-5"/>
          </div>
          <Button className="w-[300px]">
            {'Get Started'}
          </Button>
        </div>

        {/*Desktop*/}
        <div
          className="rounded-r-[30px] py-10 px-8 w-[380px] h-[450px] hidden md:flex items-start justify-center flex-col space-y-4"
          style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.08)',
            borderRight: '2px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.08)',
            background: '#1F1F1F'
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

        {/*Mobile*/}
        <div
          className="rounded-b-[16px] py-5 px-8 w-[352px] h-[250px] md:hidden flex items-start justify-center flex-col space-y-4"
          style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.08)',
            borderRight: '2px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.08)',
            background: '#393939'
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
