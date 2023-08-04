var express = require("express");
const mysql = require("mysql2");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@AipersGroupWarePro12!@",
  database: "fintech",
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/test", function (req, res) {
  res.send("test page 입니다.");
});

app.get("/user", function (req, res) {
  console.log(req.query.test);
  res.send("hello world");
});

app.post("/user", function (req, res) {
  console.log(req.body);
  res.send("hello world");
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const sql = "SELECT * FROM user WHERE email = ?";
  connection.query(sql, [email], function (err, result) {
    if (err) throw err;
    if (result.length === 0) {
      console.error("등록되지 않ㅇ느사용자입니다.");
    } else {
      console.log(result[0].password);
      const dbPassword = result[0].password;
    }
  });
  res.send("hello world");
});

app.listen(4000);
