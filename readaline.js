// import the javascript fs module
let fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    let split = data.split("\n");
    
    for (let i=0; i<split.length; i++) {
        console.log("The data on line", i + 1, "is", split[i]);
    }
    
});