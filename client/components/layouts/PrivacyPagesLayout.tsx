import Typography from "@/ui/typography/Typography";
import Link from "next/link";

export default function PrivacyPagesLayout({
  children,
  title,
  lastUpdated
}: {
  children: React.ReactNode,
  title: string,
  lastUpdated: string
}) {

  return (
    <section className="py-[140px] flex w-full items-center flex-col justify-center">
      <div className='w-full mb-[50px]' style={{ background: 'rgba(255, 255, 255, 0.06)' }}>
        <div className='flex flex-col items-start m-container py-5'>
          <Link href={'/'} className="flex items-center space-x-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
              <path
                d="M0.646447 4.14645C0.451184 4.34171 0.451184 4.65829 0.646447 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646447 4.14645ZM11 4H1V5H11V4Z"
                fill="#00B386"/>
            </svg>
            <Typography text="Back to Homepage" type="link1" color={'text-primary'}/>
          </Link>
          <Typography text={title} type="heading1" className="mb-2"/>
          <Typography text={lastUpdated} type="heading6"/>
        </div>
      </div>
      <div className='flex items-start m-container'>
        <div className="w-1/2">
          {children}
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}
