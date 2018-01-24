# twas

> Generate a relative time string (Example: "3 seconds ago")

## Install

```
$ npm i -S twas
```

## Usage

```
const twas = require('twas');

console.log(twas(Date.now() - (5 * 1000));
// -> 5 seconds ago
```

## License

MIT © [Vu Tran](https://github.com/vutran)
