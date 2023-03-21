const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

const directoryPath = "./CubeBlocks";
let i = 1;

fs.readdir(directoryPath, (err, cubeFiles) => {
  cubeFiles.forEach((file) => {
    if (path.extname(file) === ".xml") {
      const filePath = path.join(directoryPath, file);

      fs.readFile(filePath, "utf8", (err, fileXML) => {
        if (err) {
          return console.error(err);
        }
        // console.log(i++);

        xml2js.parse(fileXML, function (err, fileJSON) {
          console.dir(fileJSON);
          console.log(typeof fileJSON);
          JSON.parse(fileJSON, function (key, value) {
            if (key == "Definition") {
              console.log("Found one");
            }
          });
        });
      });
    }
  });
});
