# set-timeout-sync 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![snekjs on NPM](https://img.shields.io/npm/v/set-timeout-sync.svg?color=green&label=set-timeout-sync)](https://www.npmjs.com/package/set-timeout-sync)

A blocking, synchronous imitation of `setTimeout`.

## Installation

```bash
npm install set-timeout-sync
```

## Usage

```js
const setTimeoutSync = require('set-timeout-sync')

console.log("I'm first")

setTimeoutSync(function() {
  console.log("I'm blocking!")
}, 2000)

console.log("I'm last")

// I'm first
// <wait 2000ms>
// I'm blocking!
// I'm last
```

## License

This project is open source and available under the [MIT License](LICENSE).
