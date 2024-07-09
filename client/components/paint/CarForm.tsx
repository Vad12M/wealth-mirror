import React, { useState } from "react";
import { ICarForm } from "@/interfaces/ICar";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";

export default function CarForm({
  position
}: {
  position: {
    x: number;
    y: number;
  }
}) {
  const year = new Date().getFullYear();
  const [form, setForm] = useState<ICarForm>({
    name: '',
    price: 0,
    year: year,
    brand: '',
    type: 'car',
    imageUrl: '',
    position: {
      x: position.x || 0,
      y: position.y || 0
    },
  });

  const types = [
    { name: 'Car', value: 'car' },
    { name: 'Old Car', value: 'oldCar' },
    { name: 'Scooter', value: 'scooter' },
    { name: 'Bike', value: 'bike' }
  ]

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
    </div>
  )
}
