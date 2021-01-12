
Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
// if(!Date.now) Date.now = function() { return new Date(); }
// Date.time = function() { return Date.now().getUnixTime(); }

var parsedUnixTime = new Date('12 Jan 2021 GMT').getUnixTime();

console.log(parsedUnixTime);