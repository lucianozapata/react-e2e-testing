import { render, screen } from "@testing-library/react";
import { InputPresenter } from "./presenters/InputPresenter";
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();

test("Should render header", () => {
  render(<InputPresenter />);
  const header = screen.getByText(/Shopping list/i);
  expect(header).toBeInTheDocument();
});
