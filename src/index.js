require("babel-core/register");
require("babel-polyfill");

import scrape from './scrape';
import config from './config';
(async () => {
  console.log("App started!");

  await scrape({
    uri: "https://www.linkedin.com/mynetwork/",
    cookie: config.linkedIn.token,
  });

})();