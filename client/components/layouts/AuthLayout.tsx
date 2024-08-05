import JoinWaitlistFooter from "@/components/home/JoinWaitlistFooter";
import Typography from "@/ui/typography/Typography";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './auth-layout.module.scss';
import { useRef } from "react";
import { Button } from "@/ui/button/Button";
import StarIcon from "@/ui/icons/StarIcon";
import ArrowLeft from "@/ui/icons/register/ArrowLeft";
import ArrowRight from "@/ui/icons/register/ArrowRight";

export default function AuthLayout({ children, type }: {
  children: React.ReactNode
  type?: 'login' | 'register'
}) {
  const sliderRef = useRef(null);
  const registerSlides = [
    {
      title: '“I could never imagine my wealth assets being displayed like this. This is magic”',
      name: 'Dheeraj',
      position: 'Lead Designer, Google',
      image: '/register/group-canvas.svg'
    },
    {
      title: '“Seeing all my investments laid out so clearly is like a dream come true. I never thought it could be this simple”',
      name: 'Vadym',
      position: 'Lead Developer, WM',
      image: '/register/group-canvas-1.svg'
    },
    {
      title: '“This tool has made financial management so much more accessible and clear. It\'s a game-changer!”',
      name: 'Chhavi',
      position: 'Interface Designer, WM',
      image: '/register/group-canvas-2.svg'
    }
  ];

  const handlePrev = () => {
    if (sliderRef.current !== null && (sliderRef.current as any).swiper !== null) {
      (sliderRef.current as any).swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current !== null && (sliderRef.current as any).swiper !== null) {
      (sliderRef.current as any).swiper.slideNext();
    }
  };

  return (
    <div className="flex w-full z-10">
      <div className="w-full md:w-1/2">
        {children}
      </div>
      {type === 'login' ? <div
          className="w-1/2 h-screen border-l border-primary flex-col items-center relative overflow-hidden md:flex hidden"
          style={{
            boxShadow: '1px 8px 70.5px 32px rgba(0, 179, 134, 0.40)',
            background: 'rgba(242, 255, 185, 0.35)'
          }}
        >
          <div className="w-full">
            <img src="/login/house-1.svg" alt="group" className="floating delay-1 mt-14 ml-12"/>
            <img src="/login/house-2.svg" alt="group" className="floating delay-2 absolute right-20 top-10"/>
            <img src="/login/E-key.svg" alt="group" className="floating absolute right-[20%] top-[20%]"/>
            <img src="/login/scooter.svg" alt="group" className="floating delay-5 ml-[40%]"/>
            <img src="/login/tree-1.svg" alt="group" className="floating delay-6 ml-12 -mt-10"/>
            <img src="/login/card-1.svg" alt="group" className="floating delay-6 ml-56"/>
            <img src="/login/tree-2.svg" alt="group" className="floating delay-1 ml-[35%] mt-8"/>
            <img src="/login/card-2.svg" alt="group" className="floating delay-1 absolute right-[15%] -mt-52"/>
            <img src="/login/tree-3.svg" alt="group" className="floating delay-2 absolute right-[35%] -mt-40"/>
            <img src="/login/car-1.svg" alt="group" className="floating delay-4 ml-16"/>
            <img src="/login/tree-4.svg" alt="group" className="floating delay-3 absolute right-20 -mt-40 z-50"/>
            <img src="/login/key.svg" alt="group" className="floating delay-4 absolute right-[30%] -mt-24 z-50"/>
            <img src="/login/car-2.svg" alt="group" className="floating delay-5 mt-28 ml-10"/>
            <img src="/login/cash.svg" alt="group" className="floating delay-2 ml-[50%] -mt-40 z-50"/>
            <img src="/login/house-3.svg" alt="group" className="floating delay-3 absolute right-[10%] z-50"/>
          </div>
          <img
            src={'/login/podium.svg'}
            className="absolute transform -bottom-36 -translate-x-1/2  left-1/2"
            alt={'podium'}
          />
          <img src={'/login/login.svg'} className="absolute bottom-0" alt={'bg'}/>
        </div> :
        <div className="w-1/2 overflow-hidden bg-[#233725] md:block hidden">
          <Swiper
            className={`h-screen relative flex-col items-center md:flex hidden`}
            ref={sliderRef}
            loop={true}
            slidesPerView={'auto'}
          >
            {registerSlides.map(el => (
              <SwiperSlide key={el.title}>
                <div>
                  <img src={'/register/group.svg'} className="absolute -top-[8%]" alt={'bg'}/>
                  <img src={el.image} className="absolute top-[30%] transform -translate-x-1/2 left-1/2" alt={'bg'}/>
                </div>
                <div className="absolute bottom-5 left-[12%] max-w-[600px]">
                  <div className="flex flex-col">
                    <Typography text={el.title} type="registerTitle" color="text-white" className="mb-5"/>
                    <Typography text={el.name} type="registerTitle" color="text-white" className="mb-3"/>
                    <Typography text={el.position} type="registerDesc" color="text-white"/>
                  </div>
                  <div className="flex items-center space-x-1 absolute right-2 bottom-20 z-10">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index}/>
                    ))}
                  </div>

                </div>
                <img src={'/register/ellipse.svg'} className="h-[70%] w-full absolute bottom-0" alt={'bg'}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>}
      {type === 'register' && <div className="flex items-center space-x-8 absolute right-36 bottom-[135px] z-50 group">
        <Button
          typeButton="none"
          className="p-5 rounded-full border border-white hover:bg-white transition duration-600 group"
          onClick={handlePrev}
        >
          <ArrowLeft/>
        </Button>
        <Button
          typeButton="none"
          className="p-5 rounded-full border border-white hover:bg-white transition duration-600 group"
          onClick={handleNext}
        >
          <ArrowRight/>
        </Button>
      </div>}
      <div className="absolute w-full z-50 bg-naturalBlack bottom-0 md:block hidden">
        <JoinWaitlistFooter/>
      </div>
    </div>
  )
}
