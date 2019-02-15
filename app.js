// fetches built in Node method 'fs'
var fs = require('fs');

var input = fs.createReadStream('readme.txt');


var rl = require('readline').createInterface({
   input: input,
   terminal: false
});

rl.on('line', function(line) {
   console.log("The data on line 1 is " + line);
});


//  fs module has gone out and read the contents of the txt file
// var readMe = fs.readFileSync('readme.txt', 'utf8', function(err, contents) {
//         console.log(contents);
// });


