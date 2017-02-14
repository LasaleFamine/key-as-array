import test from 'ava';
import fn from '.';

test('returns undefined when keyName is not passed', t => {
	const testArr = [{link: 'a link'}, {link: 'other link'}];
	const res = fn(testArr);
	t.is(res, undefined);
});

test('returns correctly the array', t => {
	const testArr = [{link: 'a link'}, {link: 'other link'}];
	const resArr = ['a link', 'other link'];
	t.deepEqual(fn(testArr, 'link'), resArr);
});
