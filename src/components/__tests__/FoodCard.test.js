import { render, screen } from "@testing-library/react";
import FoodCard, { highRatedRestaurants } from "../FoodCard";
import MOCK_DATA from "../mocks/foodCardMocks.json";
import "@testing-library/jest-dom";

it("Should render the Food Card component with props data", () => {
  render(<FoodCard reqObj={MOCK_DATA} />);

  const resName = screen.getByText("NIC Ice Creams");

  expect(resName).toBeInTheDocument();
});

it("Should render the higher order component and get the top rated label", () => {
  const HOC = highRatedRestaurants(FoodCard);
  render(<HOC reqObj={MOCK_DATA} />);
  const label = screen.getByText("TOP RATED");
  expect(label).toBeInTheDocument();
});
