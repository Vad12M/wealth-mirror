import { InputHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'primary' | 'secondary' | 'primary-dark' | 'transparent'
  prefixBtn?: () => any;
}

export function Button({
  children,
  typeButton = 'primary',
  prefixBtn,
}: IButton) {
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
    <button className={`${typeClassname} ${styles.button}`}>
      {prefixBtn?.()}
      <div>
        {children}
      </div>
    </button>
  )
}
