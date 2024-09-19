import Typography from "@/ui/typography/Typography";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function PlanBlock() {
  const isMobile = useGetIsMobile();

  const listItem = (index: string, text: string) => {
    return (
      <div className="flex items-center space-x-14">
        <Typography text={index} type={'heading5'}/>
        <Typography text={text} type={'heading6'} color={'text-bodyGray'}/>
      </div>
    )
  }

  return (
    <section className="p-20 w-full flex justify-center">
      <div className="md:w-[900px] w-[357px] flex flex-col">
        <Typography text={'Could This Membership Be Your Path to Better Wealth Management?'} type={isMobile ? 'heading3' : 'heading2'} className="mb-8"/>
        <Typography
          text={'Unlock the power to manage and grow your wealth with ease. Here\'s why a membership can transform'}
          type={'bodyB1'}
          className="mb-10 md:w-full w-[357px]"
          color={'text-bodyGray'}
        />
        <div className="flex flex-col space-y-4 mb-10 md:w-full w-[357px]">
          {listItem('01', 'Visualize your entire wealth portfolio in one place—assets, liabilities, and more, all centralized.')}
          {listItem('02', 'Make smarter, informed decisions with personalized insights, recommendations, and alerts tailored to your financial movements.')}
          {listItem('03', 'AI-driven suggestions help you spot opportunities, manage risks, and optimize your financial strategy.')}
          {listItem('04', 'Track value changes, get real-time updates, and always stay ahead with our intelligent recommendations.')}
        </div>
        <Typography
          text={'Take control of your financial future with a membership that empowers you to make better decisions and achieve greater results!'}
          type={'bodyB1'}
          color={'text-bodyGray'}
          className={'md:w-full w-[357px]'}
        />
      </div>
    </section>
  )
}
