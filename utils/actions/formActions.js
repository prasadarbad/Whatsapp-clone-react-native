import { validateEmail,validatePassword,validateString } from "../validationConstraints";
export const validateInput=(inputId,inputValue)=>{
    if (inputId === "firstName" || inputId === "lastName") {
        return validateString(inputId,inputValue)
      } else if (inputId === "email" ||inputId === "emailId") {
          return validateEmail(inputId,inputValue)
      } else if (inputId === "password"||inputId === "passwordId") {
      }  return validatePassword(inputId,inputValue)
}