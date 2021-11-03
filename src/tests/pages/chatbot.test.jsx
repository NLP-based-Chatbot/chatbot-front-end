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
import Chatbot from "../../components/Chatbot/Chatbot";

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
  rest.get("/assistant/telecom/", (req, res, ctx) => {
    return res(
      ctx.json({
        recipient_id: "Test sender",
        text:"bottest"
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

test("Send message to the server and recives the respond", async () => {
  render(<Chatbot />);

  userEvent.type(screen.getByTestId("message"), "Test message send by user");
  userEvent.click(screen.getByTestId("send-btn"));
  expect(await screen.findByText(/Test message send by user/i)).toBeInTheDocument();
  //expect(await screen.findByText(/bottest/i)).toBeInTheDocument();
 
  screen.debug()

});
