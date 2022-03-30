import { render, screen } from "@testing-library/react";
import { InputPresenter } from "./presenters/InputPresenter";

test("Should render header", () => {
  render(<InputPresenter />);
  const header = screen.getByText(/Shopping list/i);
  expect(header).toBeInTheDocument();
});

test("Milk & chocolate in shopping list", () => {
  render(<InputPresenter />);
  const elem1 = screen.getByText("Milk");
  const elem2 = screen.getByText("Chocolate");
  expect(elem1).toBeInTheDocument();
  expect(elem2).toBeInTheDocument();
});
