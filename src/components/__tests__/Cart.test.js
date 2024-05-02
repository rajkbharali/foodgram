import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/RestaurantMenu.json";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the menu of restaurant and add items to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("New Thin n Crispy Pizzas (6)");
  fireEvent.click(accordianHeader);
  const addButton = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addButton[0]);
  //   fireEvent.click(addButton[1]);
  const cartButton = screen.getByText("Cart (1)");
  fireEvent.click(cartButton);
  const cartItems = screen.getAllByTestId("cartItem");
  expect(cartItems.length).toBe(1);
});
