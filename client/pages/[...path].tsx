import Typography from "@/ui/typography/Typography";
import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function Custom404() {
  const isMobile = useGetIsMobile();

  const showButton = () => (
    <Anchor href='/' className="flex items-center space-x-4 bg-primary md:py-3 py-2 md:px-7 px-6 rounded-[36px] w-[180px] ">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
        <path
          d="M7 14.5312H27C27.2652 14.5312 27.5196 14.6333 27.7071 14.815C27.8946 14.9967 28 15.2431 28 15.5C28 15.7569 27.8946 16.0033 27.7071 16.185C27.5196 16.3667 27.2652 16.4688 27 16.4688H7C6.73478 16.4688 6.48043 16.3667 6.29289 16.185C6.10536 16.0033 6 15.7569 6 15.5C6 15.2431 6.10536 14.9967 6.29289 14.815C6.48043 14.6333 6.73478 14.5312 7 14.5312Z"
          fill="#F8F8F8"/>
        <path
          d="M7.41383 15.5L15.7078 23.5329C15.8956 23.7148 16.0011 23.9615 16.0011 24.2188C16.0011 24.476 15.8956 24.7227 15.7078 24.9046C15.5201 25.0865 15.2654 25.1887 14.9998 25.1887C14.7343 25.1887 14.4796 25.0865 14.2918 24.9046L5.29183 16.1859C5.19871 16.0959 5.12482 15.989 5.07441 15.8713C5.024 15.7536 4.99805 15.6274 4.99805 15.5C4.99805 15.3726 5.024 15.2464 5.07441 15.1287C5.12482 15.011 5.19871 14.9041 5.29183 14.8141L14.2918 6.09538C14.4796 5.91347 14.7343 5.81128 14.9998 5.81128C15.2654 5.81128 15.5201 5.91347 15.7078 6.09538C15.8956 6.27728 16.0011 6.524 16.0011 6.78125C16.0011 7.03851 15.8956 7.28522 15.7078 7.46713L7.41383 15.5Z"
          fill="#F8F8F8"/>
      </svg>
      <Typography text={'Go Home'} type={isMobile ? 'body1' : 'button'} color="text-white"/>
    </Anchor>
  )

  return (
    <section className="bg-opsColor w-full h-screen flex items-center justify-center">
      <div className="m-container flex md:flex-row flex-col items-center justify-center">
        <div className="md:w-1/2 w-full">
          <Typography type={isMobile ? 'txt1' : 'oops'} text="oops!" color="text-primary" className="md:mb-0 mb-2"/>
          <Typography
            type={isMobile ? 'body1' : 'oops_desc'}
            text="The Page you are looking for is not found.."
            color="text-naturalBlack"
            className={"mb-[60px]"}
          />
          {isMobile ? null : showButton()}
        </div>
        <div className="md:w-1/2 w-full">
          <img src="/404.svg" alt={'icon'}/>
        </div>
        <div className="md:hidden block mt-10">
          {showButton()}
        </div>
      </div>
    </section>
  )
}
