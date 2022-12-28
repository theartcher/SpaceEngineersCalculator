const fs = require("fs");
var convert = require("xml-js");

const XMLString = fs.readFileSync("./bp.sbc", "utf8", (error, contents) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Ran through function.");
  }
  return contents;
});

var ResultsJsonString = convert.xml2json(XMLString, {
  compact: true,
  spaces: 4,
});

var ResultsJsonObject = JSON.parse(ResultsJsonString);

console.log(typeof XMLString);
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

var SpecificJson =
  ResultsJsonObject.Definitions.ShipBlueprints.ShipBlueprint.CubeGrids
    .CubeGrid[0].CubeBlocks;

console.log(SpecificJson);
