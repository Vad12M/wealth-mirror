import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Typography from "@/ui/typography/Typography";
import OptionStock from "@/ui/icons/canvas/OptionStock";
import OptionCar from "@/ui/icons/canvas/OptionCar";
import OptionCard from "@/ui/icons/canvas/OptionCard";
import OptionHouse from "@/ui/icons/canvas/OptionHouse";
import CanvasHandlerForms from "@/components/paint/CanvasHandlerForms";
import { Button } from "@/ui/button/Button";
import OptionsLeftArrow from "@/ui/icons/canvas/OptionsLeftArrow";

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

  return (
    <Box
      position="absolute"
      left={optionsPosition.x}
      top={optionsPosition.y}
      className={'py-4 px-6 shadow-lg rounded-[20px]'}
      style={{
        background: '#23292E',
        backdropFilter: 'blur(12px)'
      }}
    >
      {!newItemType ? <div className="flex flex-col items-center">
          <Typography text={'Select an asset'} className={'mb-2'} type={'subHeading4'}/>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <button className="bg-white rounded-[12px] p-2" onClick={() => setNewItemType('fortune')}>
                <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
                  <OptionStock/>
                </div>
                <Typography text={'Stock'} className={'text-secondaryGray'} type={'subHeading4'}/>
              </button>
              <button className="bg-white rounded-[12px] p-2" onClick={() => setNewItemType('car')}>
                <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
                  <OptionCar/>
                </div>
                <Typography text={'Vehicle'} className={'text-secondaryGray'} type={'subHeading4'}/>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-white rounded-[12px] p-2" onClick={() => setNewItemType('card')}>
                <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
                  <OptionCard/>
                </div>
                <Typography text={'Card'} className={'text-secondaryGray'} type={'subHeading4'}/>
              </button>
              <button className="bg-white rounded-[12px] p-2" onClick={() => setNewItemType('realEstate')}>
                <div className="bg-[##D9FBEE] h-[75px] w-[85px] flex items-center justify-center">
                  <OptionHouse/>
                </div>
                <Typography text={'House'} className={'text-secondaryGray'} type={'subHeading4'}/>
              </button>
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
          <CanvasHandlerForms
            type={newItemType}
            position={optionsPosition}
            defaultForm={defaultForm}
            onClose={onClose}
          />
        </div>}
    </Box>
  )
}
