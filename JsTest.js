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

function WriteJsonToFile() {
  fs.writeFileSync("Response.json", JSON.stringify(RawJson), (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("File written successfully.");
    }
  });
}
// WriteJsonToFile();

var JsonTreeBlockArray =
  RawJson.Definitions.ShipBlueprints.ShipBlueprint.CubeGrids.CubeGrid[0]
    .CubeBlocks.MyObjectBuilder_CubeBlock;

let jsonArray = [];

for (let i = 0; i < JsonTreeBlockArray.length; i++) {
  jsonArray.push(JsonTreeBlockArray[i].SubtypeName._text);
}

let componentsJson = {
  Blocks: [
    {
      Type: "LargeBlockArmorBlock",
      Components: {
        SteelPlate: 25,
      },
    },
    {
      Type: "LargeBlockArmorCornerSquareInverted",
      Components: {
        SteelPlate: 19,
      },
    },
  ],
};

let componentsArray = [];

jsonArray.forEach((item) => {
  let results = componentsJson.Blocks.find((x) => x.Type === item);
  if (results != undefined && results != null) {
    componentsArray.push(results);
  } else console.log(item);
});

console.log(componentsArray);
