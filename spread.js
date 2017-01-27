/**
 * ES6 tutorial Spread operator
 */

var moment = require('moment');

var person = ['Leo', 24];
var personTwo = ['Steven', 18];


function greet(name, age)
{
	console.log('Hi ' + name + ' you are ' + age + ' years old');
}

greet(...person);

var names = [
	'Leo',
	'Steven',
 	'Tom',
 	'Joan'
];

var final = [...names];

final.forEach((name) => {
	console.log('hi ' + name);
});

console.log(moment)