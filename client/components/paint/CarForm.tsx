import React, { useEffect, useState } from "react";
import { ICar, ICarForm } from "@/interfaces/ICar";
import { useCreateCarMutation, useDeleteCarMutation, useUpdateCarMutation } from "@/store/api/carSlice";
import { Button } from "@/ui/button/Button";
import InputForm from "@/ui/input/inputForm";

export default function CarForm({
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
    image: '/canvas/Car.svg',
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
      console.log(defaultForm)
      setForm({
        name: defaultForm.name,
        price: defaultForm.price,
        year: defaultForm.year,
        brand: defaultForm.brand,
        type: defaultForm.type,
        image: defaultForm.image,
        position: defaultForm.position
      });
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

  return (
    <div className="w-[252px] flex items-center flex-col pr-2">
      {/*<div className="mb-6">*/}
      {/*  {types.map((type) => (*/}
      {/*    <button*/}
      {/*      key={type.value}*/}
      {/*      onClick={() => setForm({ ...form, type: type.value })}*/}
      {/*      className={`px-4 py-2 border ${form.type === type.value ? 'bg-primary text-white' : ''}`}*/}
      {/*    >*/}
      {/*      {type.name}*/}
      {/*    </button>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div className="flex flex-col space-y-2 w-full">
        <InputForm
          label="Name"
          value={form.name}
          placeholder={'Enter name'}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        {/*<Dropdown options={[]} onSelectItem={() => {*/}
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
        onClick={() => deleteCar(defaultForm._id).finally(() => onClose?.())}
        loading={isLoadingDelete}
      >
        {'Remove Asset'}
      </Button>}
    </div>
  )
}
