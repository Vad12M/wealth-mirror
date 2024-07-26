import { Anchor } from "@/components/custom-cursor/CustomCursorHighlight";
import PrimaryLogo from "@/ui/icons/logos/PrimaryLogo";
import Typography from "@/ui/typography/Typography";
import Coin from "@/ui/icons/canvas/header/Coin";
import Money from "@/ui/icons/canvas/header/Money";
import House from "@/ui/icons/canvas/header/House";
import Stock from "@/ui/icons/canvas/header/Stock";
import { Button } from "@/ui/button/Button";
import LogoutIcon from "@/ui/icons/LogoutIcon";
import { removeUserToken } from "@/service/useAuthHandler";
import { useState } from "react";

export default function PaintHeader({
  exportClick
}: {
  exportClick: () => void
}) {
  const [userMenu, setUserMenu] = useState(false)
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
              <Coin/>
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
          <Button typeButton="none" onClick={() => setUserMenu(!userMenu)}>
            <img src="/canvas/avatar.svg" alt="avatar" className="w-10 h-10"/>
          </Button>
          {userMenu && <div
            className="flex flex-col p-4 rounded-[14px] space-y-4 absolute top-16 right-40 z-10 w-[150px]"
            style={{ background: '#23292E' }}
          >
            <Anchor href={'/profile'}>
              <Typography text={'Profile Settings'} type={'labelsMedium'}/>
            </Anchor>
            <button className="flex items-center space-x-2" onClick={() => {
              removeUserToken()
              window.location.reload()
            }}>
              <Typography text={'Logout'} type={'labelsMedium'} color="text-danger"/>
              <LogoutIcon/>
            </button>
          </div>}
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
