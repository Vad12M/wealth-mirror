import { useRouter } from "next/router";
import styles from './header.module.scss'
import Typography from "@/ui/typography/Typography";
import GradientLogo from "@/ui/icons/logos/GradientLogo";
import MainLogo from "@/ui/icons/logos/MainLogo";
import { removeUserToken } from "@/service/useAuthHandler";
import LogoutIcon from "@/ui/icons/LogoutIcon";
import useGetUser from "@/hooks/useGetUser";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import MainLogoMobile from "@/ui/icons/logos/MainLogoMobile";
import { useState } from "react";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import { Button } from "@/ui/button/Button";
import { router } from "next/client";

export default function Header() {
  const isMobile = useGetIsMobile();
  const { asPath, push } = useRouter();
  const router = useRouter();
  const isJoinWaitlist = asPath.includes('joinwaitlist');
  const { user, isLoggedIn, isAdmin } = useGetUser();
  const [mobileMenu, setMobileMenu] = useState(false);

  const list = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'How it Works', link: '/how-it-works' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Contact', link: '/contact' }
  ];

  if (asPath.includes('auth') || asPath.includes('joinwaitlist')) {
    return null;
  }

  return (
    <>
      <header className="absolute z-50 top-0 left-[50%] transform translate-x-[-50%]">
        <div className="flex items-center justify-between w-screen md:px-20 px-8 py-10">
          <Anchor href={"/"} className="flex items-center space-x-3">
            {isJoinWaitlist
              ? <GradientLogo/>
              : isMobile ? <MainLogoMobile/> : <MainLogo/>}
            <Typography text={'Wealth Mirror'} type={'navBar'} color={'text-black'}/>
          </Anchor>

          <ul
            className={`hidden md:flex items-center justify-center space-x-8 py-3 px-4 ${styles.list}`}
            style={{
              boxShadow: '0px 4px 8.9px 0px rgba(69, 130, 68, 0.26)',
              backdropFilter: 'blur(16.899999618530273px)'
            }}
          >
            {list.map((item, index) => {
              const active = asPath === item.link;
              return (
                <li key={index}>
                  <Anchor href={item.link}>
                    <div
                      className={`group relative flex items-center border rounded-[30px] p-1 ${active ? 'border-border1' : 'border-transparent hover:border-gray'}`}
                      style={{
                        background: active ? 'rgba(20, 130, 114, 0.15)' : 'transparent',
                        boxShadow: active ? '0px 4px 8.9px 0px rgba(69, 130, 68, 0.26)' : 'none',
                        fontWeight: active ? 'bold' : 'normal'
                      }}
                    >
                      <Typography text={item.name} type={active ? 'body2A' : 'body2'} color="text-primaryDark"
                                  className="px-4"/>
                      {!active && <div
                        className="border-b border-grayBody rounded-l-[28px] rounded-r-[40px] h-10 absolute w-full -ml-0.5 hidden group-hover:block"/>}
                    </div>
                  </Anchor>
                </li>
              )
            })}
          </ul>

          <div className="md:flex items-center space-x-4 pr-3 hidden">
            {!isLoggedIn ? (
              <Button typeButton={'standard'} onClick={() => router.push('/auth/login')}>
                {'Login'}
              </Button>
            ) : (
              <Button typeButton={'standard'} onClick={() => router.push('/profile')}>
                {`${user?.firstName || ''} ${user?.lastName || ''}`}
              </Button>
            )}

            {isAdmin &&
              <Button typeButton={'primary-dark'} isGradient={isJoinWaitlist} onClick={() => push('/admin')}>
                {'Admin Panel'}
              </Button>}

            {!isLoggedIn ? <Button
              typeButton={'primary-dark'}
              isGradient={isJoinWaitlist}
              onClick={() => push(isLoggedIn ? '/canvas' : '/auth/login')}
            >
              {'Start Free Trial'}
            </Button> : (
              <button onClick={() => {
                removeUserToken()
                window.location.reload()
              }}>
                <LogoutIcon/>
              </button>
            )}
          </div>

          <button className="flex flex-col items-end space-y-1 md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
              <path d="M19 1H1" stroke="#112520" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
              <path d="M11 1H1" stroke="#112520" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" viewBox="0 0 20 2" fill="none">
              <path d="M19 1H1" stroke="#112520" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/*mibile menu */}
      {mobileMenu &&
        <div className="bg-naturalBlack">
          <div
            className={`fixed top-0 left-0 w-full h-screen z-50 px-10 py-20 bg-primary`}
            style={{ background: '#78d8a4' }}
          >
            <button onClick={() => setMobileMenu(!mobileMenu)} className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path
                  d="M11.5 5C11.7761 5 12 4.77614 12 4.5C12 4.22386 11.7761 4 11.5 4V5ZM0.646447 4.14645C0.451184 4.34171 0.451184 4.65829 0.646447 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646447 4.14645ZM11.5 4H1V5H11.5V4Z"
                  fill="black"/>
              </svg>
              <Typography text={'Back'} type={'body2'} color={'text-black'}/>
            </button>
            <div className='pt-[40%] px-4'>
              {list.map((item, index) => (
                <Anchor href={item.link} key={index} className="block py-4" onClick={() => setMobileMenu(!mobileMenu)}>
                  <Typography text={item.name} type={'heading4NotBold'} color={'text-naturalBlack'}/>
                </Anchor>
              ))}
            </div>


            <div
              className="flex items-center justify-center space-x-3 absolute bottom-20 left-[50%] transform translate-x-[-50%]">
              <MainLogoMobile/>
              <Typography text={'Wealth Mirror'} type={'navBar'} color={asPath === '/' ? 'text-black' : 'text-white'}/>
            </div>
          </div>
        </div>}
    </>
  )
}
