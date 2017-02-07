'use strict';

module.exports = (arr, keyName) => {
	if (keyName) {
		return arr.map(item => item[keyName]);
	}

	throw new Error('Missing `keyName` param.');
};
