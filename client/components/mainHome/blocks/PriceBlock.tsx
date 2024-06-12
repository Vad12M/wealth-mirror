import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import BlockLayout from "@/components/layouts/BlockLayout";

export default function PriceBlock() {
  const whatIsIncluded = [
    'All analytics features',
    'Up to 250,000 tracked visits',
    'Normal support',
    'Up to 3 team members',
  ]
  return (
    <BlockLayout
      title={'Our Pricing Plan'}
      primaryElements={['Pricing']}
      description={'Here\'s our pricing plan: affordable, straightforward, and no hidden fees. That\'s it. Let\'s get started!'}
    >
      <div className="flex">
        <div
          className="rounded-l-[30px] py-10 px-8 w-[450px] h-[450px] pl-[50px] pt-[64px]"
          style={{
            borderTop: '2px solid var(--Green-500, #00D094)',
            borderBottom: '2px solid var(--Green-500, #00D094)',
            borderLeft: '2px solid var(--Green-500, #00D094)',
            background: ' #21342F'
          }}
        >
          <div>
            <Typography
              text={'For individuals'}
              type={'body'}
              color={'text-grayLight'}
            />
            <Typography
              text={'Basic'}
              type={'bodySB'}
              color={'text-primary'}
            />

          </div>
          <Typography
            text={'Show social proof notifications to increase leads and sales.'}
            type={'body'}
            color={'text-grayLight'}
          />
          <div className="flex items-center space-x-2">
            <Typography
              text={'₹999'}
              type={'h1'}
              color={'text-primary'}
            />
            <Typography
              text={'/year'}
              type={'body'}
              color={'text-grayLight mt-5'}
            />
          </div>
          <Button>
            {'Get Started'}
          </Button>
        </div>
        <div
          className="rounded-r-[30px] py-10 px-8 w-[380px] h-[450px]"
          style={{
            borderTop: '2px solid rgba(255, 255, 255, 0.08)',
            borderRight: ' 2px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.12)'
          }}
        >
          <Typography text={'What’s included'} type={'bodySB'}/>
          <ul className="flex flex-col">
            {whatIsIncluded.map((item, index) => (
              <li key={index} className={'flex items-center space-x-2'}>
                <Typography text={item} type={'body'} color={'text-white'}/>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </BlockLayout>
  )
}
