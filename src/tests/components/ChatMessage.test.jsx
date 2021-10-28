/**
 * @jest-environment jsdom
 */

import { render } from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import ChatMessage from "../../components/Chatbot/ChatMessage";

test("initial render", async () => {
  render(<ChatMessage />);
  screen.debug();
});

test("Display the message send by user", async () => {
  render(<ChatMessage sender="user" message="test message by user" />);
  expect(screen.getByTestId("user")).toBeInTheDocument();
  expect(screen.getByText("test message by user")).toBeInTheDocument();
  //screen.debug();
});

test("Display the message send by bot", async () => {
  render(<ChatMessage sender="bot" message="test message by bot" />);
  expect(screen.getByTestId("bot")).toBeInTheDocument();
  expect(screen.getByText("test message by bot")).toBeInTheDocument();
  //screen.debug();
});

test("snapshot test", async () => {
  const tree = renderer.create(<ChatMessage />).toJSON();
  expect(tree).toMatchSnapshot();
  //screen.debug();
});
