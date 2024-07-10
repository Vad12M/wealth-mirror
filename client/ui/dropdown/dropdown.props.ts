import React, { MouseEventHandler } from "react";

export interface DropdownOption<T extends string | number> {
  value: T;
  label: string | number;
}

export default interface DropdownProps<T extends string | number> {
  options: DropdownOption<T>[];
  value?: T;
  label?: string;
  placeholder?: string;
  onSelectItem: T extends string ? (value: string) => void : (value: number) => void;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  textWhite?: boolean;
  validationHint?: string;
  searchPanel?: boolean;
  searchPlaceholder?: string;
  textLabel?: boolean;
  textLabelStyles?: string;
  minWidthList?: number;
  disabledLabel?: boolean;
  onClickClearBtn?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onMouseEnter?: MouseEventHandler<HTMLElement> | undefined;
  onMouseOut?: MouseEventHandler<HTMLElement> | undefined;
  onOpenChange?: (isOpen: boolean) => void;
  sizeInput?: Sizes;
  classList?: string;
}

const sizes = {
  smallest: 'smallest',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export type Sizes = keyof typeof sizes;
