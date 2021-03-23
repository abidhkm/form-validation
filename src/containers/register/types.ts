export interface IFormInputs {
  firstName: string
  lastName: string
  mobile: string
  email: string
  gender: "m" | "f" | "o" | "",
  dob: Date
}

export interface IFieldProps {
  name: keyof IFormInputs
  label: string
  type: "text" | "radio" | "datepicker"
  placeholder?: string
  required?: boolean
  options?: { value: string, label: string }[]
}

export interface IFieldComponentProps extends IFieldProps {
  control: any
  error?: boolean
  helperText?: string
  ref?: any
}