import JoinWaitlistFooter from "@/components/home/JoinWaitlistFooter";

export default function AuthLayout({ children, type }: {
  children: React.ReactNode
  type?: 'login' | 'register'
}) {
  return (
    <div className="flex w-full z-10">
      <div className="w-1/2">
        {children}
      </div>
      {type === 'login' ? <div
          className="w-1/2 h-screen border-l border-primary flex flex-col items-center  relative overflow-hidden"
          style={{
            boxShadow: '1px 8px 70.5px 32px rgba(0, 179, 134, 0.40)',
            background: 'rgba(242, 255, 185, 0.35)'
          }}
        >
          <img src={'/login/groupIcons.svg'} className="z-10 w-full h-[85%]" alt={'group-icons'}/>
          <img src={'/login/podium.svg'} className="absolute -bottom-20 right-8" alt={'podium'}/>
          <img src={'/login/login.svg'} className="absolute bottom-0" alt={'bg'}/>
        </div> :
        <div className="w-1/2 h-screen flex flex-col items-center relative overflow-hidden bg-[#233725]">
          <img src={'/register/group-canvas.svg'} className="absolute top-[30%]" alt={'bg'}/>
        </div>}
      <div className="absolute w-full z-50 bg-naturalBlack bottom-0">
        <JoinWaitlistFooter/>
      </div>
    </div>
  )
}
