import useBaseLocalValidator from "./useBaseLocalValidator";
import { IContactForm } from "@/interfaces/IContactForm";

const useContactValidator = (formFields: IContactForm) => {
  const baseValidator = useBaseLocalValidator(formFields);

  const validate = () => {
    const errors: any = {};
    if (formFields.email && !baseValidator.isValidEmail(formFields.email)) {
      errors.email = 'Invalid email'
    }

    baseValidator.validateRequiredFields(['email', 'fullName'], errors);
  }

  return {
    ...baseValidator,
    validate,
  }
}

export default useContactValidator;
