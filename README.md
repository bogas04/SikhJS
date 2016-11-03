SikhJS 
==
[![Release](https://img.shields.io/github/release/bogas04/sikhjs.svg)](https://github.com/bogas04/SikhJS/releases)
[![Issues](https://img.shields.io/github/issues/bogas04/sikhjs.svg)](https://github.com/bogas04/SikhJS/issues)


Modern Gurbani Web App.

**NOTE**: The application is still in active development and is not fit for public release just yet.

Why ?
==
Well I'm a Sikh and I happen to be a web developer, so I saw an opportunity to use my skills to serve to my fellow Sikh brothers and sisters.
Apart from that, the main reason behind the project is that the Baani softwares are of 1990s era in 2010s.
They are in dire need of a revamp, and this I believe is the first step towards a modernization of Baani on web.

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

[Progress](https://github.com/bogas04/SikhJS/milestones?direction=desc&sort=completeness&state=open)
==
Progres of the project.

[Plans & Changelog](./CHANGELOG.md)
==
Plans for future versions and major changes throughout the versions.

[Bugs](https://github.com/bogas04/SikhJS/labels/bug)
==
Known issues.

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
