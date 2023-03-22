const fs = require("fs");

// //example 1
fs.writeFile("file3.txt", "Hello my name is Santosh,", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

//example 2
const content = "Some content!";
//parent directory
let dir = __dirname.split("/").slice(0, -1).join("/");
try {
  fs.writeFileSync(`${dir}/content.txt`, content);
  console.log("Saved!");
} catch (err) {
  console.error(err);
}

