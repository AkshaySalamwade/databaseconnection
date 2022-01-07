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

  // ANYONE CAN HACK THIS. ::  SQL INJECTION
  // let sql = `INSERT INTO user (username, password) values ("${user.username}", "${user.password}")`;
  let sql = `INSERT INTO user (username, password, mobile, address) values (?, ?, ?, ?)`;
  connection.query(sql, [user.username, user.password, user.mobile, user.address ]); // MASKING THE QUERY PARAMES

  console.log("USER ADDED");

  connection.end();
};

const user = { username: "arvind", password: "arvind123", mobile: "99568794", address:"pune" };
addUser(user);