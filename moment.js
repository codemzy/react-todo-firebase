var moment = require('moment');

// current date and time
console.log(moment().format());

// unix timestamp
var now = moment();
console.log('Current timestamp', now.unix());

// converting from unix
var timestamp = 1469632529;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format());
console.log('current moment formatted', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('current moment formatted', currentMoment.format('MMMM Do, YYYY @ h:mm A'));