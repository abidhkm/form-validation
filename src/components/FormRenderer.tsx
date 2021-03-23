import React from "react";
import { forwardRef } from "react"
import { IFieldComponentProps } from "../containers/register/types"
import DatePicker from "./DatePicker"
import Input from "./Input"
import PrimaryRadio from "./Radio"

const FormRenderer = (props: IFieldComponentProps, ref: any) => {

    const { type, ...rest } = props

    const renderComponent = () => {
        switch (type) {

            case "text":
                return <Input
                    ref={ref}
                    type={type}
                    {...rest}
                />

            case "radio":
                return <PrimaryRadio
                    ref={ref}
                    type={type}
                    {...rest}
                />

            case "datepicker":
                return <DatePicker
                    ref={ref}
                    type={type}
                    {...rest}
                />

            default:
                return <Input
                    type={type}
                    {...rest}
                />
        }
    }


    return renderComponent()
}

export default forwardRef(FormRenderer);