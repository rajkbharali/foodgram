import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );

  //Querying
  //   const loginButton = screen.getByRole("button");

  const loginButton = screen.getByRole("button", { name: "Login" }); // in case of multiple buttons can specify name as parameter

  //   const loginButton = screen.getByText("Login"); // if cant find by role, then only use text

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with Cart size 0", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );

  //   const cartText = screen.getByText("Cart (0)");
  const cartText = screen.getByText(/Cart/); // use regex in case we only want to search for a part of the string or text
  expect(cartText).toBeInTheDocument();
});

it("Should change Login button to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton); //triggers a event click
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
