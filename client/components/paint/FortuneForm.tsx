import React, { useEffect, useState } from "react";
import { Button } from "@/ui/button/Button";
import { IFortune, IFortuneForm } from "@/interfaces/IFortune";
import { useCreateFortuneMutation, useDeleteFortuneMutation, useUpdateFortuneMutation } from "@/store/api/fortuneSlice";
import InputForm from "@/ui/input/inputForm";

export default function FortuneForm({
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
  const [deleteFortune, { isLoading: isLoadingDelete }] = useDeleteFortuneMutation();
  const [createFortune, { isLoading: isLoadingCreate }] = useCreateFortuneMutation();
  const [updateFortune, { isLoading: isLoadingUpdate }] = useUpdateFortuneMutation();
  const [form, setForm] = useState<IFortuneForm>({
    name: '',
    code: '',
    quantity: 0,
    amount: 0,
    amountOfDividends: 0,
    periodOfReceivingDividends: '',
    type: 'stock',
    image: '/canvas/Car.svg',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  const types = [
    { name: 'Stock', value: 'stock' },
    { name: 'Bond', value: 'bond' },
    { name: 'Mutual Fund', value: 'mutualFund' },
    { name: 'ETF', value: 'etf' },
    { name: 'PPF', value: 'ppf' },
    { name: 'NPS', value: 'nps' },
  ];

  useEffect(() => {
    if (defaultForm) {
      setForm({
        name: defaultForm.name,
        code: defaultForm.code,
        quantity: defaultForm.quantity,
        amount: defaultForm.amount,
        amountOfDividends: defaultForm.amountOfDividends,
        periodOfReceivingDividends: defaultForm.periodOfReceivingDividends,
        type: defaultForm.type,
        image: defaultForm.image,
        position: defaultForm.position
      });
    }
  }, [defaultForm]);

  useEffect(() => {
    switch (form.type) {
      case 'stock':
        setForm((prevState) => ({ ...prevState, image: '/canvas/Fortune-4.svg' }));
        break;
      case 'mutualFund':
        setForm((prevState) => ({ ...prevState, image: '/canvas/Fortune-1.svg' }));
        break;
      case 'bond':
        setForm((prevState) => ({ ...prevState, image: '/canvas/Fortune-2.svg' }));
        break;
      case 'epf':
      case 'ppf':
      case 'nps':
        setForm({ ...form, image: '/canvas/Fortune-3.svg' });
        break;
    }
  }, [form.type]);

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

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      {/*<div className="mb-6">*/}
      {/*  {types.map((type) => (*/}
      {/*    <button*/}
      {/*      key={type.value}*/}
      {/*      onClick={() => setForm({ ...form, type: type.value })}*/}
      {/*      className={`px-4 py-2 border ${form.type === type.value ? 'bg-primary text-white' : ''}`}*/}
      {/*    >*/}
      {/*      {type.name}*/}
      {/*    </button>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div className="flex flex-col space-y-4 w-full">
        <InputForm
          label="Name"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        <InputForm
          label="Code"
          value={form.code}
          placeholder={'Enter code'}
          onUpdate={(e) => setForm({ ...form, code: e.target.value })}
        />
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
        <InputForm
          label="Amount of Dividends"
          value={!!form.amountOfDividends ? form.amountOfDividends.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amountOfDividends: Number(e.target.value) })}
        />
        <InputForm
          label="Period of Receiving Dividends"
          value={form.periodOfReceivingDividends}
          placeholder={'Enter period'}
          onUpdate={(e) => setForm({ ...form, periodOfReceivingDividends: e.target.value })}
        />
      </div>
      <Button
        typeButton="none"
        className="bg-primary text-white px-3.5 py-2.5 rounded-[38px] w-full mt-4"
        onClick={handleClick}
        loading={isLoadingCreate || isLoadingUpdate}
      >
        {defaultForm ? 'Update Asset' : 'Add Asset'}
      </Button>
      {defaultForm && <Button
        typeButton="none"
        className="bg-danger text-white px-3.5 py-2.5 rounded-[38px] w-full mt-4"
        onClick={() => deleteFortune(defaultForm._id).finally(() => onClose?.())}
        loading={isLoadingDelete}
      >
        {'Remove Asset'}
      </Button>}
    </div>
  )
}
