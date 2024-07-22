import React, { useEffect, useState } from "react";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import {
  useCreateRealEstateMutation,
  useDeleteRealEstateMutation,
  useUpdateRealEstateMutation
} from "@/store/api/realEstateSlice";
import { IRealEstate, IRealEstateForm } from "@/interfaces/IRealEstate";

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
  const [deleteRealEstate] = useDeleteRealEstateMutation();
  const [createRealEstate] = useCreateRealEstateMutation();
  const [updateRealEstate] = useUpdateRealEstateMutation();
  const [form, setForm] = useState<IRealEstateForm>({
    location: '',
    price: 0,
    image: '/canvas/Home-1.svg',
    position: {
      x: position?.x || 0,
      y: position?.y || 0
    },
  });

  useEffect(() => {
    if (defaultForm) {
      setForm({
        location: defaultForm.location,
        price: defaultForm.price,
        image: defaultForm.image,
        position: defaultForm.position
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

  return (
    <div className="w-[700px] flex items-center flex-col">
      <Typography text={'Real Estate Form'} type={'heading2'} className="mb-4"/>
      <div className="flex flex-col space-y-6 w-full">
        <Input
          label="Location"
          value={form.location}
          onUpdate={(e) => setForm({ ...form, location: e.target.value })}
        />
        <Input
          label="Price"
          value={form.price}
          onUpdate={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />
      </div>
      <div className="flex items-center space-x-4 mt-8">
        <Button onClick={handleClick} typeButton="white">
          {defaultForm ? 'Update' : 'Create'}
        </Button>
        {defaultForm &&
          <Button
            onClick={() => deleteRealEstate(defaultForm._id).finally(() => onClose?.())}
            typeButton="white-shadow"
          >
            {'Delete'}
          </Button>}
      </div>
    </div>
  )
}
