import { Dispatch, useState } from "react";
import { EMAIL_REGEXP } from "./config";

export const GLOBAL_ERROR_KEY = '_global';
export const isValidEmail = (email: string): boolean => EMAIL_REGEXP.test(email);

const useBaseLocalValidator = <T>(formFields: T) => {
  type TValidationField = keyof T;
  const [invalidFields, setInvalidFields]: [any, Dispatch<any>] = useState({});

  const validateRequiredFields = (fields: TValidationField[], otherErrors: any = {}) => {
    const validatedFields: any = {};
    fields.forEach((field) => {
      if (otherErrors && otherErrors[field]) {
        validatedFields[field] = otherErrors[field];

      } else {
        validatedFields[field] = !formFields[field] && (
          formFields[field] === undefined || formFields[field] === 0 || `${formFields[field]}`.length === 0
          || formFields[field] === false || formFields[field] === null
        )
          ? 'Required field'
          : undefined;
      }
    });
    updateInvalidFields(validatedFields);
  }

  const updateInvalidFields = (fields: any) => {
    setInvalidFields((prevState: any) => ({
      ...prevState,
      ...fields,
    }));

    // scheduleUpdatePopups invalid fields itself, to make sure is valid reflecting state changes
    Object.keys(fields).forEach((key) => {
      invalidFields[key] = fields[key];
    });
  };

  const clear = (keys?: TValidationField[], withGlobal = true) => {
    if (!keys || !keys.length) {
      setInvalidFields({});
      return;
    }
    const newInvalidFields = { ...invalidFields };
    keys.forEach((key) => delete newInvalidFields[key]);
    if (withGlobal) {
      delete newInvalidFields[GLOBAL_ERROR_KEY];
    }
    setInvalidFields(newInvalidFields);
  };

  const getFieldError = (fieldName: TValidationField | typeof GLOBAL_ERROR_KEY): string => invalidFields[fieldName] || '';

  return {
    updateInvalidFields,
    validateRequiredFields,
    setInvalidFields,
    invalidFields,
    clear,
    isFormInvalid: (): boolean => (Object.keys(invalidFields).filter((key: any) => !!invalidFields[key]).length > 0),
    isFieldInvalid: (fieldName: TValidationField): boolean => (!!invalidFields[fieldName]),
    getFieldError,
    getGlobalError: (): string => getFieldError(GLOBAL_ERROR_KEY),
    isValidEmail,
  }
}

export default useBaseLocalValidator;
