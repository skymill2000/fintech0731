let crypto = require("crypto");
const secret = "abcdefg";

const hash = (input) => {
  return crypto.createHmac("sha256", secret).update(input).digest("hex");
};

const AESEncrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
  const iv = "oNYgvfAAoAUb9mmD";
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plainTxt, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log(encrypted);
};

// AESEncrypt("");
// AESDecrypt("");

const AESDecrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
  const iv = "oNYgvfAAoAUb9mmD";
  const cipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = cipher.update(plainTxt, "base64", "utf8");
  decrypted += cipher.final("utf-8");
  console.log(decrypted);
};

AESDecrypt("BHH3zWvc/D+AuxB1jGOZ8doMqLEcNk1KKUjYLZnZeHU=");
