import React, { useEffect, useState } from "react";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";
import { useCreateCardMutation, useDeleteCardMutation, useUpdateCardMutation } from "@/store/api/cardSlice";
import { ICard, ICardForm } from "@/interfaces/ICard";
import { Button } from "@/ui/button/Button";

export default function CardForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: ICard;
  onClose?: () => void;
}) {
  const [deleteCard] = useDeleteCardMutation();
  const [createCard] = useCreateCardMutation();
  const [updateCard] = useUpdateCardMutation();
  const [form, setForm] = useState<ICardForm>({
    name: '',
    amount: 0,
    image: '/canvas/CC2.svg',
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
        position: defaultForm.position
      });
    }
  }, [defaultForm]);


  useEffect(() => {
    if (form.isPrimary) {
      setForm((prevState) => ({ ...prevState, image: '/canvas/CC1.svg' }));
    } else {
      setForm((prevState) => ({ ...prevState, image: '/canvas/CC2.svg' }));
    }
  }, [form.isPrimary]);

  const handleClick = () => {
    if (defaultForm) {
      updateCard({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createCard(form).unwrap()
        .finally(() => onClose?.());
    }
  }

  return (
    <div className="w-[700px] flex items-center flex-col">
      <Typography text={'Car Form'} type={'heading2'} className="mb-4"/>
      <div className="flex flex-col space-y-6 w-full">
        <Input
          label="Name"
          value={form.name}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label="Amount"
          value={form.amount}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={form.isPrimary}
            onChange={(e) => setForm({ ...form, isPrimary: e.target.checked })}
          />
          <Typography text={'Is Primary'} type={'body1'}/>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button onClick={handleClick} typeButton="white">
          {defaultForm ? 'Update' : 'Create'}
        </Button>
        {defaultForm && <Button onClick={() => deleteCard(defaultForm._id)} typeButton="white-shadow">
          {'Delete'}
        </Button>}
      </div>
    </div>
  )
}
