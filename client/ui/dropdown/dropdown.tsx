'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.css';
import cx from "classnames";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead
} from "@floating-ui/react";
import { limitShift, shift } from '@floating-ui/dom';
import DropdownProps from "@/ui/dropdown/dropdown.props";
import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const getLabelHighlighted = (label: string | number, aheadText: string) => {
  if (!aheadText) {
    return label;
  }
  const text = `${label}`;

  return text.toLowerCase().startsWith(aheadText.toLowerCase())
    ? [(<u key="1">{text.substring(0, aheadText.length)}</u>), text.substring(aheadText.length)]
    : label;
}

function Dropdown(props: DropdownProps<string>): JSX.Element;
function Dropdown(props: DropdownProps<number>): JSX.Element;

function Dropdown({
  options,
  value,
  label,
  placeholder,
  onSelectItem,
  className,
  classList,
  textWhite = false,
  invalid = false,
  validationHint,
  required,
  disabled,
  searchPanel = false,
  searchPlaceholder,
  textLabel = false,
  textLabelStyles,
  minWidthList,
  disabledLabel = false,
  onClickClearBtn,
  onOpenChange,
  onMouseEnter,
  onMouseOut,
  sizeInput = 'large'
}: DropdownProps<string | number>) {

  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const listContentRef = useRef<string[]>(options.map(option => '' + option.label));

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(
    Math.max(0, options.findIndex((el) => el.value === value))
  );
  useEffect(() => {
    const index = options.findIndex((el) => el.value === value);
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  }, [options.map(o => o.value).join(','), value]);

  const [controlledScrolling, setControlledScrolling] = useState(false);
  const [aheadText, setAheadText] = useState<string>('');
  const prevActiveIndex = usePrevious<number | null>(activeIndex);

  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const filteredData = !searchText || !searchPanel ? options : options.filter((el) => {
    return el.value && `${el.value}${el.label}`.toLowerCase().includes(searchText)
  })

  const setIsOpenIfNotDisabled = (val: boolean) => {
    if (!disabled) {
      setIsOpen(val);
      onOpenChange?.(val);
    }
  }
  const { x, y, strategy, context, refs, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpenIfNotDisabled,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip({ padding: 8 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight > 400 ? 400 : availableHeight}px`,
            minWidth: `${minWidthList}px`
          });
        },
        padding: 8,
      }),
      shift({
        limiter: limitShift({
          offset: ({ rects }) => rects.floating.width
        })
      })
    ]
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context, { role: "listbox" }),
    useListNavigation(context, {
      listRef: listItemsRef,
      activeIndex,
      selectedIndex,
      onNavigate: setActiveIndex
    }),
    useTypeahead(context, {
      findMatch: (list, typedString) => {
        if (searchPanel) {
          return null;
        }
        const found = list.find((itemString) => itemString?.toLowerCase().indexOf(typedString) === 0);
        setAheadText(found ? typedString : '');
        return found;
      },
      listRef: listContentRef,
      onMatch: isOpen ? setActiveIndex : setSelectedIndex,
      activeIndex,
      selectedIndex
    }),
  ]);

  // Scroll the active or selected item into view when in `controlledScrolling`
  // mode (i.e. arrow key nav).
  useEffect(() => {
    const floating = refs.floating.current;
    if (isOpen && controlledScrolling && floating) {
      const item = activeIndex != null
        ? listItemsRef.current[activeIndex]
        : (selectedIndex != null ? listItemsRef.current[selectedIndex] : null);

      if (item && prevActiveIndex != null) {
        const itemHeight = listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;
        const bottom = item.offsetTop + itemHeight;

        if (item.offsetTop < floating.scrollTop) {
          floating.scrollTop -= floating.scrollTop - item.offsetTop + 5;
        } else if (bottom > floating.offsetHeight + floating.scrollTop) {
          floating.scrollTop += bottom - floating.offsetHeight - floating.scrollTop + 5;
        }
      }
    }
  }, [isOpen, controlledScrolling, prevActiveIndex, activeIndex, refs.floating, selectedIndex]);

  // Sync the height and the scrollTop values
  useEffect(() => {
    const floating = refs.floating.current;
    if (isOpen && floating && floating.offsetHeight < floating.scrollHeight) {
      const item = listItemsRef.current[selectedIndex];
      if (item) {
        floating.scrollTop = item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2;
      }
    }
    // Always re-run this effect when the position has been computed so the
    // .scrollTop change works with fresh sizing.
  }, [isOpen, selectedIndex, refs.floating, refs.reference, middlewareData]);

  // we need this to underline what's typed by the user
  useEffect(() => {
    let timer = setTimeout(() => aheadText && setAheadText(''), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  const handleOptionClick = (value: string | number, index: number) => {
    // @ts-ignore
    onSelectItem(value);

    setIsOpenIfNotDisabled(false);
    setSelectedIndex(index);
  }

  const labelStyles = cx('uppercase whitespace-nowrap', {
    [styles.requiredLabel]: required,
  });

  const labelStylesDisabled = cx('uppercase mb-2 whitespace-nowrap', {
    [styles.requiredLabelActive]: (isOpen || invalid) && disabledLabel && required,
    [styles.requiredLabelDisabled]: (!isOpen && !invalid) && disabledLabel && required,
  });

  const inputValue = value !== undefined && value !== null
    ? options.find(option => option.value === value)?.label || value
    : value;

  return (
    <div className={`relative ${className || ''}`} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      <label>
        {label &&
          <div className={`flex justify-between items-center mb-2 ${onClickClearBtn  && 'pr-8'}`}>
            {/*<Typography*/}
            {/*  textType={labelTextType || 'over2M'}*/}
            {/*  text={label}*/}
            {/*  className={`${disabledLabel ? labelStylesDisabled : labelStyles} truncate w-full`}/>*/}
          </div>}
        <div ref={refs.setReference} {...getReferenceProps({
          className: `relative ${textLabel ? `group ${styles.textLabel} ${styles[`${sizeInput}Size`]}` : ''}`
        })}>
          {!textLabel ? <input
              className={`${textWhite ? 'text-white' : ''} ${styles.dropdownInput} ${isOpen ? 'border-mediumPurple' : 'border-neutralGray'} ${invalid ?
                styles.invalidInput : ''} ${disabledLabel && (isOpen || invalid) && styles.requiredLabelDisabledBorder} ${styles[`${sizeInput}Size`]}`}
              type="text"
              aria-autocomplete={'list'}
              value={inputValue !== undefined ? inputValue as string : ''}
              placeholder={placeholder || '-'}
              readOnly
              disabled={disabled}
              onClick={() => setIsOpenIfNotDisabled(!isOpen)}
            /> :
            <button className={'pl-3 pr-8 z-10'}>
              {/*<Typography te="bod" text={inputValue !== undefined ? inputValue as string : ''}/>*/}
            </button>}
          {!disabled &&
            <div className={`${textLabel ? styles.textLabelChevron : styles.dropdownChevron} ${styles[`${sizeInput}Size`]}`}>
              {/*{isOpen ?*/}
              {/*  <ArrowUpIcon small={true}/> :*/}
              {/*  <ArrowDownIcon small={true}/>*/}
              {/*}*/}
            </div>}
        </div>
      </label>
      {/*{invalid && validationHint && (*/}
      {/*  <ValidationHint validationHint={validationHint} showIcon={false} className="pt-1.5"/>*/}
      {/*)}*/}

      <FloatingPortal>
        {isOpen && (
          <FloatingFocusManager context={context}>
            <ul
              ref={refs.setFloating}
              {...getFloatingProps({
                className: `${searchPanel ? styles.searchPanel : styles.dropdownPanel} ${classList}`,
                style: {
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  overflow: "auto",
                },
                onPointerEnter: () => setControlledScrolling(false),
                onPointerMove: () => setControlledScrolling(false),
                onKeyDown: () => setControlledScrolling(true),
              })}
            >
              {searchPanel &&
                <div className={'w-full flex justify-center'}>
                  <Input
                    className={'mx-4 my-4 w-full'}
                    placeholder={searchPlaceholder}
                    onUpdate={handleChange}
                    value={searchText}
                  />
                </div>}
              {options && (searchPanel ? filteredData : options).map((option, i) => (
                <li
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                  role="option"
                  // ref={(node) => (listItemsRef.current[i] = node)}
                  tabIndex={activeIndex === i ? 0 : 1}
                  // activeIndex === index prevents VoiceOver stuttering.
                  aria-selected={activeIndex === i && selectedIndex === i}
                  data-selected={selectedIndex === i}
                  {...getItemProps({
                    onClick: () => handleOptionClick(option.value as string, i),
                    onKeyDown: (event: React.KeyboardEvent) => {
                      if (event.key === "Enter" || (event.key === " " && !context.dataRef.current.typing)) {
                        event.preventDefault();
                        handleOptionClick(option.value as string, i);
                      }
                    }
                  })}
                  className={styles.dropdownOption + ' ' + (selectedIndex === i ? ' font-semibold' : '') + ' ' +
                    ((option.label === 'Unassign' && selectedIndex !== i ) ? ' italic text-blackGray font-normal' : '')}
                  key={option.value + 'i'}
                >{
                  aheadText && activeIndex === i
                    ? getLabelHighlighted(option.label, aheadText)
                    : option.label
                }</li>
              ))}
            </ul>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </div>
  )
}

export default Dropdown;
