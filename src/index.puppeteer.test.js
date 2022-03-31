import { render, screen } from "@testing-library/react";
import { InputPresenter } from "./presenters/InputPresenter";
const puppeteer = require("puppeteer");
const URL = "http://localhost:3002/";

describe("First site", () => {
  it(" Milk is in list", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("Milk");
    expect(text).toContain("Chocolate");
  });
});
