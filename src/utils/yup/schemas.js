import * as yup from "yup";

export const profileSchema = yup
  .object({
    profilePic: yup.string(),
    fullName: yup
      .string()
      .required("Full Name is Required")
      .matches(/^[A-Za-z0-9 ]+$/, "No special characters allowed"),
    mobileNo: yup
      .number()
      .typeError("Only Numbers are allowed")
      .required("Mobile Number is Required"),
    addressLine1: yup
      .string()
      .required("Address Line 1 is Required")
      .matches(/^[A-Za-z0-9 ]+$/, "No special characters allowed"),
    addressLine2: yup.string(),

    city: yup.string().required("City is Required"),
    postalCode: yup.string().required("Postal Code is Required"),
  })
  .required();
