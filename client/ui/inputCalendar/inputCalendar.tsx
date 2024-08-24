import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions
} from "@floating-ui/react";
import { limitShift, shift } from "@floating-ui/dom";
import Calendar from "@/ui/calendar";
import InputForm from "@/ui/input/inputForm";

export const DATE_FORMAT = 'yyyy-MM-dd'
export const DATE_FORMAT_HOURS = 'yyyy-MM-dd HH:mm'
export const DATE_FORMAT_OUTPUT = 'MMMM dd, yyyy'


interface IInputCalendarProps {
  label?: string;
  placeholder?: string;
  onUpdate: (startDate: string, endDate?: string) => void;
  className?: string;
  isMultipleSelect?: boolean;
  initialStartDate?: Date;
  initialEndDate?: Date;
  initialSelectDate?: Date;
  typeNameMonth?: 'MMM' | 'MMMM';
  outputType?: 'date' | 'dateTime';
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}

const InputCalendar = ({
  label,
  placeholder,
  onUpdate,
  className = 'w-full',
  isMultipleSelect,
  initialStartDate,
  initialEndDate,
  initialSelectDate,
  typeNameMonth = 'MMMM',
  disabled = false,
  outputType = 'dateTime',
  minDate,
  maxDate
}: IInputCalendarProps) => {

  const outputFormat = outputType === 'date' ? DATE_FORMAT : DATE_FORMAT_HOURS;

  const [isOpen, setIsOpen] = useState(false)
  const [selectDate, setSelectDate] = useState<Date | null>(initialSelectDate || null);
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate || null);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate || null);

  useEffect(() => {
    if (selectDate) {
      onUpdate(format(selectDate, outputFormat))
    }
    if (isMultipleSelect && startDate && endDate) {
      onUpdate(format(startDate, outputFormat), format(endDate, outputFormat))
    }
  }, [selectDate]);

  useEffect(() => {
    if (initialSelectDate?.toString() !== selectDate?.toString()) {
      setSelectDate(initialSelectDate || null)
    }
  }, [initialSelectDate]);

  useEffect(() => {
    if (initialStartDate?.toString() !== startDate?.toString()) {
      setStartDate(initialStartDate || null)
    }
  }, [initialStartDate]);

  useEffect(() => {
    if (initialEndDate?.toString() !== endDate?.toString()) {
      setEndDate(initialEndDate || null)
    }
  }, [initialEndDate]);

  const { x, y, strategy, context, refs } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip({ padding: 8 }),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
        padding: 8,
      }),
      shift({
        limiter: limitShift({
          offset: ({ rects }) => rects.floating.width
        })
      }),
      offset(8)
    ]
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context, {
      enabled: !disabled,
    }),
    useDismiss(context),
  ]);

  const inputValue = () => {
    if (isMultipleSelect) {
      if (startDate && endDate) {
        return format(startDate, DATE_FORMAT_OUTPUT) + ' - ' + format(endDate, DATE_FORMAT_OUTPUT);
      }

      return '';
    }
    if (selectDate) {
      return format(selectDate, DATE_FORMAT_OUTPUT);
    }

    return '';
  }

  return (
    <div className={className}>
      <div ref={refs.setReference} {...getReferenceProps({ className: 'relative' })}>
        <div onClick={(e) => {
          if ((e.target as HTMLElement).tagName !== 'INPUT') {
            // prevent double click from label + input, as label click triggers input click
            e.stopPropagation();
          }
        }}>
          <InputForm
            label={label}
            value={inputValue()}
            placeholder={placeholder}
            disabled={disabled}
            onUpdate={() => {}}
            // suffixComponent={() => <CalendarIcon size={20} fill={'text-deepBlue'}/>}
          />
        </div>
      </div>
      <FloatingPortal>
        {isOpen && (
          <div>
            <FloatingFocusManager context={context}>
              <div
                ref={refs.setFloating}
                {...getFloatingProps({
                  className: 'relative z-[9998] shadow-dialogShadowLarge rounded-medium',
                  style: {
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    overflow: "auto",
                  },
                })}
              >
                <Calendar
                  initialStartDate={startDate || selectDate || initialStartDate}
                  initialEndDate={endDate || initialEndDate}
                  isMultipleSelect={isMultipleSelect}
                  isInputCalendar={true}
                  onBothDatesPrelected={(startDate, endDate) => {
                    if (isMultipleSelect) {
                      setStartDate(startDate)
                      setEndDate(endDate ?? null)
                    }
                    if (!isMultipleSelect && startDate) {
                      setSelectDate(startDate)
                    }
                    setIsOpen(false)
                  }}
                  typeNameMonth={typeNameMonth}
                  minDate={minDate}
                  maxDate={maxDate}
                />
              </div>
            </FloatingFocusManager>
          </div>
        )}
      </FloatingPortal>
    </div>
  )
}

export default InputCalendar
