var s1 = 'Tom';
var s2 = `${s1}`;

var w1 = 16;
var w2 = w1 + 0;

s1 == s2;

s1 === s2;

w1 == w2;

w1 === w2;

//****************/ */
var wo1 = {
	name: 'react fest'
};

var w2 = {
	name: 'react fest'
};

if (w1 == w2) {
}
if (w1 === w2) {
}

// == allows coercion (types different  )
// === disallows coercion

//************/ */

null == undefined;

//**************** */

var w1 = { topic: null };
var w2 = {};

if ((w1.topic === null || w1.topic === undefined) && (w2.topic === null || w2.topic === undefined)) {
}

///********************** */

// Prefers number equality

var wcount = [];
var wcount2 = [];

///cases

// [] == ! []

if (wcount == !wcount2) {
	// ...
}

//////////////******************* */
//error first approach
var ws = [];

if (ws) {
	///
}

if (ws == true) {
	//...nope
}

if (ws == false) {
	//execute ////
}

/////////////////////////////////
