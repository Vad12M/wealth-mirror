import styles from "./input.module.css";
import cx from 'classnames';

export interface InputProps {
  placeholder?: string;
  value?: string | number;
  onUpdate?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suffixComponent?: () => any;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  type?: string;
}

export default function Input({
  placeholder,
  value,
  onUpdate,
  className,
  disabled,
  required,
  invalid,
  type,
  suffixComponent,
}: InputProps) {

  const renderSuffix = Boolean(suffixComponent) && (
    <span className={styles.suffix}>{suffixComponent?.()}</span>
  );

  const inputStyles = cx(`${styles.inputContainer}`, {
    [styles.suffixInput]: Boolean(suffixComponent),
    // [styles.prefixInput]: Boolean(prefixComponent),
    [styles.invalid]: invalid,
    [styles.required]: required,
  })


  return <div className={`flex flex-col space-y-1 ${className} ${disabled && 'opacity-60'}`}>
    <div className={'relative'}>
      <div className="relative">
        <input
          value={value}
          onChange={onUpdate}
          placeholder={placeholder}
          disabled={disabled}
          onClick={(e) => e.preventDefault()}
          className={inputStyles}
          type={type || 'text'}
        />
        {renderSuffix}
      </div>
    </div>
  </div>
}
