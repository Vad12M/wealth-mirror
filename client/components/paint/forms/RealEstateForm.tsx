import React, { useEffect, useRef, useState } from "react";
import {
  useCreateRealEstateMutation,
  useDeleteRealEstateMutation,
  useUpdateRealEstateMutation
} from "@/store/api/realEstateSlice";
import { IRealEstate, IRealEstateForm } from "@/interfaces/IRealEstate";
import InputForm from "@/ui/input/inputForm";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@/ui/typography/Typography";
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";
import Dropdown from "@/ui/dropdown/dropdown";
import OptionResidential from "@/ui/icons/canvas/OptionResidential";
import OptionCommercial from "@/ui/icons/canvas/OptionCommercial";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";

export default function RealEstateForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: IRealEstate;
  onClose?: () => void;
}) {
  const sliderRef = useRef(null);
  const [deleteRealEstate, { isLoading: isLoadingDelete }] = useDeleteRealEstateMutation();
  const [createRealEstate, { isLoading: isLoadingCreate }] = useCreateRealEstateMutation();
  const [updateRealEstate, { isLoading: isLoadingUpdate }] = useUpdateRealEstateMutation();
  const [form, setForm] = useState<IRealEstateForm>({
    category: 'residential',
    type: '',
    location: '',
    price: 0,
    image: '/canvas/Home-1.svg',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
    purchaseDate: ""
  });

  const categories = [
    { name: 'Residential', value: 'residential' },
    { name: 'Commercial', value: 'commercial' },
  ];

  useEffect(() => {
    if (defaultForm) {
      setForm({
        category: defaultForm.category,
        type: defaultForm.type,
        location: defaultForm.location,
        price: defaultForm.price,
        image: defaultForm.image,
        position: defaultForm.position,
        purchaseDate: defaultForm.purchaseDate
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
    if (defaultForm) {
      updateRealEstate({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createRealEstate(form).unwrap()
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
      case 'residential':
        return <OptionResidential/>
      case 'commercial':
        return <OptionCommercial/>
    }
  }

  const types = form.category === 'residential' ? [
    { label: 'Flat', value: 'flat' },
    { label: 'Villa', value: 'villa' },
    { label: 'Raw Land', value: 'rawLand' }
  ] : [
    { label: 'Shop', value: 'shop' },
    { label: 'Raw Land', value: 'rawLand' }
  ];

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      <div className="relative w-full">
        <Swiper
          className={'w-full flex justify-center h-full'}
          ref={sliderRef}
          loop={true}
          slidesPerView={'auto'}
          onActiveIndexChange={(e) => setForm({
            ...form,
            category: categories[e.realIndex].value,
            image: categories[e.realIndex].value === 'residential' ? '/canvas/Home-1.svg' : '/canvas/Home-5.svg',
            type: '',
          })}
        >
          {categories.map((el, index) => (
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
      <div className="flex flex-col space-y-4 w-full">
        <Dropdown
          label="Type"
          placeholder={'Select type'}
          options={types}
          value={form.type}
          onChange={(value) => {
            setForm((prevState) => ({ ...prevState, type: value }));
          }}
        />
        <InputForm
          label="Location"
          value={form.location}
          placeholder="Enter location"
          onUpdate={(e) => setForm({ ...form, location: e.target.value })}
        />
        <InputForm
          label="Purchased Price"
          value={!!form.price ? form.price.toString() : ''}
          placeholder="Enter purchased price"
          onUpdate={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, purchaseDate: startDate }));
          }}
          initialSelectDate={form.purchaseDate ? parseISO(form.purchaseDate) : undefined}
          label={'Date of purchase'}
          placeholder={'Select date'}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteRealEstate(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Real Estate'}
      />
    </div>
  )
}
