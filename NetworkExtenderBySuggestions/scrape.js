const puppeteer = require('puppeteer');

const SUGGESTION_GROUP_SELECTOR = '.mn-cohorts-list';
const PEOPLE_CARD_SELECTOR = '.discover-entity-card.ember-view';
const GROUP_NAME_SELECTOR = '.mn-cohort-view__heading h2';
const PERSON_NAME_SELECTOR = '.discover-person-card__name';
const CONNECT_BUTTON_SELECTOR = "button[data-control-name='people_connect']";
const MODAL_WINDOW_SELECTOR = '#artdeco-modal-outlet div';

const options = {
    launch: {
        headless: false,
    },
    setViewport: { width: 1280, height: 1000 },
    timeout: 120000,
    setCookie: {
        name: "li_at",
        domain: "www.linkedin.com"
    },
    log: (message) => console.log(message)
};

const scrape = async (options) => {
    options.setCookie.value = options.cookie || options.setCookie.value;
    options.log('Scraping started!');

    const browser = await puppeteer.launch(options.launch)
        .then(browser => {
            options.log('Browser created');
            return browser;
        });

    const page = await browser.newPage()
        .then(page => {
            options.log('Page in browser created');
            return page;
        });

    if (!options.launch.headless) {
        await page.setViewport(options.setViewport)
            .then(() => {
                options.log('Viewport parameters added');
            });
    }
    page.setDefaultTimeout(options.timeout)
    options.log(`Default timeout value ${options.timeout} added`);

    await page.setCookie(options.setCookie)
        .then(() => {
            options.log('Cookie added');
        });

    await Promise.all([
        page.goto(options.uri, { waitUntil: ['networkidle2'] })
            .then(() => {
                options.log(`Got ${options.uri} page`);
            }),
        page.waitForSelector(SUGGESTION_GROUP_SELECTOR)
            .then(() => {
                options.log(`Got '${SUGGESTION_GROUP_SELECTOR}' selector`);
            }),
    ]);

    await page.$$(SUGGESTION_GROUP_SELECTOR)
        .then(async suggestions => {
            if (!suggestions) {
                options.log(`No suggestions`)
                return;
            }

            options.log(`Got ${suggestions.length || 0} suggestions`)
            let groups = new Map();

            for (let group of suggestions) {
                const groupName = await group.$eval(GROUP_NAME_SELECTOR, el => el.innerText);
                if (/follow|subscribe/i.test(groupName)) {
                    continue;
                }

                const groupPeople = await group.$$(PEOPLE_CARD_SELECTOR, el => el.innerText);
                options.log(`Group '${groupName}' has ${groupPeople.length || 0} people`);

                groups.set(groupName, groupPeople);
            }
            return groups;
        })
        .then(async groups => {
            options.log('\nGroups handling started\n');
            let count = 1;
            for (let [name, people] of groups) {
                options.log(`Group '${name}' with ${people.length || 0} people handling:`);

                for (let person of people) {
                    let isCompany = false;
                    const personName = await person.$eval(PERSON_NAME_SELECTOR, el => el.innerText)
                        .catch(error => {
                            options.log(error.message);
                            isCompany = true;
                        });

                    if (isCompany) {
                        break;
                    }

                    const personConnectButton = await person.$(CONNECT_BUTTON_SELECTOR)
                        .catch(error => {
                            options.log(error.message);
                        });

                    let clickDelay = Math.floor(Math.random() * 50);
                    await personConnectButton.click({ delay: clickDelay })
                        .catch(error => {
                            options.log(error.message);
                        });

                    await new Promise((r) => setTimeout(r, 200));

                    const isModal = await page.$eval(MODAL_WINDOW_SELECTOR, modal => true)
                        .catch(error => {
                            options.log(error.message);
                            return false;
                        });

                    options.log(`Modal window appeared -> ${isModal}`);

                    if (isModal) {
                        throw new Error('Can not add any more people to network');
                    }

                    options.log(`${count} ${personName} added to network`);
                    count++;
                }
            }
        })
        .catch(error => {
            options.log(error.message);
        });

    await browser.close()
        .then(() => {
            options.log('Browser closed and script finished');
        });
};

module.exports = (params) => scrape({ ...options, ...params });