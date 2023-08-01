let array = [
  "bmw",
  "sonata",
  "fiat",
  {
    name: "sonata",
    hp: 1000,
    start: function () {
      console.log("engine stop");
    },
    stop: function () {
      console.log("engine stop");
    },
  },
];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log(array[3]);
