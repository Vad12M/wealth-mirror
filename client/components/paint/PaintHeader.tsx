import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import PrimaryLogo from "@/ui/icons/logos/PrimaryLogo";
import Typography from "@/ui/typography/Typography";
import Money from "@/ui/icons/canvas/header/Money";
import House from "@/ui/icons/canvas/header/House";
import Stock from "@/ui/icons/canvas/header/Stock";
import { Button } from "@/ui/button/Button";
import { useRef, useState } from "react";
import Stats from "@/ui/icons/canvas/header/Stats";
import ProfileHeaderPopup from "@/components/profile/ProfileHeaderPopup";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import useGetUser from "@/hooks/useGetUser";

export default function PaintHeader({
  exportClick
}: {
  exportClick: () => void
}) {
  const [isOpenedProfilePopup, setIsOpenedProfilePopup] = useState(false);
  const { isAdmin } = useGetUser();

  const refButton = useRef(null);
  const refProfilePopup = useRef(null);

  useOnClickOutside([refButton, refProfilePopup], () => {
    setIsOpenedProfilePopup(false);
  })
  return (
    <div
      className="px-4 py-4 rounded-[52px] mx-10 w-full mt-5"
      style={{
        background: 'rgba(0, 0, 0, 0.80)',
        backdropFilter: 'blur(25px)'
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex space-x-10">
          <Anchor href={"/"} className="flex items-center space-x-3 pl-4">
            <PrimaryLogo height={20} width={14}/>
            <Typography text={'Wealth Mirror'} type={'canvasTitle'} color={'text-white'}/>
          </Anchor>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Stats/>
              <Typography text={'₹ 2.8 Cr'} type={'labelsMedium'}/>
            </div>
            <div className="flex items-center space-x-2">
              <Money/>
              <Typography text={'₹ 1.5 Cr'} type={'labelsMedium'}/>
            </div>
            <div className="flex items-center space-x-2">
              <House/>
              <Typography text={'₹ 1.3 Cr'} type={'labelsMedium'}/>
            </div>
            <div className="flex items-center space-x-2">
              <Stock/>
              <Typography text={'₹ 1.8 Cr'} type={'labelsMedium'}/>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 relative">
          <div className="relative" ref={refButton}>
            <Button
              typeButton={'none'}
              onClick={() => setIsOpenedProfilePopup(!isOpenedProfilePopup)}
              className="relative rounded-full flex items-center justify-center"
            >
              {!isAdmin
                ?
                <div
                  className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#00B386] to-[#004D3A]"/>
                :
                <div
                  className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#FED200] to-[#79660A]"/>}

              <div className="relative rounded-full p-1 flex items-center justify-center">
                <img src={'/TextUser.svg'} alt={'user'} className="w-[36px]"/>
              </div>
            </Button>
            {isOpenedProfilePopup &&
              <ProfileHeaderPopup refContainer={refProfilePopup} onClose={() => setIsOpenedProfilePopup(false)}/>}
          </div>
          <Button
            typeButton="none"
            className="bg-primary text-white px-5 py-2 rounded-[38px] font-bold"
            onClick={exportClick}
          >
            {'Save canvas'}
          </Button>
        </div>
      </div>
    </div>
  )
}
