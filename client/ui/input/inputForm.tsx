import React from "react";
import Typography from "@/ui/typography/Typography";

export default function InputForm({
  placeholder,
  value,
  onUpdate,
  label
}: {
  placeholder?: string;
  value?: string | number;
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <Typography text={label} type={'labelsSmall'}/>}
      <input
        className="bg-white py-2.5 px-3.5 border border-[#D0D5DD] rounded-[8px] w-full outline-0 text-black"
        placeholder={placeholder}
        value={value}
        onChange={onUpdate}
      />
    </div>
  )
}
