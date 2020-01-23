const { Scrape } = require("./scrape");

const peopleScrape = async options => {
  const scraper = new Scrape(options);
  await scraper.createBrowser();
  const page = await scraper.createPage();
  await scraper.closeBrowser();

  // await page.goto(options.uri, { waitUntil: ["networkidle2"] });
  // }

  // page.waitForSelector(SUGGESTION_GROUP_SELECTOR)
  //     .then(() => {
  //         options.log(`Got '${SUGGESTION_GROUP_SELECTOR}' selector`);
  //     }),

  // await page.$$(SUGGESTION_GROUP_SELECTOR)
  //     .then(async suggestions => {
  //         if (!suggestions) {
  //             options.log(`No suggestions`)
  //             return;
  //         }

  //         options.log(`Got ${suggestions.length || 0} suggestions`)
  //         let groups = new Map();

  //         for (let group of suggestions) {
  //             const groupName = await group.$eval(GROUP_NAME_SELECTOR, el => el.innerText);
  //             if (/follow|subscribe/i.test(groupName)) {
  //                 continue;
  //             }

  //             const groupPeople = await group.$$(PEOPLE_CARD_SELECTOR, el => el.innerText);
  //             options.log(`Group '${groupName}' has ${groupPeople.length || 0} people`);

  //             groups.set(groupName, groupPeople);
  //         }
  //         return groups;
  //     })
  //     .then(async groups => {
  //         options.log('\nGroups handling started\n');
  //         let count = 1;
  //         for (let [name, people] of groups) {
  //             options.log(`Group '${name}' with ${people.length || 0} people handling:`);

  //             for (let person of people) {
  //                 let isCompany = false;
  //                 const personName = await person.$eval(PERSON_NAME_SELECTOR, el => el.innerText)
  //                     .catch(error => {
  //                         options.log(error.message);
  //                         isCompany = true;
  //                     });

  //                 if (isCompany) {
  //                     break;
  //                 }

  //                 const personConnectButton = await person.$(CONNECT_BUTTON_SELECTOR)
  //                     .catch(error => {
  //                         options.log(error.message);
  //                     });

  //                 let clickDelay = Math.floor(Math.random() * 50);
  //                 await personConnectButton.click({ delay: clickDelay })
  //                     .catch(error => {
  //                         options.log(error.message);
  //                     });

  //                 await new Promise((r) => setTimeout(r, 200));

  //                 const isModal = await page.$eval(MODAL_WINDOW_SELECTOR, modal => true)
  //                     .catch(error => {
  //                         options.log(error.message);
  //                         return false;
  //                     });

  //                 options.log(`Modal window appeared -> ${isModal}`);

  //                 if (isModal) {
  //                     throw new Error('Can not add any more people to network');
  //                 }

  //                 options.log(`${count} ${personName} added to network`);
  //                 count++;
  //             }
  //         }
  //     })
  //     .catch(error => {
  //         options.log(error.message);
  //     });
  //await new Promise(r => setTimeout(r, 20000));
};

module.exports = options => peopleScrape(options);
