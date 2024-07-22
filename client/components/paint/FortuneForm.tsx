import React, { useEffect, useState } from "react";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import { IFortune, IFortuneForm } from "@/interfaces/IFortune";
import { useCreateFortuneMutation, useDeleteFortuneMutation, useUpdateFortuneMutation } from "@/store/api/fortuneSlice";

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
  const [deleteFortune] = useDeleteFortuneMutation();
  const [createFortune] = useCreateFortuneMutation();
  const [updateFortune] = useUpdateFortuneMutation();
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
      case 'bond':
        setForm((prevState) => ({ ...prevState, image: '/canvas/Fortune-1.svg' }));
        break;
      case 'mutualFund':
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
    <div className="w-[700px] flex items-center flex-col">
      <Typography text={'Car Form'} type={'heading2'} className="mb-4"/>
      <div className="mb-6">
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => setForm({ ...form, type: type.value })}
            className={`px-4 py-2 border ${form.type === type.value ? 'bg-primary text-white' : ''}`}
          >
            {type.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col space-y-6 w-full">
        <Input
          label="Name"
          value={form.name}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label="Code"
          value={form.code}
          onUpdate={(e) => setForm({ ...form, code: e.target.value })}
        />
        <Input
          label="Quantity"
          value={form.quantity}
          onUpdate={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
        />
        <Input
          label="Amount"
          value={form.amount}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <Input
          label="Amount of Dividends"
          value={form.amountOfDividends}
          onUpdate={(e) => setForm({ ...form, amountOfDividends: Number(e.target.value) })}
        />
        <Input
          label="Period of Receiving Dividends"
          value={form.periodOfReceivingDividends}
          onUpdate={(e) => setForm({ ...form, periodOfReceivingDividends: e.target.value })}
        />
      </div>
      <div className="flex items-center space-x-4 mt-8">
        <Button onClick={handleClick} typeButton="white">
          {defaultForm ? 'Update' : 'Create'}
        </Button>
        {defaultForm &&
          <Button onClick={() => deleteFortune(defaultForm._id).finally(() => onClose?.())} typeButton="white-shadow">
            {'Delete'}
          </Button>}
      </div>
    </div>
  )
}
