import test from 'ava';
import fn from '.';

test('throw when key not passed', t => {
	const testArr = [{link: 'a link'}, {link: 'other link'}];
	const err = t.throws(() => fn(testArr));
	t.is(err.message, 'Missing `keyName` param.');
});

test('returns correctly the array', t => {
	const testArr = [{link: 'a link'}, {link: 'other link'}];
	const resArr = ['a link', 'other link'];
	t.deepEqual(fn(testArr, 'link'), resArr);
});
