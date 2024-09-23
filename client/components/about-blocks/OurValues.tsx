import Typography from "@/ui/typography/Typography";
import Selflessness from "@/ui/icons/about/Selflessness";
import Judgment from "@/ui/icons/about/Judgment";
import Candor from "@/ui/icons/about/Candor";
import Creativity from "@/ui/icons/about/Creativity";
import Courage from "@/ui/icons/about/Courage";
import Inclusion from "@/ui/icons/about/Inclusion";
import Curiosity from "@/ui/icons/about/Curiosity";
import Resilience from "@/ui/icons/about/Resilience";
import React from "react";


export default function OurValues() {
  return (
    <div className='flex flex-col'>
      <Typography text={'Our Values'} type={'heading2'} primaryElements={['Values']} className="mb-5"/>
      <div
        className="flex items-center flex-col p-8 border border-border1 space-y-8 rounded-[20px]"
        style={{
          boxShadow: '6px 7px 129.6px 0px rgba(69, 130, 68, 0.53) inset'
        }}
      >
        <div className="flex md:flex-row flex-col items-center md:space-x-8 space-x-0 md:space-y-0 space-y-8">
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-1.svg")' }}
            className='w-[322px] md:w-[400px] h-[317px] rounded-[40px]'>
            <div className="flex flex-col items-start p-[45px]">
              <Selflessness/>
              <Typography text={'Selflessness'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you are humble when searching for the best ideas; you seek what’s best for Netflix, not yourself or your team; you take time to help others succeed.'}
                type={'body2'}
                className="w-[270px] md:w-[310px] text-start opacity-60"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-2.svg")' }}
            className='w-[322px] md:w-[290px] h-[317px] rounded-[40px] bg-no-repeat bg-cover'>
            <div className="flex flex-col items-end pt-[45px] pr-3">
              <Judgment/>
              <Typography text={'Judgment'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you look beyond short term fixes in favor of long term solutions; you make wise decisions despite ambiguity; you use data to inform your intuition.'}
                type={'body2'}
                className="w-[266px] text-end opacity-60"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-3.svg")' }}
            className='w-[322px] md:w-[290px] h-[317px] rounded-[40px] bg-no-repeat bg-cover'>
            <div className="flex flex-col items-start pt-[45px] pl-4">
              <Candor/>
              <Typography text={'Candor'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you willingly receive and give feedback; you are open about what’s working and what needs to improve; you admit mistakes openly and share learnings widely.'}
                type={'body2'}
                className="w-[260px] md:w-[270px] text-start opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center md:space-x-8 space-x-0 md:space-y-0 space-y-8">
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-8.svg")' }}
            className='w-[322px] md:w-[327px] h-[317px] rounded-[40px]'>
            <div className="flex flex-col items-start pt-[45px] pl-4">
              <Creativity/>
              <Typography text={'Creativity'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you look beyond short term fixes in favor of long term solutions; you make wise decisions despite ambiguity; you use data to inform your intuition.'}
                type={'body2'}
                className="w-[275px] md:w-[310px] text-start opacity-60"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-4.svg")' }}
            className='w-[322px] md:w-[327px] h-[317px] rounded-[40px]'>
            <div className="flex flex-col items-end pt-[15px] pr-6">
              <Courage/>
              <Typography text={'Courage'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you are vulnerable in search for the truth; you are willing to risk failure, or challenge the status quo, in the pursuit of excellence.'}
                type={'body2'}
                className="w-[260px] text-end opacity-60"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-5.svg")' }}
            className='w-[322px] md:w-[327px] h-[317px] rounded-[40px]'>
            <div className="flex flex-col items-start pt-[15px] pl-6">
              <Inclusion/>
              <Typography text={'Inclusion'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you recognize your biases and work to counteract them; you work to ensure everyone at Netflix can do their best work, whatever their culture.'}
                type={'body2'}
                className="w-[295px] md:w-[260px] text-start opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center md:space-x-8 space-x-0 md:space-y-0 space-y-8">
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-6.svg")' }}
            className='w-[322px] md:w-[506px] h-[317px] rounded-[40px]'>
            <div className="flex flex-col items-start pt-[45px] pl-6">
              <Curiosity/>
              <Typography text={'Curiosity'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you learn rapidly and eagerly; you are as interested in other people’s ideas as your own; you’re humble about what you don’t yet know.'}
                type={'body2'}
                className="w-[275px] md:w-[484px] text-start opacity-60"
              />
            </div>
          </div>
          <div
            style={{ backgroundImage: 'url("/aboutUs/about-7.svg")' }}
            className='w-[322px] md:w-[506px] h-[317px] rounded-[40px]'>
            <div className="flex flex-col items-end pt-[45px] pr-6">
              <Resilience/>
              <Typography text={'Resilience'} type={'heading3'} className="mb-5 mt-3"/>
              <Typography
                text={'you quickly adapt to changing circumstances; you make tough decisions without agonizing or long delay; you embrace a hard challenge'}
                type={'body2'}
                className="w-[280px] md:w-[428px] text-end opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
