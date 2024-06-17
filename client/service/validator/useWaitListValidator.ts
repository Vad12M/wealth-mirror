import useBaseLocalValidator from "./useBaseLocalValidator";
import { IWaitUser } from "@/interfaces/IWaitUser";

const useWaitlistValidator = (formFields: IWaitUser) => {
  const baseValidator = useBaseLocalValidator(formFields);

  const validate = () => {
    const errors: any = {};
    if (formFields.email && !baseValidator.isValidEmail(formFields.email)) {
      errors.email = 'Invalid email'
    }

    baseValidator.validateRequiredFields(['email', 'name'], errors);
  }

  return {
    ...baseValidator,
    validate,
  }
}

export default useWaitlistValidator;
