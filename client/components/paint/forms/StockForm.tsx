import React, { useEffect, useRef, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import SearchDropdown from "@/ui/searchDropdown/searchDropdown";
import {
  useCreateStockMutation,
  useDeleteStockMutation,
  useGetExternalStocksQuery,
  useUpdateStockMutation
} from "@/store/api/stockSlice";
import { parseISO } from "date-fns";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { IStock, IStockForm } from "@/interfaces/IStock";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";
import OptionStock from "@/ui/icons/canvas/OptionStock";
import OptionIndianStock from "@/ui/icons/canvas/OptionIndianStock";
import OptionEUStock from "@/ui/icons/canvas/OptionEUStock";

export default function StockForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: IStock;
  onClose?: () => void;
}) {
  const sliderRef = useRef(null);
  const [deleteFortune, { isLoading: isLoadingDelete }] = useDeleteStockMutation();
  const [createFortune, { isLoading: isLoadingCreate }] = useCreateStockMutation();
  const [updateFortune, { isLoading: isLoadingUpdate }] = useUpdateStockMutation();
  const [form, setForm] = useState<IStockForm>({
    name: '',
    code: '',
    quantity: 0,
    amount: 0,
    amountOfDividends: 0,
    type: 'us-stock',
    periodOfReceivingDividends: '',
    purchaseDate: '',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });
  const { data: stocks } = useGetExternalStocksQuery({ search: form.code });

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
        position: defaultForm.position,
        purchaseDate: defaultForm.purchaseDate,
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

  const types = [
    { name: 'US Stocks', value: 'us-stock' },
    { name: 'Indian Stocks', value: 'indian-stock' },
    { name: 'EU Stocks', value: 'eu-stock' },
  ]

  const handlePrev = () => {
    if (sliderRef.current !== null && (sliderRef.current as any).swiper !== null) {
      (sliderRef.current as any).swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current !== null && (sliderRef.current as any).swiper !== null) {
      (sliderRef.current as any).swiper.slideNext();
    }
  };

  const iconsHandler = (type: string) => {
    switch (type) {
      case 'us-stock':
        return <OptionStock/>
      case 'indian-stock':
        return <OptionIndianStock/>
      case 'eu-stock':
        return <OptionEUStock/>
    }
  }

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="relative w-full">
        <Swiper
          className={'w-full flex justify-center h-full'}
          ref={sliderRef}
          loop={true}
          slidesPerView={'auto'}
          onActiveIndexChange={(e) => setForm({
            ...form, type: types[e.realIndex].value,
          })}
        >
          {types.map((el, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex justify-center">
                <div className="flex flex-col bg-white rounded-[10px] w-[62px] h-[80px] justify-center items-center">
                  <div
                    className="h-[55px] w-[65px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
                    {iconsHandler(el.value)}
                  </div>
                  <Typography text={el.name} type={'labelsVerySmall'} color="text-black"/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='absolute left-1 top-5 z-50' onClick={handlePrev}>
          <ChevroneLeftIcon/>
        </button>
        <button className='absolute right-1 top-5 z-50' onClick={handleNext}>
          <ChevroneRightIcon/>
        </button>
      </div>
      {/*<div className="flex flex-col bg-white rounded-[10px] w-[72px] h-[90px] justify-center items-center">*/}
      {/*  <div className="bg-[#D9FBEE] h-[55px] w-[55px] flex items-center justify-center mb-1 p-2 rounded-[8px]">*/}
      {/*    <Stock height={50} width={90}/>*/}
      {/*  </div>*/}
      {/*  <Typography text={'Stock'} type={'labelsVerySmall'} color="text-black"/>*/}
      {/*</div>*/}
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
          label="Purchased Price"
          value={!!form.amount ? form.amount.toString() : ''}
          placeholder={'Enter purchased price'}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, purchaseDate: startDate }));
          }}
          initialSelectDate={form.purchaseDate ? parseISO(form.purchaseDate) : undefined}
          label={'Date of purchase'}
          placeholder={'Select date'}
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
