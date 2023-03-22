console.log(__dirname);
console.log(__filename);

//move up one directory
let dir = __dirname.split("/").slice(0, -2).join("/");
console.log(dir);
