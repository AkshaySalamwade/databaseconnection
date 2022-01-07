const mysql = require("mysql");
const Promise = require("bluebird");
const ret = require("bluebird/js/release/util");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "practiceset",
};

async function checkConnection() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Success");
  await connection.endAsync();
}

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Success");
  let sql = `insert into user(username, password,mobile, address) values (?,?,?,?)`;
  await connection.queryAsync(sql, [user.username,user.password,user.mobile,user.address]);
  await connection.endAsync();
}

// checkConnection();

const user = {
  username: "Arya",
  password: "Akshay123",
  mobile:"23569894",
  address:"pune",
  
};

// addUser(user);

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Success");
  let sql = `select * from user`;
  const list = await connection.queryAsync(sql,[]);
  await connection.endAsync();
  console.log(list);
  return list;
}

// selectUser();

module.exports = { selectUser, addUser };