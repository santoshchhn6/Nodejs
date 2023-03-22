const express = require("express");
const mysql = require("mysql");
const app = express();
app.listen(3000, () => console.log("listening at 3000.."));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

//Database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});
con.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");

  //create database
  con.query("create database if not exists mydb", (err) => {
    if (err) throw err;
    console.log("Database Created!");
  });

  //select database
  con.changeUser({ database: "mydb" }, (err) => {
    if (err) throw err;
    console.log("Database selected!");
  });

  //create table
  var sql =
    "create table if not exists geolocation(latitude decimal(16,14),longitude decimal(16,14),date timestamp,timezone varchar(50),browser varchar(255),platform varchar(50),screen varchar(10));";
  con.query(sql, (err) => {
    if (err) throw err;
    console.log("table created!");
  });
});
// function insData(lat,lon,timestamp,timezone,browser,platform,screen){
//     con.query("insert into geolocation values (?,?,?,?,?,?,?)",[lat,lon,timestamp,timezone,browser,platform,screen],(err,result)=>{
//         if (err) throw err;
//         console.log("Record Inserted");
//     });
// }

app.post("/api", (request, response) => {
  console.log("I got a request!");

  var lat = request.body.lat;
  var lon = request.body.lon;
  var timestamp = request.body.date + " " + request.body.time;
  var timezone = request.body.timezone;
  var browser = request.body.browser;
  var platform = request.body.platform;
  var screen = request.body.screenW + "x" + request.body.screenH;

  insData(lat, lon, timestamp, timezone, browser, platform, screen);
  //console.log(lat+"\n"+lon+"\n"+timestamp+"\n"+timezone+"\n"+browser+"\n"+platform+"\n"+screen);

  const data = request.body;
  response.json({
    status: "success",
    latitude: data.lat,
    longitude: data.lon,
  });
});
