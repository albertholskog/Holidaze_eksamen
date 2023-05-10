import * as yup from "yup";

export const schemaRegister = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z0-9_]+$/, " Only underscore is allowed "),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
      "Invalid email format need to be @stud.noroff.no"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  avatar: yup
    .string()
    .required("Avatar is required")
    .url("Avatar must be a valid URL"),
});

export const schemaLogin = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
      "Invalid email format need to be @stud.noroff.no"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const schemaUpdateProfilePhoto = yup.object({
  avatar: yup
    .string()
    .url("Please enter a valid URL")
    .required("URL is required"),
});

export const schemaAddVenue = yup.object({
  name: yup.string("test").required(""),
  description: yup.string().required(""),

  price: yup.number(),
  maxGuests: yup.number(),
  address: yup.string(),
  city: yup.string(),
  country: yup.string(),
});
export const schemaUpdateVenue = yup.object({
  name: yup.string("test").required(""),
});
