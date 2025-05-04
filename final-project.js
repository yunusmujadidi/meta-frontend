// Dishes Data
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.2;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
  if (typeof taxBoolean !== "boolean") {
    console.log("You need to pass a boolean to the getPrices call!");
    return;
  }
  for (let i = 0; i < dishData.length; i++) {
    let finalPrice = taxBoolean
      ? (dishData[i].price * tax).toFixed(2)
      : dishData[i].price.toFixed(2);

    if (taxBoolean) {
      console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
    } else {
      console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
    }
  }
}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  if (typeof guests !== "number" && (guests <= 0 || guests >= 30)) {
    console.log("The second argument must be a number between 0 and 30");
  }
  let discount = guests < 5 ? 5 : 10;
  console.log("Discount is: $" + discount);
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
getDiscount(false, 10);
