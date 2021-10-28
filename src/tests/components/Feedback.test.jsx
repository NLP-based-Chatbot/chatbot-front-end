/**
 * @jest-environment jsdom
 */

import { render } from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Feedback from "../../components/Chatbot/Feedback";
import renderer from "react-test-renderer";

test("initial render", async () => {
  render(<Feedback />);
  screen.debug();
});

test("prompt for feedback when rating is below 3", async () => {
  const handleSubmit = jest.fn();
  render(<Feedback submit={handleSubmit} />);
  userEvent.click(screen.getByTestId("star-1"));
  
  expect(await screen.findByTestId("feedback-form")).toBeInTheDocument()
  //screen.debug()
});

test("submit when rating is above 3", async () => {
  const handleSubmit = jest.fn();
  render(<Feedback submit={(index, feedback) => handleSubmit(index, feedback)} />);
  userEvent.click(screen.getByTestId("star-5"));
  
  await new Promise((r) => setTimeout(r, 1000));
  expect(handleSubmit).toHaveBeenCalledWith(5,'none')
  //screen.debug()
});

test("submit feedback when rating is below 3", async () => {
  const handleSubmit = jest.fn();
  render(<Feedback submit={handleSubmit} />);
  userEvent.click(screen.getByTestId("star-1"));
  
  expect(await screen.findByTestId("feedback-form")).toBeInTheDocument()
  userEvent.type(screen.getByTestId('feedback-text'), 'test feedback')
  userEvent.click(screen.getByTestId('submit-btn'))
  expect(handleSubmit).toHaveBeenCalledWith(1,'test feedback')
  //screen.debug()
});

test("snapshot test", () => {
  const tree = renderer.create(<Feedback />).toJSON();
  expect(tree).toMatchSnapshot();
  //screen.debug();
});