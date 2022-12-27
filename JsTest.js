const fs = require("fs");
var convert = require("xml-js");

const results = fs.readFileSync("./bp.sbc", "utf8", (error, contents) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Ran through function.");
  }
  return contents;
});

var ResultsJsonString = convert.xml2json(results, { compact: true, spaces: 4 });
var ResultsJsonObject = JSON.parse(ResultsJsonString);

console.log(typeof results);
console.log(typeof ResultsJsonObject);

fs.writeFileSync(
  "Response.json",
  JSON.stringify(ResultsJsonObject),
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("File written successfully.");
    }
  }
);
