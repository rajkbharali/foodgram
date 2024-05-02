import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantListResponse.json";
import "@testing-library/jest-dom";

/* When testing, code that causes React state updates should be wrapped into act(...):   
act(() => {
  fire events that update state
}) */
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// make a mock function that replicates the fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Body Component with Search Bar and search something", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //   const searchInput = screen.getByPlaceholderText("Search...");
  const searchInput = screen.getByTestId("searchInput"); // add "data-testid" field to an element in the actual component file

  fireEvent.change(searchInput, { target: { value: "nation" } });

  //in case search bar has a search button thrn =>
  //   fireEvent.click(searchButton)

  const cards = screen.getAllByTestId("foodCard");
  expect(cards.length).toBe(2);
});
