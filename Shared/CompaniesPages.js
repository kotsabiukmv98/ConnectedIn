const baseUrl = "https://www.linkedin.com/search/results/people/?facetCurrentCompany=";
const facetNetwork = ""
const filters = `${facetNetwork}&origin=FACETED_SEARCH&title=%22hr%22%20OR%20%22recruiter%22%20OR%20%22human%20resources%22%20OR%20%22hiring%22%20OR%20%22talent%22`;

companies = {
  amazon: `${baseUrl}%5B%221586%22%5D${filters}`,
  google: `${baseUrl}%5B%221441%22%5D${filters}`,
  microsoft: `${baseUrl}%5B%221035%22%5D${filters}`,
  facebook: `${baseUrl}%5B%2210667%22%5D${filters}`,
  apple: `${baseUrl}%5B%22162479%22%5D${filters}`,
  netflix: `${baseUrl}%5B%22165158%22%5D${filters}`,
  airbnb: `${baseUrl}%5B%22309694%22%5D${filters}`,
  uber: `${baseUrl}%5B%221815218%22%5D${filters}`,
  linkedin: `${baseUrl}%5B%221337%22%5D${filters}`,
  bookingcom: `${baseUrl}%5B%2211348%22%5D${filters}`,
  lyft: `${baseUrl}%5B%222620735%22%5D${filters}`,
  tripadvisor: `${baseUrl}%5B%2215027%22%5D${filters}`
};

module.exports = companies;