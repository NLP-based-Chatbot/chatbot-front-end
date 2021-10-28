/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

import AppRouter from "../../router";
import { render } from "../../utils/test-utils";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <AppRouter />
      </Router>

  );

  expect(screen.getByText(/User Login/i)).toBeInTheDocument();
  //Go to the home page
  history.push("/home");
  expect(screen.getByText(/your personal assistant/i)).toBeInTheDocument();

  //Got to the product page
  userEvent.click(screen.getByText(/product/i));
  expect(screen.getByText(/Built with modern NLP techniques/i)).toBeInTheDocument();

  //Got to the about us page
  userEvent.click(screen.getByText(/about us/i));
  expect(screen.getByText(/This is our story/i)).toBeInTheDocument();

  //Got to the about us page
  userEvent.click(screen.getByText(/contact/i));
  expect(screen.getByText(/We'd love to hear from you/i)).toBeInTheDocument();
});

// test('landing on a bad page', () => {
//   const history = createMemoryHistory()
//   history.push('/some/bad/route')
//   render(
//     <Router history={history}>
//       <AppRouter />
//     </Router>,
//   )

//   expect(screen.getByText(/no match/i)).toBeInTheDocument()
// })
