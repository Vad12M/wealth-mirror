import React, { useEffect, useState } from "react";
import { IFortune } from "@/interfaces/IFortune";
import InputForm from "@/ui/input/inputForm";
import Stock from "@/ui/icons/canvas/fortune/Stock";
import Typography from "@/ui/typography/Typography";
import { IGoldForm } from "@/interfaces/IGold";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";

export default function GoldForm({
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
  const [form, setForm] = useState<IGoldForm>({
    quantity: 0,
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
        quantity: defaultForm.quantity,
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
        <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <Stock height={50} width={90}/>
        </div>
        <Typography text={'Stock'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <InputForm
          label="Quantity"
          value={!!form.quantity ? form.quantity.toString() : ''}
          placeholder={'Enter quantity'}
          onUpdate={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
        />
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
        type={'Gold'}
      />
    </div>
  )
}
