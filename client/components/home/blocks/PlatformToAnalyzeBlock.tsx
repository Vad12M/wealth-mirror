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
    <section className="py-[100px] flex justify-between items-center m-container">
      <div className="w-1/2">
        <Typography
          text={'Experienced Tracking Platform To Analyze'}
          type={'h1'}
          className={'mb-2'}
          primaryElements={['Platform']}
        />
        <ul>
          {data.map((item, index) => (
            <li key={index} className="flex items-start space-x-4 mb-6">
              {item.icon}
              <div>
                <Typography
                  text={item.title}
                  type={'sub1'}
                  className={'mb-1'}
                />
                <Typography
                  text={item.description}
                  type={'body'}
                  color={'text-grayLight'}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/*icon*/}
      </div>
    </section>
  )
}
