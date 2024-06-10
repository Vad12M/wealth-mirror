import Typography from "@/ui/typography/Typography";
import Link from "next/link";
import FacebookIcon from "@/ui/icons/socials/FacebookIcon";
import { Twitter } from "react-bootstrap-icons";
import InstagramIcon from "@/ui/icons/socials/InstagramIcon";
import LinkedinIcon from "@/ui/icons/socials/LinkedinIcon";
import YoutubeIcon from "@/ui/icons/socials/YoutubeIcon";
import PrimaryLogo from "@/ui/icons/logos/PrimaryLogo";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  if (router.pathname.includes('auth')) {
    return null;
  }

  return (
    <footer
      className="py-[56px]"
      style={{
        border: '2px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(255, 255, 255, 0.12)'
      }}
    >
      <div className="m-container flex justify-between items-center">
        <Link href={"/"} className="flex items-center space-x-3">
          <PrimaryLogo/>
          <Typography text={'Wealth Mirror'} type={'sub1'}/>
        </Link>
        <ul className="flex items-center space-x-8 absolute left-[45%] transform">
          <li><FacebookIcon/></li>
          <li><Twitter/></li>
          <li><InstagramIcon/></li>
          <li><LinkedinIcon/></li>
          <li><YoutubeIcon/></li>
        </ul>
        <Typography
          className="text-black"
          text={`Copyright © ${currentYear} BRIX Templates | All Rights Reserved `}
          type={'body'}
        />
      </div>
    </footer>
  )
}
