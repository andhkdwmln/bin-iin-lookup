![bin-iin-lookup](https://socialify.git.ci/andhkdwmln/bin-iin-lookup/image?description=1&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark)

<div align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/andhkdwmln/bin-iin-lookup?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andhkdwmln/bin-iin-lookup?style=for-the-badge">
</div>

<br>

**Attention :** This is _a Tools_ used to get info **BIN/IIN** from specific card numbers.


## 🚀 Getting Detail

* Card Brand
* Card Type
* Card Category
* Card Issuer
* Card Country Code
* Card Country Name

## 🚀 Requirements

* [Git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/download/prebuilt-installer)

## 🚀 Quick Setup

- Install `Git` and `NodeJS`
- Clone Repository `git clone https://github.com/andhkdwmln/bin-iin-lookup`
- Move to directory `cd bin-iin-lookup`
- Install required module `npm install`
- Build `npm run build`
- Compiled code inside `lib` folder

## 🚀 Usage

``` Javascript
const { BinLookup } = require('./lib/index');

(async () => {
    
    const data = await BinLookup('424242')
    console.log(data);

})();
```

## 🚀 Thanks

- [x] [BIN Database Update September 2024](https://github.com/venelinkochev/bin-list-data)