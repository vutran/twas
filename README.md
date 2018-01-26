# twas

![Travis](https://img.shields.io/travis/vutran/twas/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/vutran/twas) [![Coveralls branch](https://img.shields.io/coveralls/vutran/twas/master.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/vutran/twas) [![license](https://img.shields.io/github/license/vutran/twas.svg?maxAge=2592000&style=flat-square)](LICENSE)

> Generate a relative time string (Example: "3 seconds ago")

## Install

```
$ npm i -S twas
```

## Usage

```js
import twas from 'twas';

console.log(twas(Date.now() - (5 * 1000));

// -> 5 seconds ago
```

## License

MIT © [Vu Tran](https://github.com/vutran)
