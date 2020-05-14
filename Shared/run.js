const scrape = require("./recruitersScrape");
const companies = require("./companiesPages");

// process.env["li_at"] = "";

(async () => {
  await scrape({
    uri: companies['microsoft'],
    cookie:  process.env["li_at"],
    limit: 100
  });
})();