import React, { useEffect, useState } from "react";
import { ICar, ICarForm } from "@/interfaces/ICar";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";
import { useCreateCarMutation, useUpdateCarMutation } from "@/store/api/carSlice";

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
  const [createCar] = useCreateCarMutation();
  const [updateCar] = useUpdateCarMutation();
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
      setForm({
        name: defaultForm.name,
        price: defaultForm.price,
        year: defaultForm.year,
        brand: defaultForm.brand,
        type: defaultForm.type,
        image: defaultForm.imageUrl,
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

  const create = () => {
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
    <div className="w-[700px]">
      <Typography text={'Car Form'} type={'heading1'} className="mb-4"/>
      <div className="mb-6">
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => setForm({ ...form, type: type.value })}
            className={`px-4 py-2 border ${form.type === type.value ? 'bg-primary text-white' : ''}`}
          >
            {type.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col space-y-6">
        <Input
          label="Name"
          value={form.name}
          onUpdate={(e) => setForm({ ...form, name: e.target.value })}
        />
        {/*<Dropdown options={[]} onSelectItem={() => {*/}
        {/*}}/>*/}
        <Input
          label="Brand"
          value={form.brand}
          onUpdate={(e) => setForm({ ...form, brand: e.target.value })}
        />
        <Input
          label="Year"
          value={form.year}
          onUpdate={(e) => setForm({ ...form, year: Number(e.target.value) })}
        />
        <Input
          label="Price"
          value={form.price}
          onUpdate={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />
      </div>
      <button onClick={create} className="px-4 py-2 bg-primary text-white mt-4">
        {defaultForm ? 'Update' : 'Create'}
      </button>
    </div>
  )
}
