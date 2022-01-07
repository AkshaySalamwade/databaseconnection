const mysql = require("mysql");
const procss = require("process");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "practiceset",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY :: READING THE VLAUE FROM COMMAND LINE USING ARGUMENT
const user = { username: procss.argv[2], password: procss.argv[3], mobile: procss.argv[4] ,address: procss.argv[5] };
let sql = `INSERT INTO user (username, password, mobile, address) values ("${user.username}", "${user.password}","${user.mobile}","${user.address}")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();