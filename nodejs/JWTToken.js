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
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InNreW1pbGwyMDAwIiwiaWF0IjoxNjkxMTE2ODI4LCJleHAiOjE2OTE5ODA4MjgsImlzcyI6ImZpbnRlY2guYWRtaW4iLCJzdWIiOiJ1c2VyLmxvZ2luLmluZm8ifQ.btA5ac30XgwTVgzxfsWVwX7cosiDXQcFdewMGFMw0LM";
jwt.verify(token, tokenKey, function (err, decoded) {
  // err
  // decoded undefined
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(decoded);
  }
});
