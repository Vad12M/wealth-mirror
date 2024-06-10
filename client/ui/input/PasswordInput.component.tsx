import React, { useState } from 'react';
import Input, { InputProps } from "@/ui/input/input";

export const PasswordInput: React.FC<InputProps> = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const toggleShow = () => setPasswordShown(!passwordShown);
  return (
    <Input
      type={passwordShown ? 'text' : 'password'}
      suffixComponent={() => (
        <button
          className={'inline-block -mt-1.5'}
          onClick={toggleShow}
          type="button"
        >
          {/*<EyesIcon notShow={passwordShown} size={20} fill={'text-silver'}/>*/}
        </button>
      )}
      {...props}
    />
  );
};

export default PasswordInput;
