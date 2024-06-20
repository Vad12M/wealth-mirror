import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import BlockLayout from "@/components/layouts/BlockLayout";
import ColorsIcon from "@/ui/icons/servicesBlock/ColorsIcon";
import TickIcon from "@/ui/icons/TickIcon";

export default function PriceBlock() {
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
      description={'Here\'s our pricing plan: affordable, straightforward, and no hidden fees. That\'s it. Let\'s get started!'}
    >
      <div className="flex">
        <div
          className="rounded-l-[30px] py-10 px-8 w-[450px] h-[450px] pl-[50px] pt-[32px]"
          style={{
            borderTop: '2px solid var(--Green-500, #00D094)',
            borderBottom: '2px solid var(--Green-500, #00D094)',
            borderLeft: '2px solid var(--Green-500, #00D094)',
            background: ' #21342F'
          }}
        >
          <div className="flex space-x-4 items-start mb-4">
            <ColorsIcon/>
            <div className="flex flex-col">
              <Typography text={'For Everyone'} type={'body'} color={'text-grayLight'}/>
              <Typography text={'1 Year Membership'} type={'sub1'} color={'text-primary'}/>
            </div>
          </div>
          <Typography
            text={'Take charge of your Wealth now and let it Prosper ❤️'}
            type={'body'}
            color={'text-grayLight'}
            className={'w-[300px] mb-4'}
          />
          <div className="flex items-center space-x-2">
            <Typography text={'₹999'} type={'h1'} color={'text-primary'}/>
            <Typography text={'/ year for Indian Users'} type={'body'} color={'text-grayLight'}/>
          </div>
          <div className="flex items-center space-x-2">
            <Typography text={'$99'} type={'h1'} color={'text-primary'}/>
            <Typography text={'/ year for International Users'} type={'body'} color={'text-grayLight'}/>
          </div>
          <Button className="w-[300px]">
            {'JOIN NOW!'}
          </Button>
        </div>
        <div
          className="rounded-r-[30px] py-10 px-8 w-[380px] h-[450px] flex items-start justify-center flex-col space-y-4"
          style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.08)',
            borderRight: ' 2px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.12)'
          }}
        >
          <Typography text={'What’s included'} type={'bodySB'} className="mb-2"/>
          <ul className="flex flex-col space-y-3">
            {whatIsIncluded.map((item, index) => (
              <li key={index} className={'flex items-center space-x-2'}>
                <TickIcon/>
                <Typography text={item} type={'body'} color={'text-white'}/>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </BlockLayout>
  )
}
