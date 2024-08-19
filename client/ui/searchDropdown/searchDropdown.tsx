import React from 'react';
import Typography from "@/ui/typography/Typography";
import useOnClickOutside from "@/hooks/useOnClickOutside";

const SearchDropdown = ({ options, value, onChange, label, placeholder }: {
  options: { value: string, label: string }[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const inputRef = React.useRef(null);
  useOnClickOutside([inputRef, containerRef], () => {
    setIsOpen(false);
  })

  return (
    <div className="flex flex-col space-y-2">
      {label && <Typography text={label} type={'labelsSmall'}/>}
      <input
        ref={inputRef}
        className="rounded-[8px] border border-[#D0D5DD] bg-white outline-0 text-black w-full py-2.5 px-3.5"
        style={{
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => {
          if (options.length > 0) {
            setIsOpen(true)
          }
        }}
      />
      {isOpen && <div className="relative" ref={containerRef}>
        <div
          className="rounded-[8px] border border-[#D0D5DD] bg-white w-full py-2.5 px-3.5 absolute left-0 top-full mt-1 overflow-hidden overflow-y-auto z-10"
          style={{
            maxHeight: '200px',
            boxShadow: '0px 5px 2px 0px rgba(16, 24, 40, 0.07)',
          }}
        >
          {options.slice(0, 5).map((option, index) => (
            <div
              key={index}
              className="cursor-pointer py-2 px-2 rounded-[8px] text-black hover:bg-primary"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
};

export default SearchDropdown;
