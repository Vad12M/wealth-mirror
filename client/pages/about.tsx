import Typography from "@/ui/typography/Typography";

export default function About() {
  return (
    <section className="py-[200px] flex flex-col items-center max-w-[1110px]">
      <Typography text={'About Us'} type={'txt1'} primaryElements={['Us']} className="mb-[130px]"/>
      <div className='flex flex-col mb-[60px] w-full'>
        <Typography text={'Our Vision'} type={'heading2'} primaryElements={['Vision']} className="mb-5"/>
        <Typography
          text={'Empowering Individuals and Businesses to Visualize and Optimize their Wealth.'}
          type={'heading5'}
          primaryElements={['Us']}
          className="mb-[130px]"
        />
      </div>
      <div className='flex flex-col mb-[60px]'>
        <Typography text={'Our Mission'} type={'heading2'} primaryElements={['Mission']} className="mb-5"/>
        <Typography
          text={'To create a World-Class Product that helps its users to manage their Tangible/Intangible Assets and Liabilities to make informed decisions and achieve their financial goals with clarity and confidence.  While every member of our Dream Team has different skills, we look for common strengths that make us better together.'}
          type={'heading5'}
          primaryElements={['Us']}
          className="mb-[130px]"
        />
      </div>
      <div className='flex flex-col'>
        <Typography text={'Our Values'} type={'heading2'} primaryElements={['Values']} className="mb-5"/>
        <div
          className="flex items-center flex-col p-8 border border-border1 space-y-8 rounded-[20px]"
          style={{
            boxShadow: '6px 7px 129.6px 0px rgba(69, 130, 68, 0.53) inset'
          }}
        >
          <div className="flex items-center space-x-8">
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-1.svg")' }}
              className='w-[400px] h-[317px] rounded-[40px]'>

            </div>
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-2.svg")' }}
              className='w-[290px] h-[317px] rounded-[40px]'>

            </div>
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-3.svg")' }}
              className='w-[290px] h-[317px] rounded-[40px]'>

            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-8.svg")' }}
              className='w-[327px] h-[317px] rounded-[40px]'>

            </div>
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-4.svg")' }}
              className='w-[327px] h-[317px] rounded-[40px]'>

            </div>
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-5.svg")' }}
              className='w-[327px] h-[317px] rounded-[40px]'>

            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-6.svg")' }}
              className='w-[506px] h-[317px] rounded-[40px]'>

            </div>
            <div
              style={{ backgroundImage: 'url("/aboutUs/about-7.svg")' }}
              className='w-[506px] h-[317px] rounded-[40px]'>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
