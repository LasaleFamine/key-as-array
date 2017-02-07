# key-as-array [![Build Status](https://travis-ci.org/LasaleFamine/key-as-array.svg?branch=master)](https://travis-ci.org/LasaleFamine/key-as-array)

> Get an array of a specific key from an array of object


## Install

```
$ yarn add key-as-array
```


## Usage

```js
const keyAsArray = require('key-as-array');
const arr = [{link: 'a link', useless: 'prop'}, {link: 'a second link', useless: 'prop2'}]

keyAsArray(arr, 'link');
//=> ['a link', 'a second link']
```


## API

### keyAsArray(input, keyName)

#### input

Type: `array`

Array of similar objects.

#### keyName

Type: `string`

Name of the key you want to get.


## License

MIT © [LasaleFamine](https://github.com/lasalefamine)
