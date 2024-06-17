import Typography from "@/ui/typography/Typography";
import AmbrellaIcon from "@/ui/icons/waitlist/AmbrellaIcon";
import WalletListIcon from "@/ui/icons/waitlist/WalletListIcon";
import PlusIcon from "@/ui/icons/PlusIcon";
import ArrowBottomIcon from "@/ui/icons/ArrowBottomIcon";


export default function OurServicesBlock() {
  const bottomCardBlock = (title: string, descr: string) => (
    <div>
      <Typography text={title} type={'healine4'} className="mt-8 mb-4"/>
      <Typography
        text={descr}
        type={'base1'}
        color={'text-lightGray4'}
        className={"w-[490px]"}
      />
    </div>
  );

  return (
    <section className="flex items-center flex-col justify-center pt-[120px] pb-8 relative">
      <div className='bg-no-repeat bg-bottom w-full h-1/3 absolute bottom-0 bg-cover'
           style={{ backgroundImage: 'url(/yCombinator/OurServicesBG.svg)' }}/>
      <Typography text={'How It Works?'} className="mb-6"/>
      <Typography
        text={'Get rid of Old School ways of managing your Wealth in 2D Matrix. We will help you visualize your Wealth so that you can “Actually” see it growing and take Necessary Actions :)'}
        type={'healine6'}
        color={'text-lightGray4'}
        className="w-[530px] mb-10"
      />
      <div className="flex  flex-col space-y-10 justify-center z-10">
        <div className="flex space-x-6">
          <div className="rounded-[24px] border border-primary h-[772px] w-[566px] bg-darkGray2 p-10">
            <div
              className="border border-darkGray1 bg-darkGray3 rounded-t-[16px] p-8 flex items-center space-x-3">
              <div className="bg-[#DA7164] border border-darkGray1 rounded-full w-4 h-4"/>
              <div className="bg-[#EBC063] border border-darkGray1 rounded-full w-4 h-4"/>
              <div className="bg-[#3FDD78] border border-darkGray1 rounded-full w-4 h-4"/>
            </div>
            <div className="border border-darkGray1 bg-darkGray2 flex items-center space-x-4 p-8">
              <img src={'/yCombinator/TestEllipse2.svg'} alt="yCombinatorLogo"/>
              <div className="w-[380px] rounded-[6px] h-6" style={{ background: 'rgba(217, 217, 217, 0.20)' }}/>
            </div>
            <div
              className="border border-darkGray1 bg-darkGray3 p-8 flex items-center space-x-4">
              <img src={'/yCombinator/TestSq.svg'} alt="yCombinatorLogo"/>
              <div className="flex flex-col space-y-3">
                <div className="w-[355px] rounded-[6px] h-6" style={{ background: 'rgba(217, 217, 217, 0.20)' }}/>
                <div className="w-[156px] rounded-[6px] h-6" style={{ background: 'rgba(217, 217, 217, 0.20)' }}/>
              </div>
            </div>
            <img src={'/yCombinator/Rectangle.png'} alt="yCombinatorLogo" className="rounded-b-[16px]"/>
            {bottomCardBlock(
              'Visualize',
              'Write a prompt, hit enter, and let AI do the heavy lifting.\n' +
              'Having an AI tool built into, allows you to quickly and easily generate the exact code you need for your project.'
            )}
          </div>
          <div className="rounded-[24px] border border-primary h-[772px] w-[566px] bg-darkGray2 p-10">
            <div className="bg-darkGray3 border-darkGray1 p-8 rounded-[16px] mb-10">
              <div className="flex items-center space-x-4 border-b border-darkGray1 pb-8 mb-8">
                <AmbrellaIcon/>
                <Typography text={'Wealth Mirror'} type={'healine5'}/>
              </div>
              <div className=""/>
              <div className="flex items-center space-x-4">
                <img src={'/yCombinator/RowUsers1.svg'} alt="yCombinatorLogo"/>
                <div className="rounded-[6px] h-6 w-[291px] bg-darkGray1"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path opacity="0.2"
                        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM4.78075 16C4.78075 22.1962 9.80378 27.2192 16 27.2192C22.1962 27.2192 27.2192 22.1962 27.2192 16C27.2192 9.80378 22.1962 4.78075 16 4.78075C9.80378 4.78075 4.78075 9.80378 4.78075 16Z"
                        fill="white"/>
                  <path
                    d="M16 2.39037C16 1.07021 17.0761 -0.018274 18.3815 0.178229C20.0774 0.433505 21.7265 0.96059 23.2638 1.7439C25.5136 2.89021 27.4601 4.55269 28.9443 6.59544C30.4284 8.63818 31.408 11.0032 31.803 13.497C32.198 15.9909 31.9972 18.5429 31.2169 20.9443C30.4366 23.3457 29.0991 25.5283 27.3137 27.3137C25.5283 29.0991 23.3457 30.4366 20.9443 31.2169C18.5429 31.9972 15.9909 32.198 13.4971 31.803C11.7929 31.5331 10.149 30.9902 8.62689 30.1999C7.45525 29.5915 7.22449 28.0785 8.00047 27.0104C8.77644 25.9424 10.2659 25.7332 11.4739 26.2658C12.3556 26.6545 13.2867 26.9294 14.2449 27.0811C15.9936 27.3581 17.7831 27.2173 19.4669 26.6701C21.1508 26.123 22.6813 25.1852 23.9332 23.9332C25.1852 22.6813 26.123 21.1508 26.6701 19.4669C27.2173 17.7831 27.3581 15.9936 27.0811 14.2449C26.8042 12.4962 26.1172 10.8379 25.0766 9.40549C24.0359 7.97311 22.671 6.80737 21.0934 6.00357C20.229 5.56311 19.3141 5.23819 18.3724 5.03444C17.082 4.75528 16 3.71054 16 2.39037Z"
                    fill="#3FDD78"/>
                </svg>
              </div>
            </div>
            <div className="bg-darkGray3 border-darkGray1 p-8 rounded-[16px]">
              <div className="flex items-center space-x-4 border-b border-darkGray1 pb-8 mb-8">
                <WalletListIcon/>
                <div className="rounded-[6px] h-6 w-[291px] bg-darkGray1"/>
              </div>
              <div className=""/>
              <div className="flex items-center space-x-4">
                <img src={'/yCombinator/RowUsers2.svg'} alt="yCombinatorLogo"/>
                <div className="rounded-[6px] h-6 w-[291px] bg-darkGray1"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path opacity="0.2"
                        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM4.78075 16C4.78075 22.1962 9.80378 27.2192 16 27.2192C22.1962 27.2192 27.2192 22.1962 27.2192 16C27.2192 9.80378 22.1962 4.78075 16 4.78075C9.80378 4.78075 4.78075 9.80378 4.78075 16Z"
                        fill="white"/>
                  <path
                    d="M16 2.39037C16 1.07021 17.0761 -0.018274 18.3815 0.178229C20.0774 0.433505 21.7265 0.96059 23.2638 1.7439C25.5136 2.89021 27.4601 4.55269 28.9443 6.59544C30.4284 8.63818 31.408 11.0032 31.803 13.497C32.198 15.9909 31.9972 18.5429 31.2169 20.9443C30.4366 23.3457 29.0991 25.5283 27.3137 27.3137C25.5283 29.0991 23.3457 30.4366 20.9443 31.2169C18.5429 31.9972 15.9909 32.198 13.4971 31.803C11.7929 31.5331 10.149 30.9902 8.62689 30.1999C7.45525 29.5915 7.22449 28.0785 8.00047 27.0104C8.77644 25.9424 10.2659 25.7332 11.4739 26.2658C12.3556 26.6545 13.2867 26.9294 14.2449 27.0811C15.9936 27.3581 17.7831 27.2173 19.4669 26.6701C21.1508 26.123 22.6813 25.1852 23.9332 23.9332C25.1852 22.6813 26.123 21.1508 26.6701 19.4669C27.2173 17.7831 27.3581 15.9936 27.0811 14.2449C26.8042 12.4962 26.1172 10.8379 25.0766 9.40549C24.0359 7.97311 22.671 6.80737 21.0934 6.00357C20.229 5.56311 19.3141 5.23819 18.3724 5.03444C17.082 4.75528 16 3.71054 16 2.39037Z"
                    fill="#3FDD78"/>
                </svg>
              </div>
            </div>
            {bottomCardBlock(
              'Centralize',
              'Develop faster without being restricted. Work with multiple people on the same project at the same time.'
            )}
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="rounded-[24px] border border-primary h-[772px] w-[566px] bg-darkGray2 p-10">
            <div className="bg-darkGray3 border-darkGray1 p-8 rounded-[16px] mb-10 flex items-center justify-between">
              <div className="flex flex-col space-y-1">
                <Typography text={'Wealth Mirror'} type={'healine5'}/>
                <Typography text={'Saved 32 seconds ago'} type={'base1'} color={'text-lightGray4'}/>
              </div>
              <div
                className="px-8 py-2"
                style={{
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.40)',
                  background: 'linear-gradient(180deg, #3E90F0 0%, #1B6ECF 100%)'
                }}
              >
                <Typography text={'Get started'} type={'healine6'}/>
              </div>
            </div>
            <img src={'/yCombinator/Rectangle1.png'} alt="Rectangle" className="rounded-b-[16px]"/>
            {bottomCardBlock(
              'Analyze',
              'Not yet ready to publish the code to your actual website? Then publish it to staging only using the staging script with Glitty. Your production Javascript file will always be available 👍🏻'
            )}
          </div>
          <div className="rounded-[24px] border border-primary h-[772px] w-[566px] bg-darkGray2 p-10">
            <div className="bg-darkGray3 border-darkGray1 pt-8 rounded-[16px] mb-10 relative">
              <div className="flex items-center justify-between border-b border-darkGray1 pb-8 px-8">
                <div className="flex items-center space-x-4 ">
                  <WalletListIcon/>
                  <Typography text={'Library'} type={'healine5'}/>
                </div>
                <PlusIcon/>
              </div>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between border-b border-darkGray1 px-8 py-8">
                  <Typography text={'Create wealth'} type={'healine5'}/>
                  <ArrowBottomIcon/>
                </div>
              ))}
              <div
                className="absolute w-full bottom-0 h-[400px]"
                style={{ background: 'linear-gradient(180deg, rgba(34, 34, 36, 0.00) 0%, #222224 100%)' }}/>
            </div>
            {bottomCardBlock(
              'Take Action',
              'Save your favorite code solutions for easy reuse. Drag and drop code you have saved into any of your projects.'
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
