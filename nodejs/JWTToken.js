let jwt = require("jsonwebtoken");
let privateKey = "dkfkjaewlsdklfjsajkldf";
var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
jwt.sign(
  {
    userId: 1,
    userEmail: "skymill2000",
  },
  tokenKey,
  {
    expiresIn: "10d",
    issuer: "fintech.admin",
    subject: "user.login.info",
  },
  function (err, token) {
    console.log("로그인 성공", token);
    res.json(token);
  }
);
