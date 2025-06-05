![icon-github-v1-white.png](docs/images/icon-github-v1-1024.png)

## Add, Download & Install

![Downloads](https://img.shields.io/github/downloads/DmytroPolizhai/self-setuper/total?style=for-the-badge)
![Version](https://img.shields.io/github/v/release/DmytroPolizhai/self-setuper?style=for-the-badge)
![Documentation](https://img.shields.io/badge/Documentation-Soon-orange?style=for-the-badge)
![Supported Systems](https://img.shields.io/badge/Supported_systems-ubuntu%2C_windows-blue?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-en,_ukr-blue?style=for-the-badge)


**Automatically** installs software from a predefined package. Designed for people. 

### Features:
* Works with different systems. 
* User-friendly interface. [![Soon](https://img.shields.io/badge/SOON-blue?style=flat-square)](#credits)
* A website and a desktop application.
* Offline mode. [![Soon](https://img.shields.io/badge/SOON-blue?style=flat-square)](#credits)
* Installation Options: BAT or EXE. [![Soon](https://img.shields.io/badge/SOON-blue?style=flat-square)](#credits)



---------
# Introduction


### Stages 
* [Dependencies installation](#dependencies-installation-)
* [Frontend introduction](#frontend-introduction)
* [Backend introduction](#backend-introduction)
---
## Dependencies installation [![IMPORTANT](https://img.shields.io/badge/IMPORTANT-orange?style=for-the-bedge)](#credits)
### Node.js installation
Install [Node.js](https://nodejs.org/en/download). After installation, check if `npm` and `npx` are working. If they don't work, check these posts to figure it out: 
* [Reddit](https://www.reddit.com/r/node/comments/1h6wer2/npm_not_working_on_windows_after_install_and/),
* [Stackoverflow](https://stackoverflow.com/questions/19569990/npm-install-doesnt-work-in-windows-powershell).


### Expo installation via [`npm`](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)
Before [Expo](https://expo.dev/) installing **you need to ensure that your working folder is set to ./frontend**. 
Otherwise, npm won't install correctly. To fix that you need to change your current destination. You can do it by using this command in the terminal.
[![IMPORTANT](https://img.shields.io/badge/IMPORTANT-orange?style=for-the-bedge)](#credits)
```bash
cd ./frontend
```

And finally install [Expo](https://expo.dev/) by using this command:
```bash 
npm install expo
``` 
After this actions project should work.

## **Frontend introduction**
First of all you have to change your working directory by using this command:
```bash
$ cd ./frontend/
```
Then use this command to start frontend 
```bash
$ npx expo start -c
```
[![IMPORTANT](https://img.shields.io/badge/IMPORTANT-orange?style=for-the-bedge)](#credits) If have some problems return to step [Dependencies Installation](#dependencies-installation-)

## **Backend introduction**
[![Soon](https://img.shields.io/badge/SOON-blue?style=flat-square)](#credits)


----
# Credits
[![IMPORTANT](https://img.shields.io/badge/IMPORTANT-orange?style=for-the-bedge)](#credits) — This badge highlights really important information.

[![Soon](https://img.shields.io/badge/SOON-blue?style=flat-square)](#credits) — This badge indicates items or features coming soon.

### Stack
* [Node.js](https://nodejs.org/en/download), 
* [Expo](https://expo.dev/), 
* [FastAPI](https://fastapi.tiangolo.com/), 
* [Poetry](https://python-poetry.org/).
