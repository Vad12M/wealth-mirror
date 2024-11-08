import { useRouter } from "next/router";
import styles from './header.module.scss'
import Typography from "@/ui/typography/Typography";
import GradientLogo from "@/ui/icons/logos/GradientLogo";
import MainLogo from "@/ui/icons/logos/MainLogo";
import useGetUser from "@/hooks/useGetUser";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import MainLogoMobile from "@/ui/icons/logos/MainLogoMobile";
import { useRef, useState } from "react";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import { Button } from "@/ui/button/Button";
import PrimaryLogo from "@/ui/icons/logos/PrimaryLogo";
import HeaderMobileMenu from "@/components/layouts/HeaderMobileMenu";
import WealthserveIcon from "@/ui/icons/WealthserveIcon";
import ProfileHeaderPopup from "@/components/profile/ProfileHeaderPopup";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { ChartNoAxesCombined } from "lucide-react";

export default function Header() {
  const isMobile = useGetIsMobile();
  const { asPath, push } = useRouter();
  const router = useRouter();
  const isJoinWaitlist = asPath.includes('joinwaitlist');
  const { isLoggedIn, isAdmin } = useGetUser();
  const [isOpenedProfilePopup, setIsOpenedProfilePopup] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const isWhite = [
    '/about', '/pricing', '/contact', '/services', '/wealthverse',
    '/payment', '/admin', '/profile', 'termsandconditions',
    '/cancellationandrefund', '/termsandconditions'
  ].includes(asPath);

  const refButton = useRef(null);
  const refProfilePopup = useRef(null);

  useOnClickOutside([refButton, refProfilePopup], () => {
    setIsOpenedProfilePopup(false);
  })

  const list = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'How it Works', link: '/?section=how-it-works' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Contact', link: '/contact' }
  ];

  if (asPath.includes('auth') || asPath.includes('joinwaitlist') || asPath.includes('wealthverse')) {
    return null;
  }

  return (
    <>
      <header className="absolute z-50 top-0 left-[50%] transform translate-x-[-50%]">
        <div
          className="flex items-center justify-between md:px-20 px-8 py-10"
          style={{ width: 'calc(100vw - 25px)' }}
        >
          <Anchor href={"/"} className="flex items-center space-x-3">
            {isJoinWaitlist
              ? <GradientLogo/>
              : isMobile ? <MainLogoMobile/> : (isWhite ? <PrimaryLogo/> : <MainLogo/>)}
            <Typography text={'Wealth Mirror'} type={'navBar'} color={isWhite ? 'text-white' : 'text-black'}/>
          </Anchor>
          <ul
            className={`mx-4 hidden md:flex items-center justify-center space-x-8 py-3 px-4 ${isWhite ? styles.listWhite : styles.list}`}
          >
            {list.map((item, index) => {
              const active = asPath === item.link;
              return (
                <li key={index}>
                  <Anchor href={item.link}>
                    <div
                      className={`group relative flex items-center border rounded-[30px] p-1 ${active ? 'border-border1' : `border-transparent ${isWhite ? 'hover:border-white' : 'hover:border-gray'} `}`}
                      style={{
                        background: active ? 'rgba(20, 130, 114, 0.15)' : 'transparent',
                        boxShadow: active ? '0px 4px 8.9px 0px rgba(69, 130, 68, 0.26)' : 'none',
                        fontWeight: active ? 'bold' : 'normal'
                      }}
                    >
                      <Typography
                        text={item.name}
                        type={active ? 'body2A' : 'body2'}
                        color={isWhite ? 'text-white' : "text-primaryDark"}
                        className="px-4 whitespace-nowrap"
                      />
                      {!active && <div
                        className={`border-b ${isWhite ? 'border-white' : 'border-grayBody'} rounded-l-[28px] rounded-r-[40px] h-10 absolute w-full -ml-0.5 hidden group-hover:block`}/>}
                    </div>
                  </Anchor>
                </li>
              )
            })}
          </ul>

          <div className="md:flex items-center space-x-4 pr-3 hidden">
            {!isLoggedIn ? (
              <Button typeButton={isWhite ? 'standard-white' : 'standard'} onClick={() => router.push('/auth/login')}>
                {'Login'}
              </Button>
            ) : (
              <div className="relative" ref={refButton}>
                <Button
                  typeButton={'none'}
                  onClick={() => setIsOpenedProfilePopup(!isOpenedProfilePopup)}
                  className="relative rounded-full flex items-center justify-center"
                >
                  {!isAdmin ?
                    <div
                      className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#00B386] to-[#004D3A]"/>
                    :
                    <div
                      className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#FED200] to-[#79660A]"/>}

                  <div className="relative rounded-full p-1 flex items-center justify-center min-w-[36px] min-h-[36px]">
                    <img src={'/TextUser.svg'} alt={'user'} className="w-[36px]"/>
                  </div>
                </Button>
                {isOpenedProfilePopup &&
                  <ProfileHeaderPopup refContainer={refProfilePopup} onClose={() => setIsOpenedProfilePopup(false)}/>}
              </div>
            )}


            {isLoggedIn
              ? <Button
                typeButton={'none'}
                onClick={() => push('/wealthverse')}
                className={`rounded-[60px] ${isWhite ? 'bg-white' : ' bg-[#1E1E1E]'} py-2 px-6`}
              >
                <div className="flex items-center space-x-2">
                  <WealthserveIcon/>
                  <Typography
                    type={'heading6SM'}
                    text={'Wealthverse'}
                    color={isWhite ? 'text-border1' : 'text-primaryLight2'}
                  />
                </div>
              </Button>
              : (
                <Button
                  typeButton={'primary-dark'}
                  isGradient={isJoinWaitlist}
                  onClick={() => push('/auth/login')}
                >
                  {'Start Free Trial'}
                </Button>
              )}
            {isAdmin &&
              <Button typeButton={'primary-dark'} isGradient={isJoinWaitlist} onClick={() => push('/admin')}>
                <ChartNoAxesCombined/>
              </Button>}
          </div>

          <button className="flex flex-col items-end space-y-1 md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
              <path d="M19 1H1" stroke={isWhite ? "#fff" : "#112520"} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
              <path d="M11 1H1" stroke={isWhite ? "#fff" : "#112520"} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
              <path d="M19 1H1" stroke={isWhite ? "#fff" : "#112520"} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {mobileMenu && <HeaderMobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}
    </>
  )
}
