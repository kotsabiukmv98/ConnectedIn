const scrape = require("./peopleScrape");
const companies = require("./CompaniesPages");

// for (const company in companies.links) {
//   console.log(companies.links[company]);
// }
// console.log(companies.message("Name"));

// process.exit();

process.env["TOKEN"] =
  "";
(async () => {
  await scrape({
    uri:
      "https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%2210667%22%5D&origin=FACETED_SEARCH&title=%22hir%22%20OR%20%22recruiter%22%20OR%20%22recruiting%22%20OR%20%22hr%22%20OR%20%22university%22%20OR%20%22talent%22",
    cookie: process.env["TOKEN"]
  });
})();

