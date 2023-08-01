const array = ["a", "b", "c", "d", "e", "f"];

console.log("-0-");
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

console.log("-1-");
for (element of array) {
  console.log(element);
}

console.log("-2-");
array.map((element) => {
  console.log(element);
});
