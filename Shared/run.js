const scrape = require("./peopleScrape");
const companies = require("./CompaniesPages");

// for (const company in companies.links) {
//   console.log(companies.links[company]);
// }
// console.log(companies.message("Name"));

// process.exit();

process.env["TOKEN"] =
  "AQEDASdLsSIFrZS8AAABbxQ4STEAAAFvpWpCb04AKysqcq_-UCGXpj3lETecePXTQp4gO7qNVkJpGj6aa18HC7QG8KklRl_uFDU6A8jQge-RVtvRIT7CSC8UBZybvUO8WrEaaWJBwV2eTIQCaLbrf1Wq";
(async () => {
  await scrape({
    uri:
      "https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%222135371%22%5D&origin=FACETED_SEARCH&title=%22hir%22%20OR%20%22recruiter%22%20OR%20%22recruiting%22%20OR%20%22hr%22%20OR%20%22university%22%20OR%20%22talent%22",
    cookie: process.env["TOKEN"]
  });
})();
