import { Props } from "react-modal";

export interface DialogProps extends Props {
  /**
   * Show the close icon.
   *
   * Default to true.
   */
  showCloseIcon?: boolean;

  /**
   * className for wrapper div inside modal
   */
  className?: string;

  /**
   * className for modal div (parent of div with modal content)
   */
  rootClassName?: string;

  animate?: 'opacity' | 'slideUp' | 'no';

  bottom?: boolean;

  overflowHidden?: boolean;

  sizeScreen?: boolean;
}
