import React, { useEffect, useState } from "react";
import Typography from "@/ui/typography/Typography";
import { useCreateCardMutation, useDeleteCardMutation, useUpdateCardMutation } from "@/store/api/cardSlice";
import { ICard, ICardForm } from "@/interfaces/ICard";
import { Button } from "@/ui/button/Button";
import InputForm from "@/ui/input/inputForm";

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
  const [deleteCard, { isLoading: isLoadingDelete }] = useDeleteCardMutation();
  const [createCard, { isLoading: isLoadingCreate }] = useCreateCardMutation();
  const [updateCard, { isLoading: isLoadingUpdate }] = useUpdateCardMutation();
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
    <div className="w-[252px] flex items-center flex-col">
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
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={form.isPrimary}
            onChange={(e) => setForm({ ...form, isPrimary: e.target.checked })}
          />
          <Typography text={'Is Primary'} type={'body1'}/>
        </div>
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
        onClick={() => deleteCard(defaultForm._id).finally(() => onClose?.())}
        loading={isLoadingDelete}
      >
        {'Remove Asset'}
      </Button>}
    </div>
  )
}
