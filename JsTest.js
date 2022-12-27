const fs = require('fs');

fs.readFile('./bp.sbc', 'utf8', (error, contents) => {
    if (error) {
      console.error(error);
    }
    else {
      console.log(contents);
    }
});