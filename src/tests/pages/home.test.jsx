/**
 * @jest-environment jsdom
 */

import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import { render } from "../../utils/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AppRouter from "../../router";

export const handlers = [
  rest.post("/auth/jwt/create/", (req, res, ctx) => {
    return res(
      ctx.json({
        access: "asasdsda",
        refresh: "sadasdsadsa",
      }),
      ctx.delay(150)
    );
  }),
  rest.get("/auth/users/me", (req, res, ctx) => {
    return res(
      ctx.json({
        id: 2,
        email: "test@gmail.com",
        first_name: "chandima",
        last_name: "amarasena",
        last_login: "2021-10-23T18:29:10.975190Z",
        user_created: "2021-10-13T18:45:48.186034Z",
        is_staff: false,
        is_superuser: false,
        is_active: true,
      }),
      ctx.delay(150)
    );
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a user after clicking the fetch user button", async () => {
  render(<AppRouter />);

  // should show no user initially, and not be fetching a user
  userEvent.type(screen.getByRole('textbox', { name: /email address/i }), "test@gmail.com")
  userEvent.type(screen.getByTestId("password"), 'test1234')
  
  userEvent.click(screen.getByRole('button', {name: /login/i}))
  
 
  expect(await screen.findByText(/chandima/i)).toBeInTheDocument();

});
