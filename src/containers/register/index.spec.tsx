import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Register from "./index";

const mockControl = {};
const mockErrors = { firstName: "" };
const mockHandleSubmit = jest.fn();

jest.mock("react-hook-form", () => ({
    useForm: jest.fn(() => ({
        control: mockControl,
        errors: mockErrors,
        handleSubmit: mockHandleSubmit
    }))
}))

jest.mock("@hookform/resolvers/yup", () => ({
    yupResolver: jest.fn(),
}))

jest.mock("./registrationUtils", () => ({
    fields: [{
        label: "First Name",
        name: "firstName",
        type: "text",
        required: true,
    }]
}))

jest.mock('../../components/FormRenderer', () => {
    const ComponentToMock = () => <div> FormRenderer</div>;
    return ComponentToMock;
});

test('renders header', () => {
    render(<Register />);
    const headerElement = screen.getByText(/Register/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders Submit button', () => {
    render(<Register />);
    const submitBtn: any = screen.getByText(/Submit/i);
    expect(submitBtn).toBeInTheDocument();
});

test('renders FormRenderer', () => {
    render(<Register />);
    const FormRenderer: any = screen.getByText(/FormRenderer/i);
    expect(FormRenderer).toBeInTheDocument();
});

test('mockHandleSubmit has been called on click of submit button', () => {
    render(<Register />);
    const submitBtn: any = screen.getByRole("button");
    fireEvent.click(submitBtn)
    expect(mockHandleSubmit).toHaveBeenCalled()
});