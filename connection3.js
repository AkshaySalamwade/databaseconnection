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
const user = { username: "virat", password: "ganesh123", mobile:"905699235", address:"chennai"};
let sql = `INSERT INTO user (username, password, mobile, address) values ("${user.username}", "${user.password}","${user.mobile}","${user.address}" )`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();