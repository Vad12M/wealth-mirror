import React, { useEffect, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import OptionLiquidCash from "@/ui/icons/canvas/OptionLiquidCash";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import { ILiquidCash, ILiquidCashForm } from "@/interfaces/ILiquidCash";
import {
  useCreateLiquidCashMutation,
  useDeleteLiquidCashMutation,
  useUpdateLiquidCashMutation
} from "@/store/api/luquidCashSlice";
import { parseISO } from "date-fns";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";

export default function LiquidCashForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: ILiquidCash;
  onClose?: () => void;
}) {
  const [deleteLiquidCash, { isLoading: isLoadingDelete }] = useDeleteLiquidCashMutation();
  const [createLiquidCash, { isLoading: isLoadingCreate }] = useCreateLiquidCashMutation();
  const [updateLiquidCash, { isLoading: isLoadingUpdate }] = useUpdateLiquidCashMutation();

  const [form, setForm] = useState<ILiquidCashForm>({
    amount: 0,
    bankName: '',
    lastUpdated: '',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  useEffect(() => {
    if (defaultForm) {
      setForm({
        bankName: defaultForm.bankName,
        lastUpdated: defaultForm.lastUpdated,
        amount: defaultForm.amount,
        position: defaultForm.position
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
    if (defaultForm) {
      updateLiquidCash({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createLiquidCash(form).unwrap()
        .finally(() => onClose?.());
    }
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
          label="Bank Name"
          value={form.bankName}
          placeholder={'Enter bank name'}
          onUpdate={(e) => setForm({ ...form, bankName: e.target.value })}
        />
        <InputForm
          label="Amount"
          value={!!form.amount ? form.amount.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, lastUpdated: startDate }));
          }}
          initialSelectDate={form.lastUpdated ? parseISO(form.lastUpdated) : undefined}
          label={'Last Updated'}
          placeholder={'Select date'}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteLiquidCash(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Liquid Cash'}
      />
    </div>
  )
}
