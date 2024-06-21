import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import FireIcon from "@/ui/icons/FireIcon";
import PresentIcon from "@/ui/icons/PresentIcon";

export default function PlanBlock() {

  const listItem = (index: string, text: string) => {
    return (
      <div className="flex items-center space-x-2">
        <Typography text={index} type={'healine6'}/>
        <Typography text={text} type={'bodyB1'} color={'text-bodyGray'}/>
      </div>
    )
  }

  return (
    <section className="py-20 w-full flex justify-center">
      <div className="w-[770px] flex flex-col">
        <Typography text={'Is Standard Plan a good choice for me?'} type={'healine2'} className="mb-8"/>
        <Typography
          text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .'}
          type={'bodyB1'}
          className="mb-5"
          color={'text-bodyGray'}
        />
        <div className="flex flex-col space-y-4 mb-6">
          {listItem('01', 'There are many variations of passages')}
          {listItem('02', 'Majority have suffered alteration in some form.')}
          {listItem('03', 'If you are going to use a passage of Lorem Ipsum.')}
          {listItem('04', ' It uses a dictionary of over 200 Latin words, combined.')}
        </div>
        <Typography
          text={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}
          type={'bodyB1'}
          color={'text-bodyGray'}
        />
      </div>
    </section>
  )
}
