import React, { useEffect, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import MutualFounds from "@/ui/icons/canvas/fortune/MutualFounds";
import Typography from "@/ui/typography/Typography";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import {
  useCreateMutualFundMutation,
  useDeleteMutualFundMutation,
  useUpdateMutualFundMutation
} from "@/store/api/mutualFundSlice";
import { IMutualFund, IMutualFundForm } from "@/interfaces/IMutualFund";
import Dropdown from "@/ui/dropdown/dropdown";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";

export default function MutualFundsForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: IMutualFund;
  onClose?: () => void;
}) {
  const [deleteFortune, { isLoading: isLoadingDelete }] = useDeleteMutualFundMutation();
  const [createFortune, { isLoading: isLoadingCreate }] = useCreateMutualFundMutation();
  const [updateFortune, { isLoading: isLoadingUpdate }] = useUpdateMutualFundMutation();
  const [form, setForm] = useState<IMutualFundForm>({
    name: '',
    code: '',
    category: '',
    units: 0,
    purchasePrice: 0,
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
    purchaseDate: ''
  });

  useEffect(() => {
    if (defaultForm) {
      setForm({
        name: defaultForm.name,
        code: defaultForm.code,
        position: defaultForm.position,
        purchaseDate: defaultForm.purchaseDate,
        purchasePrice: defaultForm.purchasePrice,
        category: defaultForm.category,
        units: defaultForm.units
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
    if (defaultForm) {
      updateFortune({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createFortune(form).unwrap()
        .finally(() => onClose?.());
    }
  }

  const categories = [
    { label: 'Equity', value: 'Equity' },
    { label: 'Debt', value: 'Debt' },
    { label: 'Hybrid', value: 'Hybrid' },
  ];

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <MutualFounds/>
        </div>
        <Typography text={'Mutual Founds'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <InputForm
          label="Name"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm((prevState) => ({ ...prevState, name: e.target.value }))}
        />
        <Dropdown
          label={'Category'}
          placeholder={'Select category'}
          options={categories}
          value={form.category}
          onChange={(value) => setForm((prevState) => ({ ...prevState, category: value }))}
        />
        <InputForm
          label="Code"
          value={form.code}
          placeholder={'Enter code'}
          onUpdate={(e) => setForm((prevState) => ({ ...prevState, code: e.target.value }))}
        />
        <InputForm
          label="Units"
          value={!!form.units ? form.units.toString() : ''}
          placeholder={'Enter units'}
          onUpdate={(e) => setForm((prevState) => ({ ...prevState, units: Number(e.target.value) }))}
        />
        <InputForm
          label="Purchase Price"
          value={!!form.purchasePrice ? form.purchasePrice.toString() : ''}
          placeholder={'Enter purchase price'}
          onUpdate={(e) => setForm((prevState) => ({ ...prevState, purchasePrice: Number(e.target.value) }))}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, purchaseDate: startDate }));
          }}
          initialSelectDate={form.purchaseDate ? parseISO(form.purchaseDate) : undefined}
          label={'Date of purchase'}
          placeholder={'Select date'}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteFortune(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Mutual Funds'}
      />
    </div>
  )
}
