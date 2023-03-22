const mysql=require('mysql');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

con.connect(err =>{
    if (err) throw err;
    console.log("Database Connected!");

    //create database
    con.query("create database if not exists mydb",(err)=>{
        if (err) throw err;
        console.log("Database Created!");
    });

    //select database
    con.changeUser({database:'mydb'},(err)=>{
        if (err) throw err;
        console.log("Database selected!");
    });

    //create table
    var sql="create table if not exists geolocation(latitude decimal(16,14),longitude decimal(16,14),date timestamp,timezone varchar(50),browser varchar(255),platform varchar(50),screen varchar(10));";
    con.query(sql,(err) =>{
        if (err) throw err;
        console.log("table created!");
    });

    //inserting value
    var isql="insert into geolocation values ?";
    var values=[
        lat,
        lon,
        date,
        timezone,
        browser,
        platform,
        screen
    ];
});