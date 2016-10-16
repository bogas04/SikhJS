SikhJS v0.0.3
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
They are in dire neeed of a revamp, and this I believe is the first step towards a modern revolution for Sikhism, when youth uses technology to
learn more about Baani and Sikhism.

How ?
==
The application is very simple as of now. I've manually taken docs from [SikhNet] (http://www.sikhnet.com/DownloadBanis) and [api.sikher.com] (http://api.sikher.com). Can not thank them enough. Nitnem baanies are converted to markdown files. The reason why I chose markdown is because they are
* very lightweight
* can be parsed to HTML very easily
* can be formatted right in code
* is pretty widely supported

A CSS class `gurbani-text` is used to use proper [Gurmukhi Fonts] (/dist/fonts/) for text having Gurbani. Thanks to the designer of font once again.

Build
==
The project is uses React, ES2015+, hence a bundler + transpiler is used in the build process.

## Prerequisites
* [NodeJS v4.0.0 or higher] (https://nodejs.org)

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

Changelog
==
## v2.0.0
- [ ] Gurudwara finder
  - [ ] Curated by availability of langar, rooms, etc
- [ ] Moderated commenting on any selected text to promote global level vichaar.
  - [ ] Notifications for same.

## v1.5.0
- [ ] Pronunciation of the words.
- [ ] Definition of words. Select a word and to get its meaning
- [ ] Nitnem Alert (With stats like "It took you 15 minutes to do Japji yesterday. You can spare that much time")
- [ ] Calendar Alert
- [ ] Breaking Sikh News

## v1.0.0
- [ ] Improve API routes to leverage browser keywords. Eg. sggs<tab>1234 mapping out into https://bogas04.github.io/SikhJS/#/sggs/1234.
- [ ] Proper searching (SearchGurbani can help).
- [ ] Introduction to all forms and styles of kirtan.
- [ ] SoundCloud integration for Shabads.
- [ ] Picture Gallery
- [ ] YouTube integration for Shabads.
- [ ] Saakhis
  - [ ] Need to add credible Saakhis which actually do akaal ustat and detach from physical form of Gurus

## v0.5.0
- [ ] Optimize Components
- [ ] Keyboard shortcuts to hover through lines
- [ ] Sehaj Path tracker
- [ ] Find a way to keep data persistent even with version updates.
- [ ] Use react
- [x] Sri Guru Granth Sahib.
- [x] Ang numbers.
- [x] Quick select angs.
- [x] Sikh calendar.
- [x] Beautify.
- [x] Complete Gurmukhi Nitnem.
- [x] Baanis stored as markdown files for easier parsing.

# Credits
Thanks to
* SikhNet for the actual [Baanies] (http://www.sikhnet.com/DownloadBanis).
* Sikher.com for SGGS [api.sikher.com] (http://api.sikher.com).
* [GurbaniFiles.org] (http://www.gurbanifiles.org/).
* [SearchGurbani.com] (http://searchgurbani.com/).
* and everyone else who are making this possible.

# Contribute
You can contribute by
* Becoming a code-collaborator
* Becoming a content-collaborator
* Suggesting modern designs for the application
* Finding bugs

# License
MIT
