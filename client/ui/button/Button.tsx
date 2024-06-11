import { InputHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import cx from "classnames";

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'primary' | 'secondary' | 'primary-dark' | 'transparent'
  prefixBtn?: () => any;
  rounded?: number;
}

export function Button({
  children,
  typeButton = 'primary',
  prefixBtn,
  rounded,
  ...props
}: IButton) {

  const buttonStyles = cx(`${styles.button}`, {
  })

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
  }

  return (
    <button
      onClick={props.onClick}
      className={`${typeClassname} ${buttonStyles} ${props.className}`}
      style={{ borderRadius: rounded ? `${rounded}px` : '48px'}}
    >
      {prefixBtn?.()}
        <div>
          {children}
        </div>
    </button>
  )
}
