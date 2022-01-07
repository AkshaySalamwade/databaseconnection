const mysql = require("mysql");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "practiceset",
};

const addUser = (user) => {
  const connection = mysql.createConnection(dbinfo);
  connection.connect();

  let sql = `INSERT INTO user (username, password, mobile, address) values ("${user.username}", "${user.password}", "${user.mobile}", "${user.address}")`;
  connection.query(sql);
  console.log("values inserted");
  connection.end();
};

// CALLING THE METHOD
const user = { username: "ABCD", password: "bhari", mobile:"996986548", address:"thane"   };
addUser(user);