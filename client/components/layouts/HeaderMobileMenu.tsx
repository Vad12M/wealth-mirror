import { useRouter } from "next/router";
import Typography from "@/ui/typography/Typography";
import useGetUser from "@/hooks/useGetUser";
import MainLogoMobile from "@/ui/icons/logos/MainLogoMobile";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import { Button } from "@/ui/button/Button";
import { removeUserToken } from "@/service/useAuthHandler";
import WealthserveIcon from "@/ui/icons/WealthserveIcon";

export default function HeaderMobileMenu({
  setMobileMenu,
  mobileMenu
}: {
  setMobileMenu: (value: boolean) => void;
  mobileMenu: boolean;
}) {
  const { asPath } = useRouter();
  const router = useRouter();
  const { user, isLoggedIn, isAdmin } = useGetUser();

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
        <div className="flex items-center justify-center pt-[10%] mb-3">
          <div className="relative rounded-full flex items-center justify-center">
            {!isAdmin
              ?
              <div
                className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#00B386] to-[#004D3A]"/>
              :
              <div
                className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#FED200] to-[#79660A]"/>}

            <div className="relative rounded-full p-1 flex items-center justify-center min-w-[100px] min-h-[100px]">
              <img src={'/TextUser.svg'} alt={'user'} className="w-[100px]"/>
            </div>
          </div>
        </div>
        <Typography
          text={`${user?.firstName || ''} ${user?.lastName || ''}`}
          type={'heading3'}
          className="text-center mb-[50px]"
          color={'text-naturalBlack'}/>
        <div className='px-4'>
          {list.map((item, index) => (
            <Anchor href={item.link} key={index} className="block py-4" onClick={() => setMobileMenu(!mobileMenu)}>
              <Typography text={item.name} type={'heading4NotBold'} color={'text-naturalBlack'}/>
            </Anchor>
          ))}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="328" height="2" viewBox="0 0 328 2" fill="none" className="my-[30px]">
          <path d="M1 1H327" stroke="#A0C29F" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {!isLoggedIn ? (
          <Button typeButton={'standard'} onClick={() => router.push('/auth/login')}>
            {'Login'}
          </Button>
        ) : (
         <div>
           <Button typeButton={'none'} className="mb-[30px]" onClick={() => {
             router.push('/profile')
            setMobileMenu(!mobileMenu)
           }}>
             <Typography text={'Profile Settings'} type={'body1'} color={'text-naturalBlack'}/>
           </Button>
           <Button typeButton={'none'} onClick={() => {
             removeUserToken()
             router.push('/auth/login')
             window.location.reload()
             setMobileMenu(!mobileMenu)
           }}>
             <Typography text={'Logout'} type={'body1'} color="text-danger"/>
           </Button>
         </div>
        )}

        {!isLoggedIn && <div>
          <Button typeButton={'standard'} onClick={() => router.push('/auth/register')} className='block mt-3'>
            {'New here? Sign up!'}
          </Button>
        </div>}

       <div className="flex items-center justify-center mt-10">
         <Button
           typeButton={'none'}
           onClick={() => router.push(isLoggedIn ? '/wealthverse' : '/auth/login')}
           className={`rounded-[60px] bg-[#1E1E1E] py-2 px-6`}
         >
           <div className="flex items-center space-x-2">
             <WealthserveIcon/>
             <Typography
               type={'heading6SM'}
               text={'Wealthverse'}
               color={'text-primaryLight2'}
             />
           </div>
         </Button>
       </div>
      </div>
    </div>
  )
}
