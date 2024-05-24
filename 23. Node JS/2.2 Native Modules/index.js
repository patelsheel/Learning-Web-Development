const fs = require("fs");
/*
fs.writeFile("message.txt", "Hello from NodeJs!", (err) =>{
    if (err) throw err; 
    console.log("The file has been saved!");
});*/

//Read a file
fs.readFile('/Users/sheelpatel/Library/Mobile Documents/com~apple~CloudDocs/WebDevelopment/23. Node JS/2.2 Native Modules/message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
