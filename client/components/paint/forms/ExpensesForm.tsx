import React, { useEffect, useRef, useState } from "react";
import InputForm from "@/ui/input/inputForm";
import Typography from "@/ui/typography/Typography";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";
import { IExpenses, IExpensesForm } from "@/interfaces/wealths/IExpenses";
import OptionExpense from "@/ui/icons/canvas/OptionExpense";
import {
  useCreateExpensesMutation,
  useDeleteExpensesMutation,
  useUpdateExpensesMutation
} from "@/store/api/expensesSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";
import Dropdown from "@/ui/dropdown/dropdown";
import InputCalendar from "@/ui/inputCalendar/inputCalendar";
import { parseISO } from "date-fns";

export default function ExpensesForm({
  position,
  defaultForm,
  onClose,
}: {
  position?: {
    x: number;
    y: number;
  };
  defaultForm?: IExpenses;
  onClose?: () => void;
}) {
  const sliderRef = useRef(null);
  const [deleteExpenses, { isLoading: isLoadingDelete }] = useDeleteExpensesMutation();
  const [createExpenses, { isLoading: isLoadingCreate }] = useCreateExpensesMutation();
  const [updateExpenses, { isLoading: isLoadingUpdate }] = useUpdateExpensesMutation();

  const [form, setForm] = useState<IExpensesForm>({
    category: '',
    type: '',
    dateDebited: '',
    frequency: '',
    amount: 0,
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  const types = [
    { name: 'Utilities', value: 'utilities' },
    { name: 'Shopping', value: 'shopping' },
    { name: 'EMIs', value: 'EMIs' },
    { name: 'Vacation', value: 'vacation' },
    { name: 'Rent', value: 'rent' },
    { name: 'Insurance', value: 'insurance' },
  ];

  useEffect(() => {
    if (defaultForm) {
      setForm({
        category: defaultForm.category,
        frequency: defaultForm.frequency,
        amount: defaultForm.amount,
        position: defaultForm.position,
        dateDebited: defaultForm.dateDebited,
        type: defaultForm.type
      });
    }
  }, [defaultForm]);

  const handleClick = () => {
    if (defaultForm) {
      updateExpenses({
        id: defaultForm._id,
        ...form
      }).unwrap()
        .finally(() => onClose?.());
    } else {
      createExpenses(form).unwrap()
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

  const utilitiesCategories = [
    { label: 'TV/DTH', value: 'tv' },
    { label: 'Mobile Phone', value: 'mobile' },
    { label: 'Electricity', value: 'electricity' },
    { label: 'Water', value: 'water' },
    { label: 'Gas', value: 'gas' },
    { label: 'Transport/Petrol', value: 'transport' },
    { label: 'Wifi Bill', value: 'wifi' },
    { label: 'OTT', value: 'ott' },
  ];

  const shoppingCategories = [
    { label: 'Grocery', value: 'grocery' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Furniture', value: 'furniture' },
  ];

  const EMIsCategories = [
    { label: 'Home Loan', value: 'homeLoan' },
    { label: 'Car Loan', value: 'carLoan' },
    { label: 'Credit Card Loan', value: 'creditCardLoan' },
    { label: 'Other loan', value: 'otherLoan' },
  ];

  const vacationCategories = [
    { label: 'Airfare', value: 'airfare' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Food', value: 'food' },
    { label: 'Cab', value: 'cab' },
  ];

  const rentCategories = [
    { label: 'Home Rent', value: 'homeRent' },
    { label: 'Shop Rent', value: 'shopRent' },
  ];

  const insuranceCategories = [
    { label: 'Health Insurance(Self)', value: 'healthInsuranceSelf' },
    { label: 'Health Insurance(Others)', value: 'healthInsuranceOthers' },
    { label: 'Term Insurance', value: 'termInsurance' },
  ];

  const frequencies = [
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Yearly', value: 'Yearly' },
    { label: 'Fixed', value: 'Fixed' },
  ];

  const handleCategories = (type: string) => {
    switch (type) {
      case 'utilities':
        return utilitiesCategories;
      case 'shopping':
        return shoppingCategories;
      case 'EMIs':
        return EMIsCategories;
      case 'vacation':
        return vacationCategories;
      case 'rent':
        return rentCategories;
      case 'insurance':
        return insuranceCategories
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
                  <div className="h-[55px] w-[73px] flex items-center justify-center mb-1 p-2 rounded-[8px]">
                    <OptionExpense/>
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
          label="Category"
          value={form.category}
          placeholder={'Enter category'}
          onChange={(value) => setForm((prevState) => ({ ...prevState, category: value }))}
          options={handleCategories(form.type) || []}
        />
        {!['vacation', 'shopping'].includes(form.type) &&
          <Dropdown
            label={'Frequency'}
            placeholder={'Select frequency'}
            options={frequencies}
            value={form.frequency || ''}
            onChange={(value) => setForm((prevState) => ({ ...prevState, frequency: value }))}
          />}
        <InputForm
          label="Amount"
          value={!!form.amount ? form.amount.toString() : ''}
          placeholder={'Enter amount'}
          onUpdate={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
        <InputCalendar
          onUpdate={(startDate) => {
            setForm((prevState) => ({ ...prevState, dateDebited: startDate }));
          }}
          initialSelectDate={form.dateDebited ? parseISO(form.dateDebited) : undefined}
          label={'Date Debited'}
          placeholder={'Select date'}
        />
      </div>
      <FormButtonsBlock
        isLoading={isLoadingCreate || isLoadingUpdate}
        isLoadingDelete={isLoadingDelete}
        isEdit={!!defaultForm}
        deleteClick={() => defaultForm ? deleteExpenses(defaultForm._id).finally(() => onClose?.()) : null}
        handleClick={handleClick}
        type={'Expense'}
      />
    </div>
  )
}
