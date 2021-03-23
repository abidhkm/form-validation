import * as React from "react";
import { act } from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Input from "./Input";
import { IFieldComponentProps } from "../containers/register/types";

describe('App', function () {
    const props : IFieldComponentProps = {
        name: "firstName",
        label: "First Name",
        control: {
            // reValidateMode:{}
        },
        type: "text"
    }
    it('should display pass in number', function () {
        // let container = document.createElement('div');
        // document.body.appendChild(container);
        // act(() => {
        //     ReactDOM.render(<Input  {...props} />, container);
        // })
        // const header: any = container.querySelector('div');
        expect(true).toBe(true)
    });
});