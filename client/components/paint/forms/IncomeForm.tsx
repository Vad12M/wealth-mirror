import React, { useEffect, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import OptionIncome from "@/ui/icons/canvas/OptionIncome";
import { IIncome, IIncomeForm } from "@/interfaces/wealths/IIncome";
import Dropdown from "@/ui/dropdown/dropdown";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";
import { useCreateIncomeMutation, useDeleteIncomeMutation, useUpdateIncomeMutation } from "@/store/api/incomeSlice";

export default function IncomeForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: IIncome;
  onClose?: () => void;
}) {
  const [deleteIncome, { isLoading: isLoadingDelete }] = useDeleteIncomeMutation();
  const [createIncome, { isLoading: isLoadingCreate }] = useCreateIncomeMutation();
  const [updateIncome, { isLoading: isLoadingUpdate }] = useUpdateIncomeMutation();

  const [form, setForm] = useState<IIncomeForm>({
    category: '',
    frequency: 'monthly',
    amount: 0,
    dateCredited: '',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });


  useEffect(() => {
    if (defaultForm) {
      setForm({
        category: defaultForm.category,
        frequency: defaultForm.frequency,
        amount: defaultForm.amount,
        position: defaultForm.position,
        dateCredited: defaultForm.dateCredited,
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
    if (defaultForm) {
      updateIncome({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createIncome(form).unwrap()
        .finally(() => onClose?.());
    }
  }

  const categories = [
    { label: 'Salary', value: 'Salary' },
    { label: 'Business', value: 'Business' },
    { label: 'Pension', value: 'Pension' },
    { label: 'Rental', value: 'Rental' },
    { label: 'Freelance', value: 'Freelance' },
    { label: 'Others', value: 'Others' },
  ];

  const frequencies = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' },
    { label: 'Fixed', value: 'fixed' },
  ];

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="h-[55px] w-[73px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <OptionIncome/>
        </div>
        <Typography text={'Income'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <Dropdown
          label={'Category'}
          placeholder={'Select category'}
          options={categories}
          value={form.category}
          onChange={(value) => setForm((prevState) => ({ ...prevState, category: value }))}
        />
        <Dropdown
          label={'Frequency'}
          placeholder={'Select frequency'}
          options={frequencies}
          value={form.frequency}
          onChange={(value) => setForm((prevState) => ({ ...prevState, frequency: value }))}
        />
        <InputForm
          label="Amount"
          value={!!form.amount ? form.amount.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, dateCredited: startDate }));
          }}
          initialSelectDate={form.dateCredited ? parseISO(form.dateCredited) : undefined}
          label={'Date Credited'}
          placeholder={'Select date'}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteIncome(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Income'}
      />
    </div>
  )
}
