// The JavaScript language steadily evolves.
//  New proposals to the language appear regularly, they are analyzed and,
//   if considered worthy,
//    are appended to the list at https://tc39.github.io/ecma262/ and then progress to the specification.
// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
	Object.is = function ObjectIs(x, y) {};
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log('*******', Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);

// if (!Object.is) {
// 	Object.is = function ObjectIs(x, y) {
// 		var xNegZero = isItNegZero(x);
// 		var yNegZero = isItNegZero(y);

// 		if (xNegZero || yNegZero) {
// 			return xNegZero && yNegZero;
// 		} else if (isItNaN(x) && isItNaN(y)) {
// 			return true;
// 		} else if (x === y) {
// 			return true;
// 		}

// 		return false;

// 		// **********

// 		function isItNegZero(x) {
// 			return x === 0 && 1 / x === -Infinity;
// 		}

// 		function isItNaN(x) {
// 			return x !== x;
// 		}
// 	};
// }