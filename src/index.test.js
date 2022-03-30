import { render, screen } from "@testing-library/react";
import { InputPresenter } from "./presenters/InputPresenter";

test("Should render header", () => {
  render(<InputPresenter />);
  const header = screen.getByText(/Shopping list/i);
  expect(header).toBeInTheDocument();
});
