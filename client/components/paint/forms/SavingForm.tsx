import React, { useEffect, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import Dropdown from "@/ui/dropdown/dropdown";
import Saving from "@/ui/icons/canvas/fortune/Saving";
import { useCreateSavingMutation, useDeleteSavingMutation, useUpdateSavingMutation } from "@/store/api/savingSlice";
import { ISaving, ISavingForm } from "@/interfaces/wealths/ISaving";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";

export default function SavingForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: ISaving;
  onClose?: () => void;
}) {
  const [deleteSaving, { isLoading: isLoadingDelete }] = useDeleteSavingMutation();
  const [createSaving, { isLoading: isLoadingCreate }] = useCreateSavingMutation();
  const [updateSaving, { isLoading: isLoadingUpdate }] = useUpdateSavingMutation();
  const [form, setForm] = useState<ISavingForm>({
    name: '',
    frequency: 'monthly',
    amount: 0,
    type: 'nps',
    lastUpdated: '',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  useEffect(() => {
    if (defaultForm) {
      setForm({
        frequency: defaultForm.frequency,
        name: defaultForm.name,
        amount: defaultForm.amount,
        type: defaultForm.type,
        position: defaultForm.position,
        lastUpdated: defaultForm.lastUpdated
      });
    }
  }, [defaultForm]);


  const handleClick = () => {
    if (defaultForm) {
      updateSaving({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createSaving(form).unwrap()
        .finally(() => onClose?.());
    }
  }

  const frequencies = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' },
    { label: 'Fixed', value: 'fixed' },
  ];

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <Saving/>
        </div>
        <Typography text={'Stock'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <Dropdown
          options={[
            { value: 'nps', label: 'NPS' },
            { value: 'ppf', label: 'PPF' },
            { value: 'epf', label: 'EPF' },
          ]}
          label={'Type'}
          value={form.type}
          onChange={(e: any) => setForm({ ...form, type: e.target.value })}
        />
        <InputForm
          label="Name"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
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
        deleteClick={() => defaultForm ? deleteSaving(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Saving'}
      />
    </div>
  )
}
