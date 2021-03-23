import * as yup from "yup";
import { RegEx } from "../../utils/regularExpression";
import { IFieldProps } from "./types";

export const fields: IFieldProps[] = [{
    label: "First Name",
    name: "firstName",
    type: "text",
    required: true,
}, {
    label: "Last Name",
    name: "lastName",
    type: "text",
    required: false,
}, {
    label: "Mobile Number",
    name: "mobile",
    type: "text",
    placeholder:"9715 - - - - - - - -",
    required: true,
},
{
    label: "Email",
    name: "email",
    type: "text",
    required: true,
},
{
    label: "Gender",
    name: "gender",
    type: "radio",
    required: true,
    options: [{ label: "Male", value: "m" }, { label: "Female", value: "f" }, { label: "Other", value: "o" }],
},
{
    label: "Date of birth",
    name: "dob",
    type: "datepicker",
    required: true,
}
]


export const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field")
        .min(4, "Minimum length must be 4")
        .max(15, "Maximum length must be 15"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name must not contain numbers"),
    mobile: yup
        .string()
        .required('Mobile is a required field')
        .matches(
            RegEx.UAE_NUMBER,
            'Invalid format',
        ),
    email: yup
        .string()
        .email("Email must have correct format")
        .required("Email is a required field"),
    gender: yup
        .string()
        .required("Gender is a required field"),
    dob: yup
        .string()
        .required("Date of birth is a required field"),
});