import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import VerticalLinesIcon from "@/ui/icons/home/VerticalLinesIcon";
import CircleGraphicIcon from "@/ui/icons/home/CircleGraphicIcon";
import BlueGraphicIcon from "@/ui/icons/home/BlueGraphicIcon";
import Image from "next/image";

export default function JoinWaitlistGraphicsBlock() {
  return (
    <section
      className="w-[866px] h-[553px] bg-[#131415] rounded-[28px] flex items-center space-x-[28px] py-[43px] px-[53px] z-50">
      <div className="h-[460px] w-[246px] rounded-[20px] bg-[#222228] pb-[28px] pt-[78px] px-[29px]">
        <div className="bg-[#313139] w-full h-[1px] mb-[33px]"/>
        <div className="flex flex-col space-y-6 mb-[44px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="146" height="20" viewBox="0 0 146 20" fill="none">
              <rect x="40" width="74" height="6" rx="3" fill="#313139"/>
              <rect x="122" width="24" height="6" rx="3" fill="#313139"/>
              <rect x="86" y="14" width="24" height="6" rx="3" fill="#313139"/>
              <rect x="40" y="14" width="36" height="6" rx="3" fill="#313139"/>
              <rect width="20" height="20" rx="5" fill="#313139"/>
            </svg>
          ))}
        </div>
        <div className="flex w-full justify-center mb-[20px]">
          <Image src={'/yCombinator/TestEllipse1.svg'} alt="yCombinatorLogo"/>
        </div>
        <div className="flex w-full justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="106" height="20" viewBox="0 0 106 20" fill="none">
            <rect width="56" height="6" rx="3" fill="#313139"/>
            <rect x="64" width="42" height="6" rx="3" fill="#313139"/>
            <rect x="22" y="14" width="62" height="6" rx="3" fill="#313139"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="h-[217px] w-[231px] rounded-[20px] bg-[#222228] flex items-center justify-center">
          <CircleGraphicIcon/>
        </div>
        <div className="h-[217px] w-[231px] rounded-[20px] bg-[#222228] flex items-center flex-col pt-6 px-[16px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="192" height="20" viewBox="0 0 192 20" fill="none">
            <rect width="74" height="6" rx="3" fill="#313139"/>
            <rect x="82" width="24" height="6" rx="3" fill="#313139"/>
            <rect x="46" y="14" width="24" height="6" rx="3" fill="#313139"/>
            <rect y="14" width="36" height="6" rx="3" fill="#313139"/>
            <rect x="172" width="20" height="20" rx="5" fill="#313139"/>
          </svg>
          <div className="bg-[#313139] w-full h-[1px] mb-[30px] mt-[18px]"/>
          <BlueGraphicIcon/>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="h-[328px] w-[230px] rounded-[20px] bg-[#222228] px-5 py-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="192" height="20" viewBox="0 0 192 20" fill="none">
            <rect width="74" height="6" rx="3" fill="#313139"/>
            <rect x="82" width="24" height="6" rx="3" fill="#313139"/>
            <rect x="46" y="14" width="24" height="6" rx="3" fill="#313139"/>
            <rect y="14" width="36" height="6" rx="3" fill="#313139"/>
            <rect x="172" width="20" height="20" rx="5" fill="#313139"/>
          </svg>
          <div className="flex flex-col pt-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4 pb-3 border-[#313139] border-b-[1px] mb-[5px]">
                <Image src={`/yCombinator/TestEllipse${index + 1}.svg`} alt="yCombinatorLogo"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="20" viewBox="0 0 106 20" fill="none">
                  <rect width="74" height="6" rx="3" fill="#313139"/>
                  <rect x="82" width="24" height="6" rx="3" fill="#313139"/>
                  <rect x="46" y="14" width="24" height="6" rx="3" fill="#313139"/>
                  <rect y="14" width="36" height="6" rx="3" fill="#313139"/>
                </svg>
              </div>
            ))}
          </div>

        </div>
        <div className="h-[103px] w-[230px] rounded-[20px] bg-[#222228]"/>
      </div>
    </section>
  )

}
