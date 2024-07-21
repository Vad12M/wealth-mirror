import { useRouter } from "next/router";
import Typography from "@/ui/typography/Typography";
import useGetUser from "@/hooks/useGetUser";
import MainLogoMobile from "@/ui/icons/logos/MainLogoMobile";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import { Button } from "@/ui/button/Button";

export default function HeaderMobileMenu({
  setMobileMenu,
  mobileMenu
}:{
  setMobileMenu: (value: boolean) => void;
  mobileMenu: boolean;
}) {
  const { asPath } = useRouter();
  const router = useRouter();
  const { user, isLoggedIn } = useGetUser();

  const list = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'How it Works', link: '/how-it-works' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <div className="bg-naturalBlack z-50">
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 px-10 py-20  bg-[#77A276FF] bg-cover`}
        style={{
          backgroundImage: 'url("/mobile-header-menu.svg")',
        }}
      >
        <button onClick={() => setMobileMenu(!mobileMenu)} className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path
              d="M11.5 5C11.7761 5 12 4.77614 12 4.5C12 4.22386 11.7761 4 11.5 4V5ZM0.646447 4.14645C0.451184 4.34171 0.451184 4.65829 0.646447 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646447 4.14645ZM11.5 4H1V5H11.5V4Z"
              fill="black"/>
          </svg>
          <Typography text={'Back'} type={'body2'} color={'text-black'}/>
        </button>
        <div className='pt-[40%] px-4 mb-12'>
          {list.map((item, index) => (
            <Anchor href={item.link} key={index} className="block py-4" onClick={() => setMobileMenu(!mobileMenu)}>
              <Typography text={item.name} type={'heading4NotBold'} color={'text-naturalBlack'}/>
            </Anchor>
          ))}
        </div>

        {!isLoggedIn ? (
          <Button typeButton={'standard'} onClick={() => router.push('/auth/login')}>
            {'Login'}
          </Button>
        ) : (
          <Button typeButton={'standard'} onClick={() => router.push('/profile')}>
            {`${user?.firstName || ''} ${user?.lastName || ''}`}
          </Button>
        )}

        {!isLoggedIn && <div>
          <Button typeButton={'standard'} onClick={() => router.push('/auth/register')} className='block mt-3'>
            {'New here? Sign up!'}
          </Button>
        </div>}

        <div
          className="flex items-center justify-center space-x-3 absolute bottom-20 left-[50%] transform translate-x-[-50%]">
          <MainLogoMobile/>
          <Typography text={'Wealth Mirror'} type={'navBar'} color={asPath === '/' ? 'text-black' : 'text-white'}/>
        </div>
      </div>
    </div>
  )
}
