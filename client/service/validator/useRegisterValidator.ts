import useBaseLocalValidator from "./useBaseLocalValidator";
import { IRegister } from "@/interfaces/IAuth";

const useRegisterValidator = (formFields: IRegister) => {
  const baseValidator = useBaseLocalValidator(formFields);

  const validate = () => {
    const errors: any = {};
    if (formFields.email && !baseValidator.isValidEmail(formFields.email)) {
      errors.email = 'Invalid email'
    }

    if (formFields.password) {
      if (formFields.password.length < 8 || formFields.password.length > 16) {
        errors.password = 'Password must be 8-16 characters long';
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>§?|])/.test(formFields.password)) {
        errors.password = 'Password must include at least 1 number, 1 lowercase letter, 1 uppercase letter, and 1 special character';
      }
    }

    baseValidator.validateRequiredFields(['email', 'password', 'firstName', 'lastName'], errors);
  }

  return {
    ...baseValidator,
    validate,
  }
}

export default useRegisterValidator;
