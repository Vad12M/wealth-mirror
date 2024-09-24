import Typography from "@/ui/typography/Typography";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function ServiceItemBlock({
  direction = 'right',
  title,
  primaryElements,
  description,
  smallVideo,
  bigVideo,
  stylesSmallVideo,
  additionalVideo
}: {
  direction?: 'right' | 'left';
  title: string;
  primaryElements?: string[];
  description: string;
  smallVideo?: string;
  bigVideo?: string;
  stylesSmallVideo?: string;
  additionalVideo?: string;
}) {
  const isMobile = useGetIsMobile();
  const isLeft = direction === 'left';
  return (
    <div className="py-10 px-8 rounded-[34px] flex flex-col items-center fixed-container space-y-8"
         style={{
           border: '0.5px solid #2ADC03',
           background: 'rgba(255, 255, 255, 0.03)',
           boxShadow: '0px 0px 148.4px 79px rgba(255, 255, 255, 0.05) inset',
           backdropFilter: 'blur(41.04999923706055px)'
         }}
    >
      <div className={`flex md:flex-row flex-col-reverse items-start ${isLeft ? 'flex-row-reverse' : 'flex-row '}`}>
        <Typography
          text={description}
          type={isMobile ? 'body1' : 'heading6'}
          className={`mt-2 ${!isLeft && !isMobile ? 'mr-8' : ''}`}
        />
        <Typography
          text={title}
          type={isMobile ? 'heading2' : 'heading1'}
          primaryElements={primaryElements}
          className={`md:min-w-[340px] min-w-[300px] ${isLeft && !isMobile ? 'mr-8' : ''} md:mb-0 mb-4`}
        />
      </div>
      <div className={`flex items-center ${isLeft ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'} md:h-[296px] h-auto`}>
        <div className={`rounded-[14px] flex items-center justify-center ${!isLeft && !isMobile ? 'mr-8' : ''} overflow-hidden md:h-[276px] md:w-auto h-[200px] w-[300px]`}>
          <video
            className={`rounded-[14px]`}
            src={bigVideo}
            autoPlay={true}
            controls={false}
            loop={true}
            muted
          />
        </div>
        <div className={`bg-white rounded-[14px] p-3 flex flex-col space-y-3 md:w-[430px] w-[300px] ${isLeft && !isMobile ? 'mr-8' : ''}`}>
          <div className="md:w-[292px] w-[276px] h-[202px] rounded-[14px] overflow-hidden flex items-center justify-center">
            <video
              className={`rounded-[14px] min-w-[1292px] min-h-[902px] ${stylesSmallVideo}`}
              src={smallVideo}
              autoPlay={true}
              controls={false}
              muted
              loop={true}
            />
          </div>
          <div className="flex items-center justify-between">
            <Typography text={'START TRACKING'} type={'heading6'} color="text-naturalBlack" className="max-w-[50px]"/>
            <div className="p-3 rounded-full bg-[#2ADC03]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M0.730417 13.8174C0.33988 14.2079 0.339858 14.841 0.730369 15.2316C1.12088 15.6221 1.75404 15.6221 2.14458 15.2316L0.730417 13.8174ZM15.6094 1.35355C15.6094 0.801265 15.1617 0.353535 14.6094 0.353516L5.60941 0.353208C5.05712 0.353189 4.60939 0.800889 4.60938 1.35317C4.60936 1.90546 5.05706 2.35319 5.60934 2.35321L13.6093 2.35348L13.6091 10.3535C13.609 10.9058 14.0567 11.3535 14.609 11.3535C15.1613 11.3535 15.609 10.9058 15.6091 10.3535L15.6094 1.35355ZM2.14458 15.2316L15.3165 2.06065L13.9023 0.646385L0.730417 13.8174L2.14458 15.2316Z"
                  fill="#03080C"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {additionalVideo &&
        <div className="rounded-[14px] flex items-center justify-center md:h-[262px] h-[170px] overflow-hidden">
        <video
          className={`rounded-[14px] md:min-w-[1492px] md:min-h-[902px]`}
          src={additionalVideo}
          autoPlay={true}
          controls={false}
          loop={true}
          muted
        />
      </div>}
    </div>
  )
}
