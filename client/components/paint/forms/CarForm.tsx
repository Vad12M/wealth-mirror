import React, { useEffect, useRef, useState } from "react";
import { ICar, ICarForm } from "@/interfaces/ICar";
import { useCreateCarMutation, useDeleteCarMutation, useUpdateCarMutation } from "@/store/api/carSlice";
import InputForm from "@/ui/input/inputForm";
import { Swiper, SwiperSlide } from 'swiper/react';
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import OldCar from "@/ui/icons/canvas/car/OldCar";
import Bike from "@/ui/icons/canvas/car/Bike";
import Scooter from "@/ui/icons/canvas/car/Scooter";
import Car from "@/ui/icons/canvas/car/Car";
import 'swiper/swiper-bundle.css';
import Typography from "@/ui/typography/Typography";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";

export default function Crypto({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: ICar;
  onClose?: () => void;
}) {
  const sliderRef = useRef(null);
  const [deleteCar, { isLoading: isLoadingDelete }] = useDeleteCarMutation();
  const [createCar, { isLoading: isLoadingCreate }] = useCreateCarMutation();
  const [updateCar, { isLoading: isLoadingUpdate }] = useUpdateCarMutation();
  const year = new Date().getFullYear();
  const [form, setForm] = useState<ICarForm>({
    name: '',
    price: 0,
    year: year,
    brand: '',
    type: 'car',
    image: '/canvas/OldCar.svg',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  const types = [
    { name: 'Car', value: 'car' },
    { name: 'Old Car', value: 'oldCar' },
    { name: 'Scooter', value: 'scooter' },
    { name: 'Bike', value: 'bike' }
  ];

  useEffect(() => {
    if (defaultForm) {
      setForm({
        name: defaultForm.name,
        price: defaultForm.price,
        year: defaultForm.year,
        brand: defaultForm.brand,
        type: defaultForm.type,
        image: defaultForm.image,
        position: defaultForm.position
      });

      if (sliderRef.current !== null && (sliderRef.current as any).swiper !== null) {
        (sliderRef.current as any).swiper.slideTo(types.findIndex((el) => el.value === defaultForm.type));
      }
    }

  }, [defaultForm]);

  useEffect(() => {
    switch (form.type) {
      case 'car':
        setForm((prevState) => ({ ...prevState, image: '/canvas/Car.svg' }));
        break;
      case 'oldCar':
        setForm((prevState) => ({ ...prevState, image: '/canvas/CarOld.svg' }));
        break;
      case 'scooter':
        setForm({ ...form, image: '/canvas/Scooter.svg' });
        break;
      case 'bike':
        setForm({ ...form, image: '/canvas/Bike.svg' });
        break;
    }
  }, [form.type]);

  const handleClick = () => {
    if (defaultForm) {
      updateCar({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createCar(form).unwrap()
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
      case 'car':
        return <Car/>
      case 'oldCar':
        return <OldCar/>
      case 'scooter':
        return <Scooter/>
      case 'bike':
        return <Bike/>
    }
  }
  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="relative w-full">
        <Swiper
          className="w-full flex justify-center max-h-[80px] overflow-hidden"
          ref={sliderRef}
          slidesPerView="auto"
          loop={true}
          onActiveIndexChange={(e) => setForm({ ...form, type: types[e.realIndex].value })}
        >
          {types.map((el, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex justify-center">
                <div className="flex flex-col bg-white rounded-[10px] w-[62px] h-[80px] justify-center items-center">
                  <div className="bg-[#D9FBEE] h-[45px] w-[45px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
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
          label="Name"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        {/*<SearchDropdown options={[]} onSelectItem={() => {*/}
        {/*}}/>*/}
        <InputForm
          label="Brand"
          value={form.brand}
          placeholder={'Enter brand'}
          onUpdate={(e) => setForm({ ...form, brand: e.target.value })}
        />
        <InputForm
          label="Year"
          value={form.year}
          placeholder={'Enter year'}
          onUpdate={(e) => setForm({ ...form, year: Number(e.target.value) })}
        />
        <InputForm
          label="Price"
          value={!!form.price ? form.price.toString() : ''}
          placeholder={'Enter price'}
          onUpdate={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteCar(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Car'}
      />
    </div>
  )
}
