import Typography from "@/ui/typography/Typography";
import Link from "next/link";
import FacebookIcon from "@/ui/icons/socials/FacebookIcon";
import { Twitter } from "react-bootstrap-icons";
import InstagramIcon from "@/ui/icons/socials/InstagramIcon";
import LinkedinIcon from "@/ui/icons/socials/LinkedinIcon";
import YoutubeIcon from "@/ui/icons/socials/YoutubeIcon";
import { useRouter } from "next/router";
import GradientLogo from "@/ui/icons/logos/GradientLogo";

export default function Footer() {
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

  const columns = [
    {
      column: [
        { title: 'Home', link: '/' },
        { title: 'About Us', link: '/about' },
        { title: 'Pricing', link: '/pricing' },
        { title: 'Payment', link: '/payment' }
      ]
    },
    {
      column: [
        { title: 'Privacy policy', link: '/privacy' },
        { title: 'Terms and Conditions ', link: '/termsandconditions' },
        { title: 'Cancellation and Refund', link: '/cancellationandrefund' },
      ]
    },
    {
      column: [
        { title: 'Contact Us', link: '/contact' },
        { title: 'Shipping and Selivery', link: '/shippinganddelivery' }
      ]
    }
  ]


  if (router.pathname.includes('auth')) {
    return null;
  }

  return (
    <footer className='flex flex-col items-center'>
      <div
        style={{
          border: '2px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(255, 255, 255, 0.12)'
        }}
        className="py-[56px] w-full"
      >
        <div className="m-container flex items-start justify-between">
          <div className="flex flex-col">
            <Link href={"/"} className="flex items-center space-x-3 mb-[30px]">
              <GradientLogo/>
              <Typography text={'Wealth Mirror'} type={'sub1'}/>
            </Link>
            <Typography
              text={'We want Your Wealth to Grow with You ❤️'}
              type={'body'}
              color={'text-bodyGray'}
              className={'w-[300px]'}
            />
          </div>
          <div className="flex flex-col">
            <Typography text={'Sections'} type={'sub1'} className={'mb-4'}/>
            <div className="flex space-x-[100px]">
              {columns.map((item, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  {item.column.map((column, index) => (
                    <Link key={index} href={column.link} target={'_blank'}>
                      <Typography text={column.title} type={'body'} color={'text-bodyGray'}/>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="m-container flex justify-between items-center py-[26px]">
        <Typography
          color={'text-bodyGray'}
          text={`© WealthMirror ${currentYear} | Made with ❤️ for the 🌎`}
          type={'body'}
        />
        <div className="flex items-center space-x-4 transform">
          {footerData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target={'_blank'}
              className="w-10 h-10 rounded-[16px] bg-[#18181C] flex items-center justify-center"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
