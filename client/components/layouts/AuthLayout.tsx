import JoinWaitlistFooter from "@/components/home/JoinWaitlistFooter";
import Typography from "@/ui/typography/Typography";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import { Button } from "@/ui/button/Button";
import StarIcon from "@/ui/icons/StarIcon";
import { Autoplay } from "swiper/modules";

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
        <div className="w-1/2 overflow-hidden md:block hidden relative border-l border-primary"
             style={{
               background: 'rgba(242, 255, 185, 0.35)',
               boxShadow: '1px 8px 70.5px 32px rgba(0, 179, 134, 0.40)'
             }}
        >
          <img src="/register/ellipseBig.svg" alt="bg"
               className="absolute transform -translate-x-1/2 left-1/2 bottom-10"/>
          <Swiper
            className={`h-screen relative flex-col items-center md:flex hidden`}
            ref={sliderRef}
            loop={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {registerSlides.map(el => (
              <SwiperSlide key={el.title}>
                <div>
                  <div className="w-full">
                    <div className='w-[200px] -rotate-[30deg] -mt-10 -ml-2'>
                      <img src="/register/home-1.svg" alt="group" className="floating delay-1 "/>
                    </div>
                    <img src="/register/tree-1.svg" alt="group"
                         className="floating delay-2 absolute top-[10%] left-[50%]"/>
                    <img src="/register/money.svg" alt="group"
                         className="floating delay-3 absolute right-[24%] top-[18%]"/>
                    <div className='w-[200px] rotate-[70deg] absolute -right-4 top-[25%]'>
                      <img src="/register/home-3.svg" alt="group" className="floating delay-5 w-[200px]"/>
                    </div>
                    <img src="/register/card-1.svg" alt="group" className="floating delay-6 ml-40 mt-32"/>
                    <img src="/register/card-2.svg" alt="group" className="floating delay-2 ml-96 -mt-28"/>
                    <div className='w-[200px] -rotate-[30deg] -ml-4 mt-10'>
                      <img src="/register/home-2.svg" alt="group" className="floating delay-1 w-[200px]"/>
                    </div>
                    <img src="/register/key-1.svg" alt="group"
                         className="floating delay-1 absolute right-[35%] -mt-24"/>
                    <img src="/register/key-2.svg" alt="group"
                         className="floating delay-2 absolute left-[35%] -mt-32"/>
                    <img src="/register/saving.svg" alt="group" className="floating delay-4 absolute right-16 -mt-5"/>
                  </div>
                  <img src={el.image}
                       className="absolute top-[40%] transform -translate-x-1/2 left-1/2 w-[700px] h-[400px]"
                       alt={'bg'}/>
                </div>
                <div className="absolute bottom-0  p-5 pt-20"
                     style={{
                       background: 'linear-gradient(0deg, #0C0C0C 20.02%, rgba(0, 0, 0, 0.00) 100%)'
                     }}
                >
                  <div className="flex flex-col px-10">
                    <Typography text={el.title} type="registerTitle" color="text-white" className="mb-3 z-50"/>
                    <Typography text={el.name} type="registerTitle" color="text-white" className="mb-1 z-50"/>
                    <Typography text={el.position} type="registerDesc" color="text-white"/>
                  </div>
                  <div className="flex items-center space-x-1 absolute right-40 bottom-24 z-50">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index}/>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>}
      {type === 'register' && <div className="flex items-center space-x-8 absolute right-36 bottom-[135px] z-50">
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
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>}
      <div className="absolute w-full z-50 bg-naturalBlack bottom-0 md:block hidden">
        <JoinWaitlistFooter/>
      </div>
    </div>
  )
}
