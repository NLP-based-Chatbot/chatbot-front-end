/**
 * @jest-environment jsdom
 */

import { render } from "../../utils/test-utils";
import { screen, waitFor } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import CustomTextArea from "../../components/Chatbot/CustomTextArea";

test("initial render", () => {
  render(<CustomTextArea />);
  screen.debug();
});

test("call the send function with message when user click on the send button", async () => {
  const sendMessage = jest.fn();
  const toggleRecord = jest.fn();
  render(
    <CustomTextArea sendMessage={sendMessage} toggleRecord={toggleRecord} />
  );

  userEvent.type(screen.getByTestId("message"), "test-message");

  userEvent.click(screen.getByTestId("send-btn"));

  await waitFor(() => {
    expect(sendMessage).toHaveBeenCalledWith("test-message");
  });
  //screen.debug();
});

test("toggle voice search when user click voice button", async () => {
  const sendMessage = jest.fn();
  const toggleRecord = jest.fn();
  render(
    <CustomTextArea sendMessage={sendMessage} toggleRecord={toggleRecord} />
  );

  userEvent.click(screen.getByTestId("voice-btn"));
  await waitFor(() => {
    expect(toggleRecord).toHaveBeenCalled();
  });
  //screen.debug();
});

