const fs = require('fs');
var convert = require('xml-js');

const results = fs.readFileSync('./bp.sbc', 'utf8', (error, contents) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("Ran through function.");
    }
    return contents
});



var resultsJSON = convert.xml2json(results, {compact: true, spaces: 4});
// console.log(results)
// console.log(resultsJSON)

fs.writeFileSync("Response.json", resultsJSON, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("File written successfully.");
    }
})
