import React, { useState } from "react";
import { ICarForm } from "@/interfaces/ICar";
import Input from "@/ui/input/input";

export default function CarForm({}: {}) {
  const [form, setForm] = useState<ICarForm>({
    name: '',
    price: 0,
    type: 'car',
    imageUrl: '',
  });

  const types = ['car', 'oldCar', 'scooter', 'bike'];

  return (
    <div>
      <div>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setForm({ ...form, type: type })}
            className={`px-4 py-2 border ${form.type === type ? 'bg-black text-white' : ''}`}
          >
            {type}
          </button>
        ))}
      </div>
      <Input
        label="Name"
        value={form.name}
        onUpdate={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        label="Price"
        value={form.price}
        onUpdate={(e) => setForm({ ...form, price: Number(e.target.value) })}
      />
    </div>
  )
}
