import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Typography from "@/ui/typography/Typography";
import OptionStock from "@/ui/icons/canvas/OptionStock";
import OptionCar from "@/ui/icons/canvas/OptionCar";
import OptionCard from "@/ui/icons/canvas/OptionCard";
import OptionHouse from "@/ui/icons/canvas/OptionHouse";
import CanvasHandlerForms from "@/components/paint/forms/CanvasHandlerForms";
import { Button } from "@/ui/button/Button";
import OptionsLeftArrow from "@/ui/icons/canvas/OptionsLeftArrow";
import styles from "./PaintOptions.module.scss";
import OptionLiquid from "@/ui/icons/canvas/OptionLiquid";
import OptionFixedDeposit from "@/ui/icons/canvas/OptionFixedDeposit";
import OptionCrypto from "@/ui/icons/canvas/OptionCrypto";
import OptionMutualFunds from "@/ui/icons/canvas/OptionMutualFunds";
import OptionLiquidCash from "@/ui/icons/canvas/OptionLiquidCash";
import OptionSaving from "@/ui/icons/canvas/OptionSaving";

export default function PaintOptions({
  optionsPosition,
  defaultForm,
  type,
  onClose,
}: {
  optionsPosition: {
    x: number;
    y: number;
  },
  defaultForm?: any;
  type: string;
  onClose: () => void;
}) {
  const [newItemType, setNewItemType] = useState<string>('');

  useEffect(() => {
    if (type) {
      setNewItemType(type);
    }
  }, [type]);

  const buttonLayout = (type: string, icon: any, text: string, hex?: string) => {
    return (
      <button className="bg-white rounded-[12px] p-2" onClick={() => setNewItemType(type)}>
        <div className={`h-[75px] w-[85px] flex items-center justify-center mb-1 ${hex ? `bg-[#${hex}] rounded-[8px]` : ''}`}>
          {icon}
        </div>
        <Typography text={text} color={'text-secondaryGray'} type={'smallModerate'}/>
      </button>
    )
  }

  return (
    <Box
      position="absolute"
      left={optionsPosition.x}
      top={optionsPosition.y}
      className={`py-4 pl-4 shadow-lg rounded-[20px]`}
      style={{
        background: '#23292E',
        backdropFilter: 'blur(12px)'
      }}
    >
      {!newItemType ? <div className={`flex flex-col items-center overflow-hidden overflow-y-auto max-h-[280px] ${styles.scrollable}`}>
          <Typography text={'Select an asset'} className={'mb-2'} type={'subHeading4'}/>
          <div className="flex flex-col space-y-3 pr-2">
            <div className="flex items-center space-x-3">
              {buttonLayout('stock', <OptionStock/>, 'Stock')}
              {buttonLayout('realEstate', <OptionHouse/>, 'Property')}
            </div>
            <div className="flex items-center space-x-3">
              {buttonLayout('mutualFunds', <OptionMutualFunds/>, 'Mutual Funds', 'D7EFFE')}
              {buttonLayout('car', <OptionCar/>, 'Vehicle')}
            </div>
            <div className="flex items-center space-x-3">
              {buttonLayout('fixedDeposit', <OptionFixedDeposit/>, 'Fixed Deposit', 'D9FBEE')}
              {buttonLayout('gold', <OptionLiquid/>, 'Gold')}
            </div>
            <div className="flex items-center space-x-3">
              {buttonLayout('crypto', <OptionCrypto/>, 'Crypto')}
              {buttonLayout('liquidCash', <OptionLiquidCash/>, 'Liquid Cash')}
            </div>
            <div className="flex items-center space-x-3">
              {buttonLayout('saving', <OptionSaving/>, 'Saving')}
              {buttonLayout('card', <OptionCard/>, 'Cards')}
            </div>
          </div>
        </div> :
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-full relative mb-4">
            {!defaultForm && <Button typeButton="none" onClick={() => setNewItemType('')} className="absolute left-0">
              <OptionsLeftArrow/>
            </Button>}
            <Typography text={'Fill details'} type={'subHeading4'}/>
            <div/>
          </div>
          <div className={`max-h-[350px] overflow-hidden overflow-y-auto ${styles.scrollable} mr-1`}>
            <CanvasHandlerForms
              type={newItemType}
              position={optionsPosition}
              defaultForm={defaultForm}
              onClose={onClose}
            />
          </div>
        </div>}
    </Box>
  )
}
