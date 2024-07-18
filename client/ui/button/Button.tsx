import { InputHTMLAttributes, useRef } from 'react'
import styles from './Button.module.scss'
import cx from "classnames";
import { useActiveState } from "@/components/custom-cursor/CustomCursorHighlight";

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'primary' | 'secondary' | 'primary-dark' | 'transparent' | 'white' | 'white-shadow' | 'standard' | 'standard-white';
  prefixBtn?: () => any;
  isGradient?: boolean;
  rounded?: number;
  loading?: boolean;
}

export function Button({
  children,
  typeButton = 'primary',
  prefixBtn,
  rounded,
  isGradient = false,
  loading,
  ...props
}: IButton) {
  const ref = useRef<HTMLButtonElement>(null);
  useActiveState(ref);
  const buttonStyles = cx(`${styles.button}`, {})

  let typeClassname = '';
  switch (typeButton) {
    case 'primary':
      typeClassname = styles.primaryBtn;
      break;
    case 'secondary':
      typeClassname = styles.secondaryBtn;
      break;
    case 'primary-dark':
      typeClassname = styles.primaryDarkBtn;
      break;
    case 'transparent':
      typeClassname = styles.transparentBtn;
      break;
    case 'white':
      typeClassname = styles.whiteBtn;
      break;
    case 'white-shadow':
      typeClassname = styles.whiteShadowBtn;
      break;
    case 'standard':
      typeClassname = styles.standardBtn;
      break;
    case 'standard-white':
      typeClassname = styles.standardWhiteBtn;
      break;
  }

  return (
    <button
      ref={ref}
      onClick={props.onClick}
      className={`${typeClassname} ${buttonStyles} ${props.className}`}
      style={{
        borderRadius: rounded ? `${rounded}px` : '48px',
        background: isGradient ? 'linear-gradient(90deg, #3EDC79 0%, #1E6BEB 100%' : '',
      }}
    >
      {prefixBtn?.()}
      <div>
        {loading ? <div className={styles.loader}/> : children}
      </div>
    </button>
  )
}
