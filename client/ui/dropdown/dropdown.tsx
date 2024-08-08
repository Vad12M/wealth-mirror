import React from 'react';
import Typography from "@/ui/typography/Typography";

const Dropdown = ({ options, value, onChange, label }: {
  options: { value: string, label: string }[];
  value: string;
  onChange: (e: any) => void;
  label?: string;
}) => {
  return (
    <div className="relative inline-block w-full">
      {label && <Typography text={label} type={'labelsSmall'} className="mb-2"/>}
      <div className="relative">
        <select
          className="text-black outline-0 block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 12l-4-4h8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
