const veggies = ["tomato", "cucumber", "onion", "garlic", "ginger"];

veggies.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

veggies.filter((item) => {
  if (item.includes("g")) console.log(item);
});

const resultMap = veggies.map((item) => {
  return item.slice(0, 3);
});

console.log(resultMap);

// convert object to an array
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};

const array = [];
const key = Object.keys(drone);

let i = 1;
convertResult = key.forEach((item) => {
  array.push(item, drone[item]);
  console.log(i);
  i++;
});

console.log(array);

// use Map
const map = new Map();
map.set(1, "The Champion");
map.set(2, "The Runner-up");
map.set(3, "The third place");

console.log(map);

console.log(map.get(1));

// use Set
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const set = new Set(repetitiveFruits);

console.log(set);

// use spread operator

const numbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

const sumNumber = numbers.reduce((acc, number) => acc + number, 0);
console.log(sumNumber);

const restSumNumber = (...numbers) => {
  return numbers.reduce((acc, number) => acc + number);
};
console.log(restSumNumber(1, 2, 3, 4, 5, 6, 7));

const angka = [1, 2, 3];
console.log(...angka); // Output: 1 2 3
console.log(angka);

const fruit = ["apple", "orange", "avocado", "pear"];
const veggiesAndFruits = [...fruit, ...veggies];
console.log(veggiesAndFruits);

// Part 1: Separate Array Elements
const topSixRestaurants = [
  "Chick-fil-A",
  "In-N-Out",
  "Chipotle",
  "McDonald's",
  "Taco Bell",
  "KFC",
];

function unknownArgs(...args) {
  // args.forEach((arg) => {
  //   console.log(arg);
  // });
  // or
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");

// Part 3: Merge Arrays
const favoriteBaseballTeams = [
  "Yankees",
  "Mets",
  "Dodgers",
  "Giants",
  "Red Sox",
  "Cubs",
];
const favoriteFootballTeams = [
  "Patriots",
  "Giants",
  "Jets",
  "Eagles",
  "Steelers",
  "Cowboys",
];

const favoriteTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams];
console.log(favoriteTeams);
