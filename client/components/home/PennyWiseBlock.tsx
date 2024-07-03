import Typography from "@/ui/typography/Typography";
import CheckMarkIcon from "@/ui/icons/CheckMarkIcon";
import BlurCircleSMIcon from "@/ui/icons/waitlist/BlurCircleSMIcon";
import BlurCircleMDIcon from "@/ui/icons/waitlist/BlurCircleMDIcon";
import { FireflyLayout } from "@/components/FireflyLayout";

export default function PennyWiseBlock({
  onClick
}: {
  onClick?: () => void;
}) {
  const freeForEveryoneList = [
    'Visualize  US Stocks',
    'Visualize Indian Stocks',
    'Visualize Crypto',
    'Visualize Bonds',
    'Global Library',
  ];

  const paidList = [
    'Unlimited Collaboration Project Team',
    'Unlimited AI Messages (GPT 3.5)',
    'Team Space',
    'All Integrations, APIs, webhooks',
    'Priority support'
  ]

  return (
    <section className="relative mb-22">
      <FireflyLayout/>
      <div className="m-container pt-[140px] relative">
        <div className="absolute -left-20 top-[70%]">
          <BlurCircleSMIcon/>
        </div>
        <div className="absolute top-0 left-[45%]">
          <BlurCircleSMIcon/>
        </div>
        <div className="absolute -right-10 top-44">
          <BlurCircleMDIcon/>
        </div>
        <Typography
          text={'Don’t be Penny Wise, Pound Foolish :)'}
          type={'healine2'}
          className={'text-center mb-[70px]'}
        />
        <div className="flex items-center space-x-6">
          <div
            className="h-[432px] w-[576px] p-10 bg-darkGray2 border-darkGray1 rounded-[24px] flex flex-col items-center border">
            <Typography
              text={'Free for everyone'}
              type={'healine4'}
              className="mb-8 pb-8 border-b border-darkGray1 w-full text-center"
            />
            <div className="flex flex-col space-y-3 mb-8">
              {freeForEveryoneList.map((item, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <CheckMarkIcon/>
                  <Typography text={item} type={'body'}/>
                </div>
              ))}
            </div>
            <button
              onClick={onClick}
              className="py-2 border rounded-[56px] w-full flex justify-center">
              <Typography text={'Try the Product'} type={'healine6'}/>
            </button>
          </div>
          <div
            className="h-[432px] w-[576px] p-10 rounded-[24px] flex flex-col items-center border border-primary"
            style={{ background: 'linear-gradient(180deg, rgba(59, 210, 131, 0.10) 0%, rgba(79, 90, 190, 0.05) 100%)' }}
          >
            <Typography
              text={'₹999 / year'}
              type={'healine4'}
              className="mb-8 pb-8 border-b border-darkGray1 w-full text-center"
            />
            <div className="flex flex-col space-y-3 mb-8">
              {paidList.map((item, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <CheckMarkIcon/>
                  <Typography text={item} type={'body'}/>
                </div>
              ))}
            </div>
            <button
              onClick={onClick}
              className="py-2 rounded-[56px] w-full flex justify-center"
              style={{
                background: 'linear-gradient(90deg, #3EDC79 0%, #1E6BEB 100%',
                border: '1px solid rgba(255, 255, 255, 0.40)'
              }}
            >
              <Typography text={'Get started'} type={'healine6'}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
