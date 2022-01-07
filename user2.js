const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY
let sql = `INSERT INTO user (username, password) values ("akshay", "akshay123")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();