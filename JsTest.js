const fs = require('fs');
var convert = require('xml-js');

const data = fs.readFileSync('./bp.sbc', 'utf8', (error, contents) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("Ran through function.");
    }
    return contents
});

console.log(data)

var resultsJSON = convert.xml2json(data, {compact: true, spaces: 4});
console.log(resultsJSON)