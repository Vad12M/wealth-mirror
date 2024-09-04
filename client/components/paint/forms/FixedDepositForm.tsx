import React, { useEffect, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import OptionFixedDeposit from "@/ui/icons/canvas/OptionFixedDeposit";
import { IFixedDepositForm } from "@/interfaces/wealths/IFixedDeposit";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import {
  useCreateFixedDepositMutation,
  useDeleteFixedDepositMutation,
  useUpdateFixedDepositMutation
} from "@/store/api/fixedDepositSlice";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";

export default function FixedDepositForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: any;
  onClose?: () => void;
}) {
  const [deleteFixedDeposit, { isLoading: isLoadingDelete }] = useDeleteFixedDepositMutation();
  const [createFixedDeposit, { isLoading: isLoadingCreate }] = useCreateFixedDepositMutation();
  const [updateFixedDeposit, { isLoading: isLoadingUpdate }] = useUpdateFixedDepositMutation();

  const [form, setForm] = useState<IFixedDepositForm>({
    name: '',
    amount: 0,
    dateOfPurchase: '',
    maturityDate: '',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });


  useEffect(() => {
    if (defaultForm) {
      setForm({
        name: defaultForm.name,
        amount: defaultForm.amount,
        dateOfPurchase: defaultForm.dateOfPurchase,
        maturityDate: defaultForm.maturityDate,
        position: defaultForm.position
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
    if (defaultForm) {
      updateFixedDeposit({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createFixedDeposit(form).unwrap()
        .finally(() => onClose?.());
    }
  }

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <OptionFixedDeposit/>
        </div>
        <Typography text={'Fixed Deposit'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <InputForm
          label="Name"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        <InputForm
          label="Amount"
          value={!!form.amount ? form.amount.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, dateOfPurchase: startDate }));
          }}
          initialSelectDate={form.dateOfPurchase ? parseISO(form.dateOfPurchase) : undefined}
          label={'Date of purchase'}
          placeholder={'Select date'}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, maturityDate: startDate }));
          }}
          initialSelectDate={form.maturityDate ? parseISO(form.maturityDate) : undefined}
          label={'Maturity date'}
          placeholder={'Select date'}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteFixedDeposit(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Fixed Deposit'}
      />
    </div>
  )
}
