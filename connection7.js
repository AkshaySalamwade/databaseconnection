const mysql = require("mysql");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "practiceset",
};

const checkConnection = () => {
  const connection = mysql.createConnection(dbinfo);

  // ASYNC
  connection.connect();

  console.log("CONNECTION SUCCESS");

  // ASYNC
  connection.end();
};

checkConnection();