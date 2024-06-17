import BlockLayout from "@/components/layouts/BlockLayout";
import Typography from "@/ui/typography/Typography";
import SpotlightBlock from "@/components/SpotlightBlock";


export default function About() {
  return (
    <section className="py-[120px] flex flex-col items-center m-container">
      <BlockLayout
        title={'About Our Company'}
        primaryElements={['Company']}
        description={'Lorem ipsum dolor sit amet consectetur. Ante ornare sed iaculis turpis aenean. Neque viverra adipiscing'}
      >
        <div className="flex items-center space-x-8">
          <img src="/aboutUs/about-us-1.png" alt="about" className="h-[480px] object-cover rounded-[42px]"/>
          <img src="/aboutUs/about-us-2.png" alt="about" className="h-[480px] object-cover rounded-[42px]"/>
        </div>
      </BlockLayout>
      <div className="flex items-start space-x-[160px]">
        <Typography text={'What we do'} type={'sub1'} className="w-full"/>
        <div>
          <Typography
            text={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.'}
            type={'body'}
            className={'mb-6'}
            color={'text-grayLight'}
          />
          <Typography
            text={'Content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. '}
            type={'body'}
            className={'mb-2'}
            color={'text-grayLight'}
          />
        </div>
      </div>
      <SpotlightBlock/>
    </section>
  )
}
