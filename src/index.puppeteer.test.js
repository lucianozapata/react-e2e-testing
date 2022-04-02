const puppeteer = require("puppeteer");
const URL = "http://localhost:3000/";

describe("First site", () => {
  it(" Milk is in list", async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain("Milk");
    expect(text).toContain("Chocolate");
    await browser.close();
  }, 10000);

  it("Add an element in shopping List", async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 200,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    page.goto(URL, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("input[name=inputDiv]");
    await page.type("#katacodaid", "Eggs");
    await page.click("#clickbutton");

    const text = await page.evaluate(() => document.body.textContent);

    expect(text).toContain("Eggs");
    await browser.close();
  }, 10000);
});
