import React, { useEffect, useState } from "react";
import { IFortune } from "@/interfaces/IFortune";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import { ICashForm } from "@/interfaces/ICash";
import OptionLiquidCash from "@/ui/icons/canvas/OptionLiquidCash";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";

export default function LiquidCashForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: IFortune;
  onClose?: () => void;
}) {
  const [form, setForm] = useState<ICashForm>({
    amount: 0,
    image: '/canvas/Fortune-4.svg',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  useEffect(() => {
    if (defaultForm) {
      setForm({
        amount: defaultForm.amount,
        image: defaultForm.image,
        position: defaultForm.position
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
  }

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="h-[55px] w-[73px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <OptionLiquidCash/>
        </div>
        <Typography text={'Liquid Cash'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <InputForm
          label="Amount"
          value={!!form.amount ? form.amount.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
      </div>
      <FormButtonsBlock
        // isLoading={isLoadingCreate || isLoadingUpdate}
        // isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        // deleteClick={() => defaultForm ? deleteFortune(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Liquid Cash'}
      />
    </div>
  )
}