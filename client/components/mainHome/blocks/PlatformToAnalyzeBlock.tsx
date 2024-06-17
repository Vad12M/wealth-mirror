import Typography from "@/ui/typography/Typography";
import PlatformBlockItem1Icon from "@/ui/icons/platformBlock/PlatformBlockItem1Icon";
import PlatformBlockItem2Icon from "@/ui/icons/platformBlock/PlatformBlockItem2Icon";
import PlatformBlockItem3Icon from "@/ui/icons/platformBlock/PlatformBlockItem3Icon";

export default function PlatformToAnalyzeBlock() {
  const data = [
    {
      icon: <PlatformBlockItem1Icon/>,
      title: 'Easy to add stages',
      description: 'Lorem ipsum dolor sit amet consectetur. Purus molestie aenean aliquam neque ullamcorper ',
    },
    {
      icon: <PlatformBlockItem2Icon/>,
      title: 'Track Analysis',
      description: 'Lorem ipsum dolor sit amet consectetur. Purus molestie aenean aliquam neque ullamcorper ',
    },
    {
      icon: <PlatformBlockItem3Icon/>,
      title: 'Continuous Updates',
      description: 'Lorem ipsum dolor sit amet consectetur. Purus molestie aenean aliquam neque ullamcorper ',
    },
  ]

  return (
    <section className="bg-no-repeat bg-[right_22rem_top_8rem]" style={{ backgroundImage: 'url(/blurBg.svg)' }}>
      <div className="m-container flex justify-between items-center relative pb-[100px] pt-[200px] ">
        <div className="w-1/2">
          <Typography
            text={'Experienced Tracking Platform To Analyze'}
            type={'h1'}
            className={'mb-6'}
            primaryElements={['Platform']}
          />
          <ul>
            {data.map((item, index) => (
              <li key={index} className="flex items-start space-x-4 mb-6">
                {item.icon}
                <div>
                  <Typography text={item.title} type={'sub1'} className={'mb-1'}/>
                  <Typography text={item.description} type={'bodyB1'} color={'text-grayLight'} className="w-[430px]"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <div className="absolute right-20 top-52">
            <svg xmlns="http://www.w3.org/2000/svg" width="370" height="558" viewBox="0 0 370 558" fill="none">
              <path
                d="M359.486 136.653C382.392 89.446 362.693 32.6084 315.486 9.7021C268.28 -13.2042 211.442 6.49501 188.536 53.7015L10.2483 421.126C-12.658 468.332 7.04123 525.17 54.2477 548.076C101.454 570.982 158.292 551.283 181.198 504.077L359.486 136.653Z"
                fill="white" fillOpacity="0.06"/>
              <path
                d="M315.05 10.6018C361.759 33.267 381.251 89.5064 358.586 136.216L180.299 503.64C157.633 550.35 101.394 569.842 54.6843 547.176C7.97466 524.511 -11.5172 468.272 11.148 421.562L189.435 54.1381C212.1 7.42844 268.34 -12.0634 315.05 10.6018Z"
                stroke="white" strokeOpacity="0.08" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute right-12 top-44">
            <svg xmlns="http://www.w3.org/2000/svg" width="435" height="627" viewBox="0 0 435 627" fill="none">
              <path
                d="M422.16 182.571C452.747 119.536 426.442 43.6402 363.407 13.0533C300.372 -17.5335 224.477 8.7709 193.89 71.8059L13.2398 444.099C-17.347 507.134 8.95742 583.029 71.9924 613.616C135.027 644.203 210.923 617.899 241.51 554.864L422.16 182.571Z"
                fill="white" fillOpacity="0.04"/>
              <path
                d="M362.971 13.953C425.509 44.2988 451.606 119.596 421.26 182.134L240.61 554.427C210.264 616.965 134.967 643.062 72.429 612.717C9.89086 582.371 -16.2062 507.074 14.1395 444.535L194.789 72.2425C225.135 9.70434 300.432 -16.3928 362.971 13.953Z"
                stroke="white" strokeOpacity="0.08" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
