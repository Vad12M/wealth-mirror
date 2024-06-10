import Typography from "@/ui/typography/Typography";
import AuthLayoutDecorRightIcon from "@/ui/icons/AuthLayoutDecorRightIcon";
import AuthLayoutDecorLeftIcon from "@/ui/icons/AuthLayoutDecorLeftIcon";

export default function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        {children}
      </div>
      <div className="w-1/2 bg-primary flex flex-col items-center justify-center h-screen relative">
        <div className="absolute top-[45%] right-10">
          <AuthLayoutDecorRightIcon/>
        </div>
        <div className="absolute top-72 left-10">
          <AuthLayoutDecorLeftIcon/>
        </div>
        <div className="bg-white rounded-[36px] mb-4 text-black px-2">
          {'QUOTES'}
        </div>
        <Typography
          text={'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.'}
          className={'text-center px-12 mb-[110px]'}
        />
        <div className="w-[88px] h-[88px] rounded-full bg-black mb-6"/>
        <Typography text={'John Doe'} type={'sub1'} className='mb-1'/>
        <Typography text={'CEO & Founder at Flex.co'} type={'body'}/>

      </div>
    </div>
  )
}
