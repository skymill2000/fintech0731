const cipher = require("./Ceasar");
const encData = cipher.encrypt(3, "hi how are you i am fine");
//kl krz duh brx l dp ilqh
const decData = cipher.decrypt(5, "kl krz duh brx l dp ilqh");
console.log(encData);
console.log(decData);
