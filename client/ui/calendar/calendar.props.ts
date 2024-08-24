import React from "react"

export interface CalendarProps {
  onBothDatesPrelected?: (startDate: Date | null, endDate?: Date | null) => void;
  initialStartDate?: Date;
  initialEndDate?: Date;
  onMonthChange?: (date: Date) => void;
  className?: string;
  isMultipleSelect?: boolean;
  isInputCalendar?: boolean;
  dropdownRef?: React.Ref<HTMLDivElement>;
  typeNameMonth?: 'MMM' | 'MMMM';
  minDate?: Date;
  maxDate?: Date;
}
