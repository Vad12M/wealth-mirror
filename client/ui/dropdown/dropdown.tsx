import React from 'react';
import Typography from "@/ui/typography/Typography";
import useOnClickOutside from "@/hooks/useOnClickOutside";

const Dropdown = ({ options, value, onChange, label, placeholder }: {
  options: { value: string, label: string }[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useOnClickOutside([containerRef], () => {
    setIsOpen(false);
  });

  return (
    <div className="flex flex-col space-y-2">
      {label && <Typography text={label} type={'labelsSmall'}/>}
      <div
        ref={containerRef}
        className="relative rounded-[8px] border border-[#D0D5DD] bg-white w-full cursor-pointer"
        style={{
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        }}
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-between py-2.5 px-3.5">
          <span className="text-black">
            {options.find(option => option.value === value)?.label || placeholder}
          </span>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
        {isOpen && (
          <div
            className="rounded-[8px] border border-[#D0D5DD] bg-white w-full absolute left-0 top-full mt-1 overflow-hidden overflow-y-auto z-10"
            style={{
              maxHeight: '200px',
              boxShadow: '0px 5px 2px 0px rgba(16, 24, 40, 0.07)',
            }}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer py-2 px-4 text-black"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F7F7F7'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
