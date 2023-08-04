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

AESEncrypt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2OTg3MzI2NjgsImp0aSI6IjdjNmQ3YTU1LTViMDYtNDVkYi1hNTk5LTg1MDQ2Y2FjZDNmNSJ9.UHVSxOs1aQ1pNkG_VffBr0_KEKrn7o-rj-VZA-A8EmY"
);

const AESDecrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "tDAArT4tgoJra4AVYYUgt9Nvb9aImrTm";
  const iv = "oNYgvfAAoAUb9mmD";
  const cipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = cipher.update(plainTxt, "base64", "utf8");
  decrypted += cipher.final("utf-8");
  console.log(decrypted);
};

AESDecrypt(
  "Oc//x6KviGTY48VIIrc5hPnmxqh5mFNx0zJwxdn+v8JOzpmKJoeON9zfCKO+fiIyNKiOh8ZKgfbQhJOyCUyhmtmB2KNzsD6d9DvHqYt7niRP5VLqu/eEJ8+LkQSAsiS1TH7fSosOGyFmYH1Wrdqg1x/d2k35OCxFJxHmSuzdq9GJIFj20J3BkKrpPUGpbxX3F0z97dEVlLbMGDNnC7gMIdxZXplg3G1NaqCRKue9PRiLtbM+jLdM9SWPF2iMASph76AG2djjluF5VxSgl8LvJISm1TAblh5TneiXTyMBYV9CY5WZ8HyJwauQ8u+Yft5g4p5X7yFZ/Er5GJgXNDQF9+/DKLNsI+oVz7s4QJwZLuRdIN6XauoK14n3Xamy1lHm17J5cYwkUJK+s6cT0P7Sdg=="
);
