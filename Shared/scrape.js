const puppeteer = require("puppeteer");

class Scrape {
  constructor(config) {
    this.browser = undefined;
    this.options = {
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
      log: message => console.log(message),
      ...config
    };
  }

  async createBrowser() {
    this.options.setCookie.value =
      this.options.cookie || this.options.setCookie.value;
    this.options.log("Scraping started...");

    if (this.options.isConnectMode) {
      this.browser = await puppeteer.connect({
        browserWSEndpoint: this.options.connectEndpoint
      });
    } else {
      this.browser = await puppeteer.launch(this.options.launch);
    }
    this.options.log("Browser was created...");
  }

  async closeBrowser() {
    await this.browser.close();
    this.options.log("Browser was closed.");
  }
  async createPage() {
    const page = await this.browser.newPage();
    this.options.log("New page created...");

    if (!this.options.launch.headless) {
      await page.setViewport(this.options.setViewport);
      this.options.log("Viewport parameters added");
    }

    page.setDefaultTimeout(this.options.timeout);
    this.options.log(`Default timeout value ${this.options.timeout} added...`);

    await page.setCookie(this.options.setCookie).then(() => {
      this.options.log("Cookie added...");
    });

    return page;
  }
}

module.exports = { Scrape };
