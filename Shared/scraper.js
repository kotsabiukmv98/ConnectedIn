const puppeteer = require("puppeteer");

const options = {
  launch: {
    headless: false
  },
  isConnectMode: false,
  connectEndpoint: "wss://chrome.browserless.io/",
  setViewport: { width: 1940, height: 1080 },
  timeout: 120000,
  setCookie: {
    name: "li_at",
    domain: "www.linkedin.com"
  },
  log: message => console.log(message)
};

let browser;

createBrowser = async options => {
  options.setCookie.value = options.cookie || options.setCookie.value;
  options.log("Scraping started...");

  if (options.isConnectMode) {
    return (browser = await puppeteer.connect({
      browserWSEndpoint: options.connectEndpoint
    }));
  } else {
    return await puppeteer.launch(options.launch);
  }
};
const scrape = async options => {
  if (browser === undefined) {
    browser = createBrowser();
    options.log("Browser created...");
  }

  const page = await browser.newPage();
  options.log("New page created...");

  if (!options.launch.headless) {
    await page.setViewport(options.setViewport);
    options.log("Viewport parameters added");
  }

  page.setDefaultTimeout(options.timeout);
  options.log(`Default timeout value ${options.timeout} added...`);

  await page.setCookie(options.setCookie).then(() => {
    options.log("Cookie added...");
  });

  return page;
  //   await page.goto(options.uri, { waitUntil: ["networkidle2"] });

  await browser.close();
  options.log("Browser closed!");
};

module.exports = params => scrape({ ...options, ...params });
