var express = require("express");
let crypto = require("crypto");
const mysql = require("mysql2");
const axios = require("axios");
const secret = "abcdefg";
let jwt = require("jsonwebtoken");
const auth = require("./lib/auth");
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
app.get("/", auth, function (req, res) {
  console.log(req.decoded);
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
  console.log(email, password);
  const sql = "SELECT * FROM user WHERE email = ?";
  connection.query(sql, [email], function (err, result) {
    if (err) throw err;
    if (result.length === 0) {
      console.error("등록되지 않ㅇ느사용자입니다.");
    } else {
      console.log(result[0].password);
      const dbPassword = result[0].password;
      const hashPassword = hash(password);
      console.log(dbPassword, password);
      if (true) {
        var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
        jwt.sign(
          {
            userId: result[0].id,
            userEmail: result[0].email,
          },
          tokenKey,
          {
            expiresIn: "10d",
            issuer: "fintech.admin",
            subject: "user.login.info",
          },
          function (err, token) {
            if (err) {
              console.error(err);
            }
            console.log("로그인 성공", token);
            res.json(token);
          }
        );
      } else {
        res.json("?");
      }
    }
  });
});

app.get("/account", auth, (req, res) => {
  let { userId } = req.decoded;
  const sql = "SELECT * FROM user WHERE id = ?";
  connection.query(sql, [userId], function (err, result) {
    const accesstoken = AESDecrypt(result[0].accesstoken);
    const userSeqNo = result[0].userseqno;
    console.log(accesstoken);
    const sendData = {
      user_seq_no: userSeqNo,
    };
    const option = {
      method: "GET",
      url: "https://testapi.openbanking.or.kr/v2.0/user/me",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
      params: sendData,
    };
    axios(option).then(({ data }) => {
      res.json(data);
    });
  });
});

const hash = (input) => {
  return crypto.createHmac("sha256", secret).update(input).digest("hex");
};

const AESDecrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
  const iv = "oNYgvfAAoAUb9mmD";
  const cipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = cipher.update(plainTxt, "base64", "utf8");
  decrypted += cipher.final("utf-8");
  console.log(decrypted);
  return decrypted;
};

app.listen(4000);
