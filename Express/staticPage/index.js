const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.Port || 5000;
app.listen(port, () => console.log("Server listing on Port:" + port));
