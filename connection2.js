const mysql = require("mysql");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "practiceset",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY
let sql = `INSERT INTO user (username, password, mobile, address) values ("akshay", "akshay123", "8652678794","navi-mumbai")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();