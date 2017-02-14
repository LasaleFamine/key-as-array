'use strict';

module.exports = (arr, keyName) => keyName ? arr.map(item => item[keyName]) : undefined;
