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
  avatar: yup.string().url("Avatar must be a valid URL"),
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
  name: yup.string().trim().max(100).required("Name is required"),
  description: yup.string().trim().max(250).required("Description is required"),
  price: yup
    .number()
    .min(1)
    .typeError("Price needs to be a number")
    .required("Price is required"),
  maxGuests: yup
    .number()
    .min(1)
    .typeError("Max guests needs to be a number")
    .required("Max guests is required"),
  address: yup.string().trim().max(100).required("Address is required"),
  city: yup.string().trim().max(100).required("City is required"),
  country: yup.string().trim().max(50).required("Country is required"),
  media0: yup
    .string()
    .trim()
    .url("Need to be a valid URL")
    .required("Need one photo"),
  media1: yup.string().trim().url("Need to be a valid URL").notRequired(),
  media2: yup.string().trim().url("Need to be a valid URL").notRequired(),
});

export const schemaUpdateVenue = yup.object().shape({
  name: yup.string().trim().max(100).optional(),
  description: yup.string().trim().max(250).optional(),
  price: yup
    .number()
    .nullable()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return null;
      }
      return value;
    })
    .typeError("Price must be a number.")
    .min(0)
    .optional(),
  maxGuests: yup
    .number()
    .nullable()
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return null;
      }
      return value;
    })
    .typeError("Max guests must be a number.")
    .integer()
    .min(1)
    .optional(),
  wifi: yup.boolean().optional(),
  parking: yup.boolean().optional(),
  breakfast: yup.boolean().optional(),
  pets: yup.boolean().optional(),
  address: yup.string().trim().max(100).optional(),
  city: yup.string().trim().max(100).optional(),
  country: yup.string().trim().max(50).optional(),
  media0: yup.string().trim().url("Need to be a valid URL").optional(),
  media1: yup.string().trim().url("Need to be a valid URL").optional(),
  media2: yup.string().trim().url("Need to be a valid URL").optional(),
});
