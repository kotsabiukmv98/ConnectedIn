# ConnectedIn

NodeJS solution for automated extending network on LinkedIn and collecting recruiters information from top IT companies.

## Network extending on [LinkedIn](https://www.linkedin.com) automation

### Motivation

You may have heard that there is a direct correlation between a number of your connections on LinkedIn and ~~your annual income~~ number of recruiters that trying to reach out to you. If not, I will not tell you about that just will live it here: [How Important Is To Grow Your Connections On LinkedIn?](https://firebrandtalent.com/blog/2015/01/how-important-is-it-to-grow-your-connections-on-linkedin/), [Why LinkedIn Connections Matter & How to Grow Your Network](https://www.linkedin.com/pulse/why-linkedin-connections-matter-how-grow-your-network-jimena-cortes/)

### What it does?

Every one on LinkedIn has [own suggestions](https://www.linkedin.com/mynetwork/) that may look like this

![](https://www.linkedintraining.co.uk/wp-content/uploads/2019/07/People-You-May-Know-LinkedIn-feature.png)

And I was clicking on each **Connect** button to add peoples to the connect list. But I very fast understand that it is something that could be automated. And here it is:

### Demo

### How to run it?

Clone repo:
`git vclone https://github.com/mkotsabiuk/ConnectedIn.git`

Go to the source folder 
`cd ConnectedIn`

Install dependencies:
`npm i`

Add li_at cookie value from your LinkedIn account to [run.js](https://github.com/mkotsabiuk/ConnectedIn/blob/master/NetworkExtenderBySuggestions/run.js) file here
```

// process.env["li_at"] = "";

```
and commented line out

Run command
`node node NetworkExtenderBySuggestions\run.js`

### FAQ

*How can I find li_at cookies value?*  
You can easaly find it in browser dev tools under Application tab. For example Google Chrome dev tools:

![](https://github.com/mkotsabiuk/ConnectedIn/blob/demo/Demo/li_at.jpg)

*Should I always run this script manually?*  
Not realy. You can easaly use services like [Azure Functions](https://azure.microsoft.com/en-us/services/functions/?&ef_id=Cj0KCQjw2PP1BRCiARIsAEqv-pQ4xcyLvVr7Bm9_55InsFxuG5jHIChWCKNdna8aIpchWr-HJieCzUwaAurZEALw_wcB:G:s&OCID=AID2000594_SEM_Cj0KCQjw2PP1BRCiARIsAEqv-pQ4xcyLvVr7Bm9_55InsFxuG5jHIChWCKNdna8aIpchWr-HJieCzUwaAurZEALw_wcB:G:s&dclid=CjgKEAjw2PP1BRDC2_aEktPaqWcSJAD8LyMbhfZb3XiN1Oa8i-qiSAObSbdPcR8mdkNwLMzKmguNlPD_BwE), AWS Lambda or Cloud Functions on GCP.
Actually, code is written to easy host in on Azure Functions. After I hosted it there I extended my network connections on LinkedIn from 1k to 4k only for few weeks.
Also, you can create any other way to run sthis script repeatedly.

*Could I add all people from LinkedIn to my network?*  
Unfortunately NOT! According to LinkedIn's rolls you can have at most 30k connections. In case you would like to add someone more, you will have to remove someone previously.

*What if I receive message like this:*  
![](https://github.com/mkotsabiuk/ConnectedIn/blob/demo/Demo/out_of_invitations.jpg)

That is LinkedIN's Invitation Restrictions. Long story short: that mean that you are trying to add a lot of new conections in short term. I would like to suggest you to use [LinkedIn Premium](https://premium.linkedin.com/) because it allows add much more people. It is one month free trial, and that should be enough for you. In case you are banned for a long time, you can see all sent invitations [here](https://www.linkedin.com/mynetwork/invitation-manager/sent/) and withdrow some of them.
Read more about this you can [here](https://www.linkedin.com/help/linkedin/topics/6096/6097/4800)

## Collecting recruiters information

You can easily collect a large amount of recruiters information from different companies

### Demo

### How to run it?



*Why do I need this spreadsheet?*
You can use [phantombuster](https://phantombuster.com/automations/linkedin/2818/linkedin-network-booster) service for automatng adding recruters from  spreadsheet to your network.



### Demo

