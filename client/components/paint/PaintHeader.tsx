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
import { ICard } from "@/interfaces/wealths/ICard";
import { IRealEstate } from "@/interfaces/wealths/IRealEstate";
import { IStock } from "@/interfaces/wealths/IStock";
import { IIncome } from "@/interfaces/wealths/IIncome";
import { IMutualFund } from "@/interfaces/wealths/IMutualFund";
import { IExpenses } from "@/interfaces/wealths/IExpenses";
import { IFixedDeposit } from "@/interfaces/wealths/IFixedDeposit";
import { IGold } from "@/interfaces/wealths/IGold";
import { ICrypto } from "@/interfaces/wealths/ICrypto";
import { ILiquidCash } from "@/interfaces/wealths/ILiquidCash";
import { ISaving } from "@/interfaces/wealths/ISaving";
import Coin from "@/ui/icons/canvas/header/Coin";
import Gold from "@/ui/icons/canvas/header/Gold";
import Card from "@/ui/icons/canvas/header/Card";
import Saving from "@/ui/icons/canvas/header/Saving";
import FixedDeposit from "@/ui/icons/canvas/header/FixedDeposit";
import Income from "@/ui/icons/canvas/header/Income";
import Expenses from "@/ui/icons/canvas/header/Expenses";
import Car from "@/ui/icons/canvas/header/Car";
import { ICar } from "@/interfaces/wealths/ICar";
import MutualFunds from "@/ui/icons/canvas/header/MutualFunds";
import ChevroneDownIcon from "@/ui/icons/ChevroneDownIcon";

export default function PaintHeader({
  exportClick,
  cards,
  realEstates,
  stocks,
  incomes,
  mutualFunds,
  fixedDeposits,
  expenses,
  golds,
  cryptos,
  liquidCashs,
  savings,
  cars
}: {
  exportClick: () => void
  cards: ICard[];
  cars: ICar[];
  realEstates: IRealEstate[];
  stocks: IStock[];
  incomes: IIncome[];
  mutualFunds: IMutualFund[];
  fixedDeposits: IFixedDeposit[];
  expenses: IExpenses[];
  golds: IGold[];
  cryptos: ICrypto[];
  liquidCashs: ILiquidCash []
  savings: ISaving[];
}) {
  const [isOpenedProfilePopup, setIsOpenedProfilePopup] = useState(false);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const { isPaid } = useGetUser();

  const refButton = useRef(null);
  const refProfilePopup = useRef(null);

  useOnClickOutside([refButton, refProfilePopup], () => setIsOpenedProfilePopup(false));

  const getTotalForType = (array: any[]) => {
    return array.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  }

  const getOverTotal = () => {
    return getTotalForType(cards)
      + getTotalForType(liquidCashs)
      + getTotalForType(realEstates)
      + getTotalForType(stocks)
      + getTotalForType(cryptos)
      + getTotalForType(golds)
      + getTotalForType(cards)
      + getTotalForType(savings)
      + getTotalForType(fixedDeposits)
      + getTotalForType(incomes)
      + getTotalForType(expenses)
      + getTotalForType(cars)
      + getTotalForType(mutualFunds);
  }

  const showItemWithMoney = (icon: React.ReactNode, total: number, currencySymbol: string, currency?: string, className?: string) => (
    <div className={`flex items-center space-x-2 ${className}`}>
      {icon}
      <Typography
        text={`${currencySymbol} ${total} ${currency || ''}`}
        type={'labelsMedium'}
        className="whitespace-nowrap"
      />
    </div>
  )


  const wealthCount = [
    {
      data: showItemWithMoney(<Money/>, getTotalForType(liquidCashs), '$'),
      total: getTotalForType(liquidCashs)
    },
    {
      data: showItemWithMoney(<House/>, getTotalForType(realEstates), '$'),
      total: getTotalForType(realEstates)
    },
    {
      data: showItemWithMoney(<Stock/>, getTotalForType(stocks), '$'),
      total: getTotalForType(stocks)
    },
    {
      data: showItemWithMoney(<Coin/>, getTotalForType(cryptos), '$'),
      total: getTotalForType(cryptos)
    },
    {
      data: showItemWithMoney(<Gold/>, getTotalForType(golds), '$'),
      total: getTotalForType(golds)
    },
    {
      data: showItemWithMoney(<Card/>, getTotalForType(cards), '$'),
      total: getTotalForType(cards)
    },
    {
      data: showItemWithMoney(<Saving/>, getTotalForType(savings), '$'),
      total: getTotalForType(savings)
    },
    {
      data: showItemWithMoney(<FixedDeposit/>, getTotalForType(fixedDeposits), '$'),
      total: getTotalForType(fixedDeposits)
    },
    {
      data: showItemWithMoney(<Income/>, getTotalForType(incomes), '$'),
      total: getTotalForType(incomes)
    },
    {
      data: showItemWithMoney(<Expenses/>, getTotalForType(expenses), '$'),
      total: getTotalForType(expenses)
    },
    {
      data: showItemWithMoney(<Car/>, getTotalForType(cars), '$'),
      total: getTotalForType(cars)
    },
    {
      data: showItemWithMoney(<MutualFunds/>, getTotalForType(mutualFunds), '$'),
      total: getTotalForType(mutualFunds)
    }
  ].filter(item => item.total > 0);

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
            {showItemWithMoney(<Stats/>, getOverTotal(), '$')}
            {wealthCount
              .slice(0, 8)
              .map((item) => item.data)}
            <div className="relative">
              <Button
                typeButton={'none'}
                onMouseEnter={() => setShowAdditionalOptions(true)}
                onMouseLeave={() => setShowAdditionalOptions(false)}
                className="bg-white px-3 py-3.5 rounded-full bg-opacity-30 hover:bg-opacity-50 cursor-pointer"
              >
                <ChevroneDownIcon color={'white'}/>
              </Button>
              {showAdditionalOptions && wealthCount.length > 8 &&
                <div
                  className="absolute bg-naturalBlack p-6 bg-opacity-80 rounded-2xl right-0 top-16 flex items-start space-y-2 flex-col">
                  {wealthCount
                    .slice(8)
                    .map((item, index) => item.data)}
                </div>}
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
              {!isPaid
                ? <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#00B386] to-[#004D3A]"/>
                : <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#FED200] to-[#79660A]"/>}

              <div className="relative rounded-full p-1 flex items-center justify-center">
                <img src={'/TextUser.svg'} alt={'user'} className="w-[36px]"/>
              </div>
            </Button>
            {isOpenedProfilePopup &&
              <ProfileHeaderPopup refContainer={refProfilePopup} onClose={() => setIsOpenedProfilePopup(false)}/>}
          </div>
          {!isPaid && <Button
            typeButton="none"
            className="bg-primary text-white px-5 py-2 rounded-[38px] font-bold"
            onClick={exportClick}
          >
            {'Save canvas'}
          </Button>}
        </div>
      </div>
    </div>
  )
}
