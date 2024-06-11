import Link from "next/link";
import { Button } from "@/ui/button/Button";
import { useRouter } from "next/router";
import MainLogo from "@/ui/icons/logos/MainLogo";
import styles from './header.module.scss'
import Typography from "@/ui/typography/Typography";

export default function Header() {
  const router = useRouter();

  const list = [
    {
      name: 'About Us',
      link: '/about'
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'News',
      link: '/news'
    },
    {
      name: 'Pricing',
      link: '/pricing'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ];

  if (router.pathname.includes('auth')) {
    return null;
  }

  return (
    <header className="m-container absolute z-50 top-0 left-[50%] transform translate-x-[-50%] p-10">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center space-x-3">
          <MainLogo/>
          <Typography text={'Wealth Mirror'} type={'sub1'} color='text-black'/>
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

        <div className="flex items-center space-x-4">
          <Link href={'/auth/login'} className="cursor-pointer">
            <Typography text={'Login'} type={'button'}/>
          </Link>
          <Button typeButton={'primary-dark'}>
            {'Start Free Trial'}
          </Button>
        </div>
      </div>
    </header>
  )
}
