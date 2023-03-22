const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");

const app = express();

//init middle ware
//app.use(logger);

//Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage
app.get("/", (req, res) => res.render("index"));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//Persons API Routes
app.use("/api/persons", require("./routes/api/persons"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listing on port:${port}`));
