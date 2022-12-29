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
  RawJson.Definitions.ShipBlueprints.ShipBlueprint.CubeGrids.CubeGrid.CubeBlocks
    .MyObjectBuilder_CubeBlock;

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
    {
      Type: "LargeBlockArmorCornerSquare",
      Components: {
        SteelPlate: 7,
      },
    },
    {
      Type: "LargeBlockArmorCornerInv",
      Components: {
        SteelPlate: 21,
      },
    },
    {
      Type: "LargeBlockArmorCorner",
      Components: {
        SteelPlate: 4,
      },
    },
    {
      Type: "LargeBlockArmorSlope",
      Components: {
        SteelPlate: 13,
      },
    },
    {
      Type: "LargeBlockArmorRoundSlope",
      Components: {
        SteelPlate: 13,
      },
    },
    {
      Type: "LargeBlockArmorRoundCornerInv",
      Components: {
        SteelPlate: 21,
      },
    },
    {
      Type: "LargeBlockArmorRoundCorner",
      Components: {
        SteelPlate: 4,
      },
    },
    {
      Type: "LargeBlockArmorSlope2Base",
      Components: {
        SteelPlate: 19,
      },
    },
    {
      Type: "LargeBlockArmorHalfSlopedCorner",
      Components: {
        SteelPlate: 11,
      },
    },
    {
      Type: "LargeBlockArmorHalfCorner",
      Components: {
        SteelPlate: 6,
      },
    },
    {
      Type: "LargeBlockArmorHalfSlopeCorner",
      Components: {
        SteelPlate: 2,
      },
    },
    {
      Type: "LargeHalfSlopeArmorBlock",
      Components: {
        SteelPlate: 12,
      },
    },
    {
      Type: "LargeBlockArmorSlopedCornerTip",
      Components: {
        SteelPlate: 6,
      },
    },
    {
      Type: "LargeBlockArmorRaisedSlopedCorner",
      Components: {
        SteelPlate: 5,
      },
    },
    {
      Type: "LargeBlockArmorSquareSlopedCornerTip",
      Components: {
        SteelPlate: 17,
      },
    },
    {
      Type: "LargeBlockArmorSquareSlopedCornerBase",
      Components: {
        SteelPlate: 1189,
      },
    },
    {
      Type: "LargeBlockArmorSquareSlopedCornerTipInv",
      Components: {
        SteelPlate: 9,
      },
    },
    {
      Type: "LargeBlockArmorSlopedCornerBase",
      Components: {
        SteelPlate: 20,
      },
    },
    {
      Type: "LargeBlockArmorSlopedCorner",
      Components: {
        SteelPlate: 13,
      },
    },
    {
      Type: "LargeBlockArmorHalfSlopedCornerBase",
      Components: {
        SteelPlate: 11,
      },
    },
    {
      Type: "LargeBlockArmorInvCorner2Base",
      Components: {
        SteelPlate: 10,
      },
    },
    {
      Type: "LargeBlockArmorHalfSlopeInverted",
      Components: {
        SteelPlate: 22,
      },
    },
    {
      Type: "LargeBlockArmorHalfSlopeCornerInverted",
      Components: {
        SteelPlate: 23,
      },
    },
    {
      Type: "LargeBlockArmorInvCorner2Tip",
      Components: {
        SteelPlate: 16,
      },
    },
    {
      Type: "LargeBlockArmorInvCorner2Base",
      Components: {
        SteelPlate: 22,
      },
    },
    {
      Type: "ConveyorTubeCurved",
      Components: {
        BulletProofGlass: 4,
        Motor: 8,
        SmallSteelTube: 12,
        ConstructionComponent: 40,
        SteelPlate: 10,
      },
    },
    //All above this line work
  ],
};

let componentsArray = [];

jsonArray.forEach((item) => {
  let results = componentsJson.Blocks.find((x) => x.Type === item);
  if (results != undefined && results != null) {
    componentsArray.push(results);
  } else console.log(item);
});

// console.dir(componentsArray, { maxArrayLength: null });

const mergedObject = componentsArray.reduce(
  (acc, obj) => {
    for (const component in obj.Components) {
      if (acc.Components[component]) {
        acc.Components[component] += obj.Components[component];
      } else {
        acc.Components[component] = obj.Components[component];
      }
    }
    return acc;
  },
  { Components: {} }
);

console.log(mergedObject);
