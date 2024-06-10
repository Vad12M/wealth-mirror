import useBaseLocalValidator from "./useBaseLocalValidator";
import { IRegister } from "@/interfaces/IAuth";

const useRegisterValidator = (formFields: IRegister) => {
  const baseValidator = useBaseLocalValidator(formFields);

  const validate = () => {
    const errors: any = {};
    if (formFields.email && !baseValidator.isValidEmail(formFields.email)) {
      errors.email = 'Invalid email'
    }

    if (formFields.password && formFields.password?.length < 4) {
      errors.password = 'Invalid password'
    }

    baseValidator.validateRequiredFields(['email', 'password', 'firstName', 'lastName'], errors);
  }

  return {
    ...baseValidator,
    validate,
  }
}

export default useRegisterValidator;
