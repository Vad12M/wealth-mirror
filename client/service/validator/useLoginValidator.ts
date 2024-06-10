import useBaseLocalValidator from "./useBaseLocalValidator";
import { ILogin } from "@/interfaces/IAuth";

const useLoginValidator = (formFields: ILogin) => {
  const baseValidator = useBaseLocalValidator(formFields);

  const validate = () => {
    const errors: any = {};
    if (formFields.email && !baseValidator.isValidEmail(formFields.email)) {
      errors.email = 'Invalid email'
    }

    if (formFields.password && formFields.password?.length < 4) {
      errors.password = 'Invalid password'
    }

    baseValidator.validateRequiredFields(['email', 'password'], errors);
  }

  return {
    ...baseValidator,
    validate,
  }
}

export default useLoginValidator;
