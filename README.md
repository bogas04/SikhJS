SikhJS v0.0.1b
==
Modern Gurbani application for Windows, OSX and Linux. Built on Electron.
**NOTE**: The application is still in active development and is not fit for public release just yet.

![Screencast on OSX](assets/OSX.gif)

Goal
==
* Create a multiplatform Gurbani application with lightweight modern design.
* Provide a clean way of representing Baani on Web (Usage of markdown files)
* Promote it among youth.

Build
==
The project is based on Electron. You can build it as follows:

## Prerequisites
  * [NodeJS v4.0.0 or higher] (https://nodejs.org)

## Instructions
```bash
git clone https://github.com/bogas04/SikhJS.git
cd SikhJS
npm i
npm i electron-packager -g
# For Windows 32 bit
electron-packager . SikhJS --platform=win32 --arch=ia32 --version=0.33.1
# For OSX 
electron-packager . SikhJS --platform=darwin --arch=all --version=0.33.1
# For Linux 32 bit
electron-packager . SikhJS --platform=linux --arch=ia32 --version=0.33.1
```

Why ?
==
Well I'm a Sikh and I happen to be a web developer, so I saw an opportunity to use my skills to serve to my fellow Sikh brothers and Sisters.
Apart from that, the main reason behind the project is that the Baani softwares are of 1990s era in 2015s.
They are in dire neeed of a revamp, and this I believe is the first step towards a modern revolution for Sikhism, when youth uses technology to
learn more about Baani and Sikhism.

How ?
==
The application is very simple as of now. I've manually taken docs from [SikhNet] (http://www.sikhnet.com/DownloadBanis) 
and converted them to markdown files. The reason why I chose them is because they are 
  * very lightweight
  * can be parsed to HTML very easily
  * is pretty widely supported

A CSS class `gurbani-text` is used to use proper [Gurmukhi Fonts] (/fonts/) for text having Gurbani.

Changelog
==
## v1.0.0
  - [ ] /r/Sikh column for discussion
  - [ ] SoundCloud integration for Shabads
  - [ ] YouTube integration for Shabads
  - [ ] Gurudwara finder
  - [ ] Picture Gallery
  - [ ] Definition of words. Select a word and `CMD-D` \ `CTRL-D` to get its meaning
  - [ ] Pronunciation of the words.
  - [ ] Saakhis 
  - [ ] Experiment with Unicode Font (It has some perf issues)
  - [ ] English and Romanized Nitnem
  - [ ] Indexed SGGS with quick search
  - [x] Keyboard shortcuts to hover through lines
  - [x] Sri Guru Granth Sahib
  - [x] Complete Gurmukhi Nitnem
  - [x] Baanis stored as markdown files for easier parsing

Credits
==
Thanks to SikhNet for the actual [Baanies] (http://www.sikhnet.com/DownloadBanis) and to [GurbaniFiles.org] (http://www.gurbanifiles.org/) for SGGS

Contribute
==
You can contribute by 
* Finding bugs
* Suggesting modern designs for the application
* Giving feature ideas
* Formatting markdown Baani files

License
==
MIT
