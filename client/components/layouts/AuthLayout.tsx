import JoinWaitlistFooter from "@/components/home/JoinWaitlistFooter";
import Typography from "@/ui/typography/Typography";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './auth-layout.module.scss';
import { useRef } from "react";
import { Button } from "@/ui/button/Button";
import StarIcon from "@/ui/icons/StarIcon";

export default function AuthLayout({ children, type }: {
  children: React.ReactNode
  type?: 'login' | 'register'
}) {
  const sliderRef = useRef(null);
  const registerSlides = [
    {
      title: '“I could never imagine my wealth assets being displayed like this. This is magic”',
      name: 'Dheeraj Chellaramani',
      position: 'Lead Designer, Adobe'
    },
    {
      title: '“Seeing all my investments laid out so clearly is like a dream come true. I never thought it could be this simple”',
      name: 'Vadym Hevdi',
      position: 'Lead Developer, WM'
    },
    {
      title: '“This tool has made financial management so much more accessible and clear. It\'s a game-changer!”',
      name: 'Chhavi Dhingra',
      position: 'Interface Designer, WM'
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
          <img src={'/login/groupIcons.svg'} className="z-10 w-full h-[85%]" alt={'group-icons'}/>
          <img src={'/login/podium.svg'} className="absolute -bottom-28 right-8" alt={'podium'}/>
          <img src={'/login/login.svg'} className="absolute bottom-0" alt={'bg'}/>
        </div> :
        <div className="w-1/2 h-screen flex-col items-center relative overflow-hidden bg-[#233725] md:flex hidden">
          <img src={'/register/group.svg'} className="absolute -top-[5%]" alt={'bg'}/>
          <img src={'/register/group-canvas.svg'} className="absolute top-[30%]" alt={'bg'}/>
          <div className="absolute bottom-5 left-[12%] max-w-[600px]">
            <Swiper
              className={styles.swiper}
              ref={sliderRef}
              loop={true}
              slidesPerView={'auto'}
            >
              {registerSlides.map(el => (
                <SwiperSlide key={el.title}>
                  <div className="flex flex-col">
                    <Typography text={el.title} type="registerTitle" color="text-white" className="mb-5"/>
                    <Typography text={el.name} type="registerTitle" color="text-white" className="mb-3"/>
                    <Typography text={el.position} type="registerDesc" color="text-white"/>
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex items-center space-x-1 absolute right-0 bottom-28 z-10">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index}/>
                ))}
              </div>
              <div className="flex items-center space-x-8 absolute right-0 bottom-5 z-10">
                <Button
                  typeButton="none"
                  className="p-5 rounded-full border border-white hover:bg-white transition duration-600 group"
                  onClick={handlePrev}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:stroke-black stroke-white transition duration-600"
                  >
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </Button>
                <Button
                  typeButton="none"
                  className="p-5 rounded-full border border-white hover:bg-white transition duration-600 group"
                  onClick={handleNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:stroke-black stroke-white transition duration-600"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </Swiper>
          </div>
        </div>}
      <div className="absolute w-full z-50 bg-naturalBlack bottom-0 md:block hidden">
        <JoinWaitlistFooter/>
      </div>
    </div>
  )
}
