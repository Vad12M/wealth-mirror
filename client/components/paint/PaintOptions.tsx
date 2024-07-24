import { Box } from "@chakra-ui/react";
import React from "react";
import Typography from "@/ui/typography/Typography";
import OptionStock from "@/ui/icons/canvas/OptionStock";
import OptionCar from "@/ui/icons/canvas/OptionCar";
import OptionCard from "@/ui/icons/canvas/OptionCard";
import OptionHouse from "@/ui/icons/canvas/OptionHouse";

export default function PaintOptions({
  optionsPosition,
  addNewItem,
  onClose
}: {
  optionsPosition: {
    x: number;
    y: number;
  },
  addNewItem: (type: string) => void,
  onClose: () => void
}) {

  const optionClick = (type: string) => {
    addNewItem(type);
  }

  return (
    <Box
      position="absolute"
      left={optionsPosition.x}
      top={optionsPosition.y}
      className={'py-4 px-6 shadow-lg rounded-[20px] flex flex-col items-center'}
      style={{
        background: '#23292E',
        backdropFilter: 'blur(12px)'
      }}
    >
      <Typography text={'Select an asset'} className={'mb-2'} type={'subHeading4'}/>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3">
          <button className="bg-white rounded-[12px] p-2" onClick={() => optionClick('fortune')}>
            <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
              <OptionStock/>
            </div>
            <Typography text={'Stock'} className={'text-secondaryGray'} type={'subHeading4'}/>
          </button>
          <button className="bg-white rounded-[12px] p-2" onClick={() => optionClick('car')}>
            <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
              <OptionCar/>
            </div>
            <Typography text={'Vehicle'} className={'text-secondaryGray'} type={'subHeading4'}/>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-white rounded-[12px] p-2" onClick={() => optionClick('card')}>
            <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
              <OptionCard/>
            </div>
            <Typography text={'Card'} className={'text-secondaryGray'} type={'subHeading4'}/>
          </button>
          <button className="bg-white rounded-[12px] p-2" onClick={() => optionClick('realEstate')}>
            <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
              <OptionHouse/>
            </div>
            <Typography text={'House'} className={'text-secondaryGray'} type={'subHeading4'}/>
          </button>
        </div>
      </div>
    </Box>
  )
}
