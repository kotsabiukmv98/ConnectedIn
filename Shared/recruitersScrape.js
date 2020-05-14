const { Scrape } = require("./scrape");
const { Parser } = require('json2csv');
const fs = require('fs');
const cheerio = require("cheerio");
const SEARCH_RESULT_LIST = ".search-results__list";
const SEARCH_RESULT_ITEM = ".search-result__info";

const recruitersScrape = async options => {
  const limit = options.limit ?? 100;

  const scraper = new Scrape(options);
  await scraper.createBrowser();
  const page = await scraper.createPage();

  let pageNumber = 1;
  let recruiters = [];
  do {
    console.log("\nPAGE NUMBER: ", pageNumber, "\n");

    await page.goto(`${options.uri}&page=${pageNumber}`, {
      waitUntil: ["networkidle2"]
    });
    await page.waitForSelector(SEARCH_RESULT_LIST).catch(error => {
      console.log(error.message);
      pageNumber = 0;
    });

    if (pageNumber === 0) break;

    let content = await page.content();
    let $ = cheerio.load(content);

    $(SEARCH_RESULT_ITEM).map(async function () {
      const recruiter = {
        name: $(this).find(".name.actor-name").eq(0).text().trim(),
        connection: $(this).find(".dist-value").eq(0).text().trim(),
        position: $(this).find('.subline-level-1').eq(0).text().trim(),
        page: `https://www.linkedin.com${$(this).find(".search-result__info .search-result__result-link").attr('href')}`
      };

      console.log(recruiter);
      recruiters.push(recruiter);
      // await new Promise(resolver => setTimeout(resolver, 1000));
    });
    await new Promise(resolver => setTimeout(resolver, 3000));
    pageNumber++;
  } while (recruiters.length < limit);

  console.log("Number of people: ", recruiters.length);

  const fields = ['name', 'connection', 'position', 'page'];
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(recruiters);
  const fileName = `recruiters-${new Date().getTime()}.csv`;

  fs.writeFile(fileName, csv, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`The file "${fileName}" was saved!`);
  });
  await new Promise(resolver => setTimeout(resolver, 10000));

  await scraper.closeBrowser();
};

module.exports = options => recruitersScrape(options);
