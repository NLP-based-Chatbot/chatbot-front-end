import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";
import "@babel/polyfill";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AuthReducer from '../store/slices/auth';

const customRender = (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { auth: AuthReducer }, preloadedState }),
    ...renderOptions
  } = {}
) => {
  const AllTheProviders = ({ children }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ParallaxProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>;
          </ParallaxProvider>
        </BrowserRouter>
      </Provider>
    );
  };
  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
