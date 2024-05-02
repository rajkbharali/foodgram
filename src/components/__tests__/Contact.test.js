import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Group of test cases for Contact Component", () => {
  beforeAll(() => {
    //can pass anything to do before running all the test cases
  });

  beforeEach(() => {
    // can pass anything we want to run before each test case
  });

  afterAll(() => {
    //can pass anything to do after running all the test cases
  });

  afterEach(() => {
    // can pass anything we want to run after each test case
  });

  // to test the function used can be either "test()" or "it()"
  test("Should Check if Contact component is rendered properly", () => {
    render(<Contact />);

    // //Querying
    // const heading = screen.getByRole('heading')
    // //Assertion
    // expect(heading).toBeInTheDocument()

    const allHeadings = screen.getAllByRole("heading"); //returns an array of all headings

    expect(allHeadings.length).toBe(2); //Since we have two headings element in component
  });

  it("Should Check if button loads", () => {
    render(<Contact />);

    // const button = screen.getByRole('button')
    // expect(button ).toBeInTheDocument()

    const buttonText = screen.getByText("Submit");
    expect(buttonText).toBeInTheDocument();
  });

  it("Should check name input placeholder if it loads", () => {
    render(<Contact />);

    const inputPlace = screen.getByPlaceholderText("Name");
    expect(inputPlace).toBeInTheDocument();
  });

  test("Should check if all input are loaded", () => {
    render(<Contact />);

    //Querying
    const allInputs = screen.getAllByRole("textbox");
    //allInputs returns an array of two input react element.

    expect(allInputs.length).toBe(2); //since we have two input element in the component
  });
});
