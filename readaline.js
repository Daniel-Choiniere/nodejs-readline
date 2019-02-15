// import the javascript fs module
let fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    let split = data.split("\n");
    
    
    console.log("The data on line 1 is", split[0]);
    console.log("The data on line 2 is", split[1]);
});