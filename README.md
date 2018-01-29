SikhJS 
==
[![Release](https://img.shields.io/github/release/bogas04/sikhjs.svg)](https://github.com/bogas04/SikhJS/releases)
[![Issues](https://img.shields.io/github/issues/bogas04/sikhjs.svg)](https://github.com/bogas04/SikhJS/issues)
[![Slack](https://img.shields.io/badge/chat-slack-red.svg)](https://join.slack.com/t/sikhjs/shared_invite/enQtMzA1OTM5OTg3NjAzLTAyNTJkYTI0N2MzNzZhMGJlNzk0MmIzYmRiMzIxMzI0OWJlNTBiMTdkNWY2YzZlNjI0ODNjMWJiYzRiYTI2MTg)

SikhJS aims to be a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) because we feel just like one slowly progresses in Sikhi by reading baani little by little, so should the storage of an application increase, while giving consistent experience everywhere.

**NOTE**: The application is still in active development and is not fit for public release just yet.

Why ?
==
Well I'm a Sikh and I happen to be a web developer, so I saw an opportunity to use my skills to serve to my fellow Sikh brothers and sisters.  Apart from that, the main reason behind the project is that the Baani softwares are of 1990s era in 2010s.
They are in dire need of a revamp, and this I believe is the first step towards a modernization of Baani on web.

Common Issues with current Sikh Apps | How web solves it
:--|:--|
Usually only available on one platform. | Web on other hand, works everywhere.
Feature parity between platforms is bad.| Web is consistent throughout platforms.
Sharing baani needs you to use share features within the app or go back to screenshots! | It's still a URL in web, you can share or copy or print it easily!
You can't bookmark something on your phone app and later use it on desktop app. This sort of ecosystem is not really present in popular Sikh apps. | Once again, web with help of synced databases can help you acheive this very easily.

More importantly, this project is MIT license, which anyone can contribute to or even fork into a separate project. This way whatever innovation and problems we solve or create, will become a lesson for the future software teams.

And the project is totally free. No ads, no operating costs (it's a web app hosted on [gh-pages](https://pages.github.com/)). 

Contribute
== 
You can contribute by
* Reporting [Issues](https://github.com/bogas04/SikhJS/issues/new).
* Becoming a code-collaborator.
* Becoming a content-collaborator.
  * Contribute to [Raags](https://github.com/bogas04/SikhJS/tree/master/assets/docs/md/raags) and [Authors](https://github.com/bogas04/SikhJS/tree/master/assets/docs/md/authors) descriptions. Add images, links, more text etc to the markdown files.
  * Contribute to beautification/correction(if any) of Nitnem [baanies](https://github.com/bogas04/SikhJS/tree/master/assets/docs/md/baanies). These are simple markdown files that can take help of formatting of text.

Build
==
The project uses React, ES2015+, hence a bundler + transpiler is used in the build process.

## Instructions

```bash
# Installation
git clone https://github.com/bogas04/SikhJS.git
cd SikhJS
npm i

# Run development server
npm start

# Build bundle
npm run build
```

### [Progress](https://github.com/bogas04/SikhJS/milestones?direction=desc&sort=completeness&state=open)

### [Plans & Changelog](./CHANGELOG.md)

### [Bugs](https://github.com/bogas04/SikhJS/labels/bug)

# Credits
Thanks to
* Guru Sahib for giving me talent and skill.
* [Khalis Foundation](https://khalisfoundation.org/) for their [Khajana API](https://github.com/bogas04/khajana-js).
* [GurbaniNow](https://github.com/Sarabveer/gurbaninow).
* Sikher.com for SGGS [api.sikher.com](http://api.sikher.com).
* Documents from:
  * SikhNet for the actual [Baanies](http://www.sikhnet.com/DownloadBanis).
  * [GurbaniFiles.org](http://www.gurbanifiles.org/).
  * [SearchGurbani.com](http://searchgurbani.com/).
* and [everyone](https://github.com/bogas04/SikhJS/graphs/contributors) else who is making this possible.

# License
MIT
