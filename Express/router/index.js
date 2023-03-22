const express = require("express");
const app = express();
const user = require("./routes/user");
const about = require("./routes/about");

const port = process.env.Port || 5000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/user", user);
app.get("/about", about);

app.listen(port, () => {
  console.log(`Server is listing on port:${port}`);
});
