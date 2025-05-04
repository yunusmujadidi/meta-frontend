function testBracketsDynamicAccess() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

const car = { speed: 70, color: "blue" };

for (let key in car) {
  console.log(key);
}
for (let key of Object.values(car)) {
  console.log(key);
}
for (let key of Object.keys(car)) {
  console.log(key);
}
