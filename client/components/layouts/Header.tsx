import Link from "next/link";
import { Button } from "@/ui/button/Button";
import { useRouter } from "next/router";
import styles from './header.module.scss'
import Typography from "@/ui/typography/Typography";
import GradientLogo from "@/ui/icons/logos/GradientLogo";
import MainLogo from "@/ui/icons/logos/MainLogo";
import useAuthHandler from "@/service/useAuthHandler";
import { useGetMeQuery } from "@/store/api/apiSlice";

export default function Header() {
  const { asPath } = useRouter();
  const isJoinWaitlist = asPath.includes('joinwaitlist');
  const authHandler = useAuthHandler();
  const isLogged = authHandler.hasAuthToken();
  const router = useRouter();
  const { data: user } = useGetMeQuery({}, { skip: !isLogged });

  const list = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'How it Works', link: '/how-it-works' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Contact', link: '/contact' }
  ];

  if (asPath.includes('auth')) {
    return null;
  }

  return (
    <header className="m-container absolute z-50 top-0 left-[50%] transform translate-x-[-50%] py-10">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center space-x-3">
          {isJoinWaitlist
            ? <GradientLogo/>
            : <MainLogo/>}
          <Typography text={'Wealth Mirror'} type={'sub1'} color={asPath === '/' ? 'text-black' : 'text-white'}/>
        </Link>

        <ul className={`flex items-center space-x-8 py-3 px-4 ${styles.list}`}>
          {list.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="px-4">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 pr-3">
          {!isLogged ? (
            <Link href={'/auth/login'}>
              <Typography text={'Login'} type={'button'}/>
            </Link>
          ) : (
            <Link href={'/profile'}>
              <Typography text={`${user?.firstName || ''} ${user?.lastName || ''}`} type={'button'}/>
            </Link>
          )}
          <Button
            typeButton={'primary-dark'}
            isGradient={isJoinWaitlist}
            onClick={() => router.push('/canvas')}
          >
            {'Start Free Trial'}
          </Button>
        </div>
      </div>
    </header>
  )
}
