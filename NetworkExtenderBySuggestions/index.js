module.exports = async function (context, myTimer) {
    const scrape = require('./scrape');
    
    context.log("App started!");

    await scrape({
        uri: "https://www.linkedin.com/mynetwork/",
        cookie: process.env["li_at"],
        log: (message) => context.log(message)
    });
};