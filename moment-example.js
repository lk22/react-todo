var moment = require('moment');

console.log('the current time is: ' + moment().format());

var now = moment();

console.log('current timestamp', now.unix());

var stamp = 1485469756;
var current = moment.unix(stamp);

var day = current.format('dddd Do');
var month = current.format('Mo MMMM');
var year = current.format('YYYY');

// console.log(day + ' ' + month + ' ' +  year);

console.log('current moment', current.format('DDDo MMMM YYYY @ h:mm:ss A'));