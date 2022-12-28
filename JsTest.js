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

var JsonString = convert.xml2json(XMLString, {
  compact: true,
  spaces: 4,
});
var RawJson = JSON.parse(JsonString);

console.log(typeof XMLString);
console.log(typeof RawJson);

function WriteJsonToFile() {
  fs.writeFileSync("Response.json", JSON.stringify(RawJson), (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("File written successfully.");
    }
  });
}

var JsonTreeBlockArray =
  RawJson.Definitions.ShipBlueprints.ShipBlueprint.CubeGrids.CubeGrid[0]
    .CubeBlocks.MyObjectBuilder_CubeBlock;

let jsonArray = [];

for (let i = 0; i < JsonTreeBlockArray.length; i++) {
  jsonArray.push(JsonTreeBlockArray[i].SubtypeName._text);
}

console.log(jsonArray);
