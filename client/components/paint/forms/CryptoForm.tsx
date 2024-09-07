import React, { useEffect, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import { ICrypto, ICryptoForm } from "@/interfaces/ICrypto";
import OptionCrypto from "@/ui/icons/canvas/OptionCrypto";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import { useCreateCryptoMutation, useDeleteCryptoMutation, useUpdateCryptoMutation } from "@/store/api/cryptoSlice";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";

export default function CryptoForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: ICrypto;
  onClose?: () => void;
}) {
  const [deleteCrypto, { isLoading: isLoadingDelete }] = useDeleteCryptoMutation();
  const [createCrypto, { isLoading: isLoadingCreate }] = useCreateCryptoMutation();
  const [updateCrypto, { isLoading: isLoadingUpdate }] = useUpdateCryptoMutation();

  const [form, setForm] = useState<ICryptoForm>({
    currencyName: '',
    code: '',
    purchaseDate: '',
    quantity: 0,
    amount: 0,
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  useEffect(() => {
    if (defaultForm) {
      setForm({
        currencyName: defaultForm.currencyName,
        code: defaultForm.code,
        purchaseDate: defaultForm.purchaseDate,
        quantity: defaultForm.quantity,
        amount: defaultForm.amount,
        position: defaultForm.position
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
    if (defaultForm) {
      updateCrypto({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createCrypto(form).unwrap()
        .finally(() => onClose?.());
    }
  }

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <OptionCrypto/>
        </div>
        <Typography text={'Stock'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <InputForm
          label="Currency Name"
          value={form.currencyName}
          placeholder={'Enter currency name'}
          onUpdate={(e) => setForm({ ...form, currencyName: e.target.value })}
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
        deleteClick={() => defaultForm ? deleteCrypto(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Crypto'}
      />
    </div>
  )
}
