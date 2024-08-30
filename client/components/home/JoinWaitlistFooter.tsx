import Typography from "@/ui/typography/Typography";
import FacebookIcon from "@/ui/icons/socials/FacebookIcon";
import { Twitter } from "react-bootstrap-icons";
import InstagramIcon from "@/ui/icons/socials/InstagramIcon";
import LinkedinIcon from "@/ui/icons/socials/LinkedinIcon";
import YoutubeIcon from "@/ui/icons/socials/YoutubeIcon";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import { useRouter } from "next/router";

export default function JoinWaitlistFooter() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const footerData = [
    {
      icon: <FacebookIcon/>,
      link: 'https://www.facebook.com/top10memesdoctormeme '
    },
    {
      icon: <Twitter/>,
      link: 'https://x.com/WealthMirror'
    },
    {
      icon: <InstagramIcon/>,
      link: 'https://www.instagram.com/wealthmirrorofficial/'
    },
    {
      icon: <LinkedinIcon/>,
      link: 'https://www.linkedin.com/company/wealthmirror'
    },
    {
      icon: <YoutubeIcon/>,
      link: 'https://www.youtube.com/@wealthmirrorofficial2024/ '
    }
  ];


  if (router.asPath.includes('canvas')) {
    return null;
  }

  return (
    <div
      className="m-container bg-naturalBlack flex md:flex-row flex-col-reverse items-center justify-center md:space-x-10 py-14 md:py-10">
      <Typography
        color={'text-bodyGray'}
        text={`© WealthMirror ${currentYear} | Made with ❤️ for the 🌎`}
        type={'footer'}
      />
      <div className="flex items-center space-x-4 transform md:mb-0 mb-[60px]">
        {footerData.map((item, index) => (
          <Anchor
            key={index}
            href={item.link}
            target={'_blank'}
            className="w-10 h-10 rounded-[16px] bg-[#18181C] flex items-center justify-center"
          >
            {item.icon}
          </Anchor>
        ))}
      </div>
    </div>
  )
}
