import React, { useEffect, useState } from "react";
import {
  useCreateRealEstateMutation,
  useDeleteRealEstateMutation,
  useUpdateRealEstateMutation
} from "@/store/api/realEstateSlice";
import { IRealEstate, IRealEstateForm } from "@/interfaces/IRealEstate";
import InputForm from "@/ui/input/inputForm";
import FormButtonsBlock from "@/components/paint/forms/FormButtonsBlock";

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
  const [deleteRealEstate, { isLoading: isLoadingDelete }] = useDeleteRealEstateMutation();
  const [createRealEstate, { isLoading: isLoadingCreate }] = useCreateRealEstateMutation();
  const [updateRealEstate, { isLoading: isLoadingUpdate }] = useUpdateRealEstateMutation();
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
    <div className="w-[252px] flex items-center flex-col">
      <div className="flex flex-col space-y-4 w-full">
        <InputForm
          label="Location"
          value={form.location}
          placeholder="Enter location"
          onUpdate={(e) => setForm({ ...form, location: e.target.value })}
        />
        <InputForm
          label="Price"
          value={!!form.price ? form.price.toString() : ''}
          placeholder="Enter price"
          onUpdate={(e) => setForm({ ...form, price: Number(e.target.value) })}
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
