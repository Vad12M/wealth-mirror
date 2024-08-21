import React, { useEffect, useState } from "react";
import { IFortune, IFortuneForm } from "@/interfaces/IFortune";
import {
  useCreateFortuneMutation,
  useDeleteFortuneMutation,
  useGetStocksQuery,
  useUpdateFortuneMutation
} from "@/store/api/fortuneSlice";
import InputForm from "@/ui/input/inputForm";
import Stock from "@/ui/icons/canvas/fortune/Stock";
import Typography from "@/ui/typography/Typography";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import SearchDropdown from "@/ui/searchDropdown/searchDropdown";

export default function StockForm({
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
    image: '/canvas/Fortune-4.svg',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });
  const { data: stocks } = useGetStocksQuery({ search: form.code });

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
      <div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">
        <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
          <Stock height={50} width={90}/>
        </div>
        <Typography text={'Stock'} type={'labelsVerySmall'} color="text-black"/>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <SearchDropdown
          placeholder={'example: AMZN'}
          label={'Code'}
          value={form.code}
          options={stocks?.map((stock: any) => ({
            label: stock.ticker,
            value: stock.ticker
          })) || []}
          onChange={(value) => {
            setForm((prevState) => ({ ...prevState, code: value }));
            const stock = stocks?.find((stock: any) => stock.ticker === value);
            if (stock) {
              setForm((prevState) => ({ ...prevState, name: stock.name }));
            }
          }}
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
        {defaultForm && <InputForm
          label="Amount of Dividends"
          value={!!form.amountOfDividends ? form.amountOfDividends.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amountOfDividends: Number(e.target.value) })}
        />}
        {defaultForm && <InputForm
          label="Period of Receiving Dividends"
          value={form.periodOfReceivingDividends}
          placeholder={'Enter period'}
          onUpdate={(e) => setForm({ ...form, periodOfReceivingDividends: e.target.value })}
        />}
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteFortune(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Stock'}
      />
    </div>
  )
}
