let car = {
  name: "sonata",
  hp: 1000,
  start: function () {
    console.log("engine stop");
  },
  stop: function () {
    console.log("engine stop");
  },
};

let carname = car.name;
let carhp = car.hp;
console.log(carname, carhp);

let { name, hp } = car;
console.log(name, hp);
