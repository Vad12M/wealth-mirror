import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { addMonths, format, isEqual, subMonths, } from "date-fns";
import styles from './datePicker.module.css'
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";
import { CalendarProps } from "@/ui/calendar/calendar.props";
import Typography from "@/ui/typography/Typography";

export const Calendar: React.FC<CalendarProps> = ({
  onBothDatesPrelected,
  onMonthChange,
  initialStartDate,
  initialEndDate,
  className,
  isMultipleSelect,
  isInputCalendar,
  typeNameMonth = 'MMMM',
  minDate,
  maxDate,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (isMultipleSelect) {
      if (
        initialStartDate && initialEndDate
        && (!startDate || !isEqual(initialStartDate, startDate))
        && (!endDate || !isEqual(initialStartDate, endDate))
      ) {
        setStartDate(initialStartDate);
        setEndDate(initialEndDate);
      }
    } else {
      if (
        initialStartDate
        && (!startDate || !isEqual(initialStartDate, startDate))
      ) {
        setStartDate(initialStartDate);
      }
    }
  }, [initialStartDate, initialEndDate]);


  const onChange = (dates: (Date | null)[]) => {
    const [start, end] = dates;
    if (isMultipleSelect) {
      if (start !== null || end !== null) {
        if (startDate && start && (start < startDate)) {
          setStartDate(start);
          setEndDate(null);
        } else if (endDate && end && (end > endDate)) {
          setEndDate(end);
        } else {
          setStartDate(start);
          setEndDate(end);
          if (isInputCalendar && end !== null) {
            onBothDatesPrelected?.(start, end);
          }
        }
      }
    } else {
      if (start !== null) {
        setStartDate(start);
        onBothDatesPrelected?.(start);
      }
    }
  }

  const minimumDate = minDate ? minDate : new Date(new Date().getFullYear(), 0, 1);
  !minDate && minimumDate.setFullYear(minimumDate.getFullYear() - 100);

  const renderCustomHeader = (
    monthDate: Date,
  ) => {
    return (
      <div className={`flex justify-between items-center pb-2 px-1.5`}>
        <div className={'flex items-center justify-between w-[210px] bg-calendarGray'}>
          <button
            aria-label={"Previous month"}
            onClick={() => setStartDate(subMonths(startDate || new Date(), 1))}
            className={'p-1.5'}
          >
            <ChevroneLeftIcon/>
          </button>
          <Typography
            text={format(monthDate, typeNameMonth) + ' ' + format(monthDate, 'yyyy')}
            type={'canvasTitle'}
            color="text-white"
          />
          <button
            aria-label={"Next month"}
            onClick={() => setStartDate(addMonths(startDate || new Date(), 1))}
            className={'p-1.5'}
          >
            <ChevroneRightIcon/>
          </button>
        </div>
        {/*<CalendarIcon size={16} fill={'text-deepBlue mr-1.5'}/>*/}
      </div>)
  }

  const datePickerParams = (isMultipleSelect?: boolean) => {
    if (isMultipleSelect) {
      return {
        selected: startDate,
        startDate: startDate,
        endDate: endDate,
      }
    } else {
      return {
        selected: startDate
      }
    }
  }

  return (
    <div className={className}>
      <div
        className={`flex justify-center w-full bg-transparent`}>
        {/*// @ts-ignore*/}
        <DatePicker
          renderCustomHeader={({
            monthDate,
          }) => renderCustomHeader(monthDate)}
          onMonthChange={onMonthChange}
          onChange={onChange}
          maxDate={maxDate}
          minDate={minimumDate}
          useWeekdaysShort={true}
          selectsRange
          inline
          calendarClassName={styles.datePicker}
          {...datePickerParams(isMultipleSelect)}
        />
      </div>
    </div>
  );
}
export default Calendar;
