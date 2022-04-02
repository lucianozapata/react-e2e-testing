const puppeteer = require("puppeteer");
const URL = "http://localhost:3000/";

describe("First site", () => {
  test("Milk is in list", async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const text = await page.evaluate(() => document.body.textContent);
    await browser.close();
    await text.close();
    await page.close();
    expect(text).toContain("Milk");
    expect(text).toContain("Chocolate");
  }, 40000);

  test("Add an element in shopping List", async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.goto(URL, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("input[name=inputDiv]");
    await page.type("#katacodaid", "Eggs");
    await page.click("#clickbutton");

    const text = await page.evaluate(() => document.body.textContent);

    expect(text).toContain("Eggs");
    await browser.close();
  }, 40000);
});
