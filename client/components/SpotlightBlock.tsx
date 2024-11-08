import BlockLayout from "@/components/layouts/BlockLayout";
import Typography from "@/ui/typography/Typography";


export default function SpotlightBlock() {

  const data = [
    {
      title: 'The Rise of AI in Business Analytics: What You Need to Know',
      image: '/spotlight.png',
      type: 'Report',
    },
    {
      title: 'Customizing Your DataWise Dashboard: A Step-by-Step Guide',
      image: '/spotlight.png',
      type: 'News',
    },
    {
      title: 'Customizing Your DataWise Dashboard: A Step-by-Step Guide',
      image: '/spotlight.png',
      type: 'News',
    },
    {
      title: 'Customizing Your DataWise Dashboard: A Step-by-Step Guide',
      image: '/spotlight.png',
      type: 'News',
    }
  ]

  return (
    <BlockLayout
      title={'In the spotlight'}
      primaryElements={['spotlight']}
      description={'Stay updated with the latest trends, tips, and insights in business analytics. Explore our curated articles designed to empower your data-driven journey.'}
    >
      <div className="flex items-start space-x-8 m-container">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4 max-w-[277px]">
            <img src={item.image} alt="spotlight" className="h-[172px] object-cover rounded-[16px] mb-4"/>
            <Typography text={item.type} type={'bodySB'} className={'mb-4'}/>
            <Typography text={item.title} type={'body'} color={"text-bodyGray"} className="pr-14"/>
          </div>
        ))}
      </div>
    </BlockLayout>
  )

}
