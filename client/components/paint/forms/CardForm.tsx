import React, { useEffect, useRef, useState } from "react";
import Typography from "@/ui/typography/Typography";
import { useCreateCardMutation, useDeleteCardMutation, useUpdateCardMutation } from "@/store/api/cardSlice";
import { ICard, ICardForm } from "@/interfaces/wealths/ICard";
import InputForm from "@/ui/input/inputForm";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";
import CreditCard from "@/ui/icons/canvas/card/CreditCard";
import DebitCard from "@/ui/icons/canvas/card/DebitCard";
import MetalCard from "@/ui/icons/canvas/card/MetalCard";
import 'swiper/swiper-bundle.css';
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";

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
  const sliderRef = useRef(null);

  const [deleteCard, { isLoading: isLoadingDelete }] = useDeleteCardMutation();
  const [createCard, { isLoading: isLoadingCreate }] = useCreateCardMutation();
  const [updateCard, { isLoading: isLoadingUpdate }] = useUpdateCardMutation();
  const [form, setForm] = useState<ICardForm>({
    name: '',
    amount: 0,
    type: 'debit',
    bankName: '',
    expirationDate: '',
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
        position: defaultForm.position,
        type: defaultForm.type,
        bankName: defaultForm.bankName,
        expirationDate: defaultForm.expirationDate
      });

      if (sliderRef.current !== null && (sliderRef.current as any).swiper !== null) {
        (sliderRef.current as any).swiper.slideTo(types.findIndex((el) => el.value === defaultForm.type));
      }
    }
  }, [defaultForm]);

  const types = [
    { name: 'Credit Card', value: 'credit' },
    { name: 'Debit Card', value: 'debit' },
    { name: 'Metal Card', value: 'metal' }
  ];

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
      case 'credit':
        return <CreditCard/>
      case 'debit':
        return <DebitCard/>
      case 'metal':
        return <MetalCard/>
    }
  }

  return (
    <div className="w-[252px] flex items-center flex-col">
      <div className="relative w-full">
        <Swiper
          className={'w-full flex justify-center h-full'}
          ref={sliderRef}
          loop={true}
          slidesPerView={'auto'}
          onActiveIndexChange={(e) => setForm({ ...form, type: types[e.realIndex].value })}
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
      <div className="flex flex-col space-y-2 w-full">
        <InputForm
          label="Name on the card"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        <InputForm
          label="Name"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm({ ...form, bankName: e.target.value })}
        />
        <InputForm
          label="Amount"
          value={!!form.amount ? form.amount.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, expirationDate: startDate }));
          }}
          initialSelectDate={form.expirationDate ? parseISO(form.expirationDate) : undefined}
          label={'Expiration Date'}
          placeholder={'Select date'}
        />
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={form.isPrimary}
            onChange={(e) => setForm({ ...form, isPrimary: e.target.checked })}
          />
          <Typography text={'This is my primary card'} type={'body1'}/>
        </div>
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteCard(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Card'}
      />
    </div>
  )
}
