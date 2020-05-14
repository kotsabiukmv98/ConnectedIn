const scrape = require('./scrape');

// process.env["li_at"] = "";

(async () => {
     await scrape({
          uri: "https://www.linkedin.com/mynetwork/",
          cookie: process.env["li_at"],
     })
})();