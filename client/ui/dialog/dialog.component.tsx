import React from 'react';
import { DialogProps } from './dialog.props';
import styles from './dialog.module.css';
import Modal from 'react-modal';

Modal.setAppElement('body');

export const Dialog: React.FC<DialogProps> = ({
  showCloseIcon = true,
  className = 'py-16 px-2',
  rootClassName = '',
  animate = 'slideUp',
  bottom,
  overflowHidden = false,
  sizeScreen = false,

  ...props
}) => {
  const ua = typeof navigator !== 'undefined' && navigator.userAgent;
  const blockScroll = !ua || (!/iP(ad|od|hone)/i.test(ua) && !ua.includes('Android'));

  return (
    <Modal
      preventScroll={blockScroll}
      className={styles.modalContainer + rootClassName}
      overlayClassName={styles.overlayStyles + (animate ? ' animate-' + animate : '') +
        (bottom ? ' items-end' : ' items-center')}
      closeTimeoutMS={150}
      {...props}
      parentSelector={() => document.getElementById("app-root")!}
    >
      {/*{showCloseIcon &&*/}
      {/*  <button onClick={props.onRequestClose} className={sizeScreen ? styles.closeButtonScreen : styles.closeButton}*/}
      {/*          aria-label={'close modal'}>*/}
      {/*    <CloseIcon size={40} fill={'md:text-white'}/>*/}
      {/*  </button>}*/}
      <div className={`overflow-y-auto ${sizeScreen ? styles.modalContentScreen : styles.modalContent} ${className}
      ${overflowHidden ? 'md:overflow-y-hidden' : ''}`}>
        {props.children}
      </div>
    </Modal>
  );
};

export default Dialog;
