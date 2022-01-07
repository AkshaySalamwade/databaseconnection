const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "practiceset",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO user (username, password, mobile, address) values (?, ?, ?, ?)`;
  connection.queryAsync(sql, [user.username, user.password, user.mobile, user.address]);
  console.log("Record Added!");

  await connection.endAsync();
};

const user = { username: "arya", password: "akshay123", mobile:"865497864", address:"nagpur" };
addUser(user);