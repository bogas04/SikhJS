SikhJS [![GitHub version](https://badge.fury.io/gh/bogas04%2Fsikhjs.svg)](https://badge.fury.io/gh/bogas04%2Fsikhjs)
==
Modern Gurbani Web App
**NOTE**: The application is still in active development and is not fit for public release just yet.

Goal
==
I've added several new goals and roadmap. Would love some support to make this a reality.
* Create a web app Gurbani application with lightweight modern design.
* Provide a clean way of representing Baani on Web (Usage of markdown files).
* Promote Sikhi among youth by use of technology, gamification and what not.

Why ?
==
Well I'm a Sikh and I happen to be a web developer, so I saw an opportunity to use my skills to serve to my fellow Sikh brothers and sisters.
Apart from that, the main reason behind the project is that the Baani softwares are of 1990s era in 2010s.
They are in dire neeed of a revamp, and this I believe is the first step towards a modern revolution for Sikhism, when youth uses technology to learn more about Baani and Sikhism.

How ?
==
The application is very simple as of now. I've manually taken docs from [SikhNet](http://www.sikhnet.com/DownloadBanis) and [gurbaninow.com](https://github.com/Sarabveer/gurbaninow/blob/master/API.md) and [other sources](#credits). Can not thank them enough. Nitnem baanies are converted to markdown files. The reason why I chose markdown is because they are
* very lightweight
* can be parsed to HTML very easily
* can be formatted right in code
* is pretty widely supported

A CSS class `gurbani-text` is used to use proper [Gurmukhi Fonts] (/dist/fonts/) for text having Gurbani. Thanks to the designer of font once again.

Contribute
== 
You can contribute by
* Reporting [Issues](https://github.com/bogas04/SikhJS/issues/new).
* Becoming a code-collaborator.
* Becoming a content-collaborator.

Build
==
The project is uses React, ES2015+, hence a bundler + transpiler is used in the build process.

## Instructions

```bash
# Installation
git clone https://github.com/bogas04/SikhJS.git
cd SikhJS
npm i

# Transpile JSX to JS during development
npm run build:webpack

# Transpile JSX to JS during development and watch the files
npm run build:watch
```

Plans, Changelog and [Bugs](https://github.com/bogas04/SikhJS/labels/bug)
==
## [v2.0.0](https://github.com/bogas04/SikhJS/issues?q=is%3Aopen+is%3Aissue+milestone%3Av2.0.0)
- [ ] Gurudwara finder [#46](https://github.com/bogas04/sikhjs/issues/46).
  - [ ] Curated by availability of langar, rooms, etc
- [ ] Moderated commenting on any selected text to promote global level vichaar.
  - [ ] Notifications for same.

## [v1.0.0](https://github.com/bogas04/SikhJS/issues?q=is%3Aopen+is%3Aissue+milestone%3Av1.0.0)
- [ ] Tech Improvements:
  - [ ] Use Service Worker for offline support. [#25](https://github.com/bogas04/sikhjs/issues/25).
  - [ ] Optimize Components.
  - [ ] Highly responsive design.
  - [ ] Notifications
    - [ ] Nitnem Alert (With stats like "It took you 15 minutes to do Japji yesterday. You can spare that much time")
    - [ ] Calendar Alert
  - [ ] CSS Beautification of Granth, Shabads and Angs.
- [ ] New Content:
  - [ ] Additional Granths [#39](https://github.com/bogas04/sikhjs/issues/39).
  - [ ] Introduction to all forms Shashtars 
    - [ ] Shashtar Maala with pictures and descriptiosn would be amazing
  - [ ] Introduction to all forms and styles of kirtan.
    - [ ] SoundCloud integration for Shabads.
    - [ ] YouTube integration for Shabads.
  - [ ] Saakhis
    - [ ] Need to add credible Saakhis which actually do akaal ustat and detach from physical form of Gurus.
  - [ ] Picture Gallery
  - [ ] Shabad Kosh
    - [ ] Pronunciation of the words.
    - [ ] Definition of words. Select a word and to get its meaning

## [v0.5.0](https://github.com/bogas04/SikhJS/issues?q=is%3Aopen+is%3Aissue+milestone%3Av0.5.0)
- [ ] Bookmarks and Sehaj Path tracker [#20](https://github.com/bogas04/sikhjs/issues/20).
  - [ ] Find a way to keep data persistent even with version updates.
- [x] Improve API routes to leverage browser keywords.
  - [x] `/sggs/1234` opens 1234 Ang.
  - [x] `/shabads/mnbmj` opens Search Results for mnbmj (Mohe Na Bisaaro).
  - [x] `/shabad/1234` opens 1234 Shabad.
- [x] Proper searching (Thanks to [GurbaniNow](https://github.com/Sarabveer/gurbaninow)).
- [x] Use react.
- [x] Sri Guru Granth Sahib.
- [x] Ang numbers.
- [x] Quick select angs.
- [x] Sikh calendar.
- [x] Beautify.
- [x] Complete Gurmukhi Nitnem.
- [x] Baanis stored as markdown files for easier parsing.

## v0.3.0 and earlier
- The project [pivoted](https://github.com/bogas04/SikhJS/issues/32) from being an Electron app to being a web-app in favour of [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) and [Add To Desktop](https://www.thurrott.com/cloud/65582/google-retiring-chrome-app-launcher-windows) features.
- You can still download the [binary](https://github.com/bogas04/SikhJS/releases/tag/beta3) however.

# Credits
Thanks to
* Guru Sahib for giving me talent and skill.
* [GurbaniNow](https://github.com/Sarabveer/gurbaninow).
* Sikher.com for SGGS [api.sikher.com] (http://api.sikher.com).
* Documents from:
  * SikhNet for the actual [Baanies] (http://www.sikhnet.com/DownloadBanis).
  * [GurbaniFiles.org] (http://www.gurbanifiles.org/).
  * [SearchGurbani.com] (http://searchgurbani.com/).
* and [everyone](https://github.com/bogas04/SikhJS/graphs/contributors) else who are making this possible.

# License
MIT
