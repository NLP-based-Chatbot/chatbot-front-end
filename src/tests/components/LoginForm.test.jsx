/**
 * @jest-environment jsdom
 */

import { render } from "../../utils/test-utils";
import { screen, waitFor } from "@testing-library/react";
import React from 'react'
import LoginForm from "../../components/Forms/LoginForm";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';

test("initial render", async ()=>{
    render(<LoginForm/>);
    screen.debug()
})

test("rendering and submitting a basic Formik form", async ()=>{
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />);
    userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
    userEvent.type(screen.getByTestId("password"), 'test1234')

    userEvent.click(screen.getByRole('button', {name: /login/i}))

    await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalled()
  })
    //screen.debug()
})

test("shows error message If email not entered", async ()=>{
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />);
    userEvent.type(screen.getByTestId("password"), 'test1234')

    userEvent.click(screen.getByRole('button', {name: /login/i}))

    await waitFor(() => {
        expect(screen.getByTestId("err-email")).toHaveTextContent("Required Field")
      })
    //screen.debug()
})

test("shows error message If password not entered", async ()=>{
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />);
    userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'test@gmail.com')
     
    userEvent.click(screen.getByRole('button', {name: /login/i}))

    await waitFor(() => {
        expect(screen.getByTestId("err-pwd")).toHaveTextContent("Required Field")
      })
    //screen.debug()
})

test("shows error message If email not in proper format", async ()=>{
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />);
    userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'testgmailcom')
    userEvent.type(screen.getByTestId("password"), 'test1234')

    userEvent.click(screen.getByRole('button', {name: /login/i}))

    await waitFor(() => {
        expect(screen.getByTestId("err-email")).toHaveTextContent("Invalid Type")
      })
    //screen.debug()
})

test("shows error message If the password not have at least 6 charactors", async ()=>{
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />);
    userEvent.type(screen.getByRole('textbox', { name: /email address/i}), 'testgmailcom')
    userEvent.type(screen.getByTestId("password"), 'test')

    userEvent.click(screen.getByRole('button', {name: /login/i}))

    await waitFor(() => {
        expect(screen.getByTestId("err-pwd")).toHaveTextContent("Minimum of 6 Characters Needed")
      })
    //screen.debug()
})

