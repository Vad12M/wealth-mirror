import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/ui/button/Button";
import { IFortune, IFortuneForm } from "@/interfaces/IFortune";
import { useCreateFortuneMutation, useDeleteFortuneMutation, useUpdateFortuneMutation } from "@/store/api/fortuneSlice";
import InputForm from "@/ui/input/inputForm";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";
import Stock from "@/ui/icons/canvas/fortune/Stock";
import MutualFounds from "@/ui/icons/canvas/fortune/MutualFounds";
import Typography from "@/ui/typography/Typography";
import Dropdown from "@/ui/dropdown/dropdown";
import Saving from "@/ui/icons/canvas/fortune/Saving";

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
  const sliderRef = useRef(null);
  const [deleteFortune, { isLoading: isLoadingDelete }] = useDeleteFortuneMutation();
  const [createFortune, { isLoading: isLoadingCreate }] = useCreateFortuneMutation();
  const [updateFortune, { isLoading: isLoadingUpdate }] = useUpdateFortuneMutation();
  const [localeType, setLocaleType] = useState('stock');
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

  const types = [
    { name: 'Stock', value: 'stock' },
    // { name: 'Bond', value: 'bond' },
    { name: 'Mutual Fund', value: 'mutualFund' },
    { name: 'Saving', value: 'saving' },
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

      if (sliderRef.current !== null && (sliderRef.current as any).swiper !== null) {
        (sliderRef.current as any).swiper.slideTo(types
          .findIndex((el) => el.value === (['nps', 'ppf', 'epf'].includes(defaultForm.type) ? 'saving' : defaultForm.type))
        );
      }
    }
  }, [defaultForm]);

  useEffect(() => {
    switch (form.type) {
      case 'stock':
        setForm((prevState) => ({ ...prevState, image: '/canvas/Fortune-4.svg' }));
        break;
      case 'mutualFund':
        setForm((prevState) => ({ ...prevState, image: '/canvas/MutualFunds.svg' }));
        break;
      case 'bond':
      case 'nps':
      case 'etf':
      case 'ppf':
        setForm({ ...form, image: '/canvas/Saving.svg' });
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

  const iconsHandler = (type: string) => {
    switch (type) {
      case 'stock':
        return <Stock/>
      case 'mutualFund':
        return <MutualFounds/>
      case 'saving':
        return <Saving/>
    }
  }

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

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="relative w-full">
        <Swiper
          className="w-full flex justify-center max-h-[80px] overflow-hidden"
          ref={sliderRef}
          slidesPerView="auto"
          loop={true}
          onActiveIndexChange={(e) => {
            const activeType = types[e.activeIndex].value;
            if (activeType === 'stock' || activeType === 'mutualFund') {
              setForm({ ...form, type: activeType });
            } else {
              setForm({ ...form, type: 'nps' });
            }
            setLocaleType(types[e.realIndex].value)
          }}
        >
          {types.map((el, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex justify-center">
                <div className="flex flex-col bg-white rounded-[10px] w-[62px] h-[80px] justify-center items-center">
                  <div
                    className="bg-[#D9FBEE] h-[45px] w-[45px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
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
      <div className="flex flex-col space-y-4 w-full">
        {localeType === 'saving' && <Dropdown
          options={[
            { value: 'nps', label: 'NPS' },
            { value: 'ppf', label: 'PPF' },
            { value: 'epf', label: 'EPF' },
          ]}
          label={'Type'}
          value={form.type}
          onChange={(e: any) => setForm({ ...form, type: e.target.value })}
        />}
        {localeType === 'stock' && <Dropdown
          options={[
            { value: 'apple', label: 'Apple' },
            { value: 'google', label: 'Google' },
            { value: 'microsoft', label: 'Microsoft' },
          ]}
          label={'Type'}
          value={form.type}
          onChange={(e: any) => setForm({ ...form, type: e.target.value })}
        />}
        {localeType !== 'stock' &&
          <InputForm
            label="Name"
            value={form.name}
            placeholder={'Enter name'}
            onUpdate={(e) => setForm({ ...form, name: e.target.value })}
          />}
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
