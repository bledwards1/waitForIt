var waitTime = 3000; // Wait for 3 seconds
var currentTime = 0;
var waitInterval = 500;

console.log("Wait for it");

var interval = setInterval(function() {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);

setTimeout(function() {
    clearInterval(interval);
    console.log("done");
},waitTime);

