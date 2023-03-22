import { ParseSourceFileToResultJSON } from "./Functions/ParseSourceFileToResultJSON";

const fs = require("fs");
const TotalListObject = {
  Blocks: [],
};

fs.readFile(
  "./CubeBlocks/convertedJsonExample.json",
  "utf8",
  (err, fileContent) => {
    const jsonObj = JSON.parse(fileContent);

    ParseSourceFileToResultJSON(jsonObj);

    WriteResToJSON(TotalListObject);
  }
);

function WriteResToJSON(fileToWrite) {
  console.log(fileToWrite);
  fs.writeFileSync("output.json", JSON.stringify(fileToWrite, null, 2));
  console.log("Done writing to file.");
}

// console.log(
//   `\n Single-component Block: ${
//     block.Id.SubtypeId
//   }, components: ${JSON.stringify(block.Components)} \n`
// );
