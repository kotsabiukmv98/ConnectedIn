const leftPartOfUrl =
  "https://www.linkedin.com/search/results/people/?facetCurrentCompany=";
const facetNetwork = "&facetNetwork=%5B%22S%22%5D";
const rightPartOfUrl = `${facetNetwork}&origin=FACETED_SEARCH&title=%22hr%22%20OR%20%22recruiter%22%20OR%20%22human%20resources%22%20OR%20%22hiring%22%20OR%20%22talent%22`;

companies = {
  links: {
    amazon: `${leftPartOfUrl}%5B%221586%22%5D${rightPartOfUrl}`,
    google: `${leftPartOfUrl}%5B%221441%22%5D${rightPartOfUrl}`,
    microsoft: `${leftPartOfUrl}%5B%221035%22%5D${rightPartOfUrl}`,
    facebook: `${leftPartOfUrl}%5B%2210667%22%5D${rightPartOfUrl}`,
    apple: `${leftPartOfUrl}%5B%22162479%22%5D${rightPartOfUrl}`,
    netflix: `${leftPartOfUrl}%5B%22165158%22%5D${rightPartOfUrl}`,
    airbnb: `${leftPartOfUrl}%5B%22309694%22%5D${rightPartOfUrl}`,
    uber: `${leftPartOfUrl}%5B%221815218%22%5D${rightPartOfUrl}`,
    linkedIn: `${leftPartOfUrl}%5B%221337%22%5D${rightPartOfUrl}`,
    bookingcom: `${leftPartOfUrl}%5B%2211348%22%5D${rightPartOfUrl}`,
    lyft: `${leftPartOfUrl}%5B%222620735%22%5D${rightPartOfUrl}`,
    tripAdvisor: `${leftPartOfUrl}%5B%2215027%22%5D${rightPartOfUrl}`
  },
  message: name => `Hi ${name}!
  
My name is Mykola. I am a Software Engineer from Ukraine. I’d love to stay up to date with what your company is doing. And I was wondering if we could to keep in touch and connect with you for the future?

Thank for your time.
Best regards,
Mykola.`
};

// for (const company in companies.links) {
//   console.log(companies.links[company]);
// }
// console.log(companies.message("Kolia"));

module.exports = companies;
