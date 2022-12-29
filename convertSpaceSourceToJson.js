// const fs = require("fs");
// const path = require("path");
// var convert = require("xml-js");

// fs.readdir("./blocks", (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   for (const file of files) {
//     const filePath = path.join("./blocks", file);
//     const XMLString = fs.readFileSync(filePath, "utf8", (error, contents) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log("Ran through function.");
//       }
//       return contents;
//     });

//     var JsonString = convert.xml2json(XMLString, {
//       compact: false,
//       spaces: 4,
//     });

//     var RawJson = JSON.parse(JsonString);

//     fs.writeFileSync(`${file}.json`, JSON.stringify(RawJson), (error) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log("File written successfully.");
//       }
//     });
//   }
// });

const fs = require("fs");
let resultsArray = [];
let errorCount = 0;

fs.readdir("./blocksJSON", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  //Loop through files
  for (const file of files) {
    const fileContents = fs.readFileSync(`./blocksJSON/${file}`, "utf8");
    const fileJson = JSON.parse(fileContents);

    for (let i = 0; i < files.length; i++) {
      try {
        let tempResult =
          fileJson.elements[0].elements[0].elements[i].elements[0].elements[1]
            .elements[0].text;
        if (!tempResult) {
          return;
        } else
          var tempObject = {
            Name: `${tempResult}`,
          };
        resultsArray.push(tempObject);
      } catch (error) {
        errorCount++;
        console.log(error + " IN " + file);
        console.log(resultsArray);
        console.log(errorCount);
      }
    }
  }
});
