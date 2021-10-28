/**
 * @jest-environment jsdom
 */

import { render } from "../../utils/test-utils";
import { screen, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import CountBox from "../../components/CountBox";
import userEvent from "@testing-library/user-event";

test("initial render", async () => {
  render(<CountBox />);
  screen.debug();
});

test("Display values for title, subtitle and count", async () => {
  const ChangeGraph = jest.fn();
  render(<CountBox title="test-title" subtitle="test-subtitle" count='20' changeGraph={ChangeGraph} disableGraph={false} />);
  expect(screen.getByTestId("title")).toHaveTextContent("test-title");
  expect(screen.getByTestId("subtitle")).toHaveTextContent("test-subtitle");
  expect(screen.getByTestId("count")).toHaveTextContent("20");
  expect(screen.getByTestId("grp-btn")).toBeInTheDocument();
  userEvent.click(screen.getByTestId("grp-btn"));
  await waitFor(() => {
    expect(ChangeGraph).toHaveBeenCalled()
  })
  //screen.debug();
});

test("snapshot test", async () => {
    const tree = renderer.create(<CountBox />).toJSON();
    expect(tree).toMatchSnapshot();
    //screen.debug();
  });
