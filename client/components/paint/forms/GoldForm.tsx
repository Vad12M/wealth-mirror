import React, { useEffect, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import { IGold, IGoldForm } from "@/interfaces/wealths/IGold";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import { useCreateGoldMutation, useDeleteGoldMutation, useUpdateGoldMutation } from "@/store/api/goldSlice";
import Dropdown from "@/ui/dropdown/dropdown";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";
import OptionGold from "@/ui/icons/canvas/OptionGold";

export default function GoldForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: IGold;
  onClose?: () => void;
}) {
  const [deleteGold, { isLoading: isLoadingDelete }] = useDeleteGoldMutation();
  const [createGold, { isLoading: isLoadingCreate }] = useCreateGoldMutation();
  const [updateGold, { isLoading: isLoadingUpdate }] = useUpdateGoldMutation();

  const [form, setForm] = useState<IGoldForm>({
    quantity: 0,
    amount: 0,
    type: 'physical',
    purchaseDate: '',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  useEffect(() => {
    if (defaultForm) {
      setForm({
        type: defaultForm.type,
        purchaseDate: defaultForm.purchaseDate,
        quantity: defaultForm.quantity,
        amount: defaultForm.amount,
        position: defaultForm.position
      });
    }
  }, [defaultForm]);

  const types = [
    { label: 'Physical Gold', value: 'physical' },
    { label: 'Digital Gold', value: 'digital' },
    { label: 'Gold Bonds', value: 'bonds' },
  ];

  const handleClick = () => {
    if (defaultForm) {
      updateGold({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createGold(form).unwrap()
        .finally(() => onClose?.());
    }
  }

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <OptionGold/>
        </div>
        <Typography text={'Gold'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <Dropdown
          label={'Type'}
          placeholder={'Select type'}
          options={types}
          value={form.type}
          onChange={(value) => setForm((prevState) => ({ ...prevState, type: value }))}
        />
        <InputForm
          label="Quantity(in grams)"
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
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, purchaseDate: startDate }));
          }}
          initialSelectDate={form.purchaseDate ? parseISO(form.purchaseDate) : undefined}
          label={'Date Purchased'}
          placeholder={'Select date'}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteGold(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Gold'}
      />
    </div>
  )
}
