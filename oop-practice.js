// class Animals -> Cat -> HouseCat, Tiger
//                  Bird -> Parrot

class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  sleep() {
    console.log("this animal is sleeping now");
    this.energy += 20;
    console.log("this animal gain 20 energy from sleep");
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log(
        `this animal is currently active and have lost 20 energy and have ${this.energy} left`
      );
    } else if (this.energy === 0) {
      console.log("Energy is 0. Procced to sleep unluck");
      this.sleep();
    } else {
    }
  }
  getColor() {
    console.log(`this animal have ${this.color} skin color`);
  }
}

class Cat extends Animal {
  constructor(
    sound = "meow",
    canJumpHigh = true,
    canClimbTree = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTree = canClimbTree;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = "BIRB", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    sound,
    canJumpHigh,
    canClimbTree,
    houseCatSound = "MEONG",
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTree, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option = true) {
    if (option) {
      super.makeSound();
    } else {
      console.log(this.houseCatSound);
    }
  }
}

class Tiger extends Cat {
  constructor(
    sound,
    canJumpHigh,
    canClimbTree,
    tigerSound = "ROAR",
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTree, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option = true) {
    if (option) {
      super.makeSound();
    } else {
      console.log(this.tigerSound);
    }
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option = true) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("Talking");
    }
  }
}

// Updated test code with proper parameter order
const polly = new Parrot(true, "chirp", true); // passing canTalk=true and sound="chirp"
const fiji = new Parrot(false, "chirp", true); // passing canTalk=false and sound="chirp"

console.log("--- Parrot Tests ---");
polly.makeSound(); // Should output: 'chirp' and 'Talking'
fiji.makeSound(); // Should output: 'chirp' only

console.log("--- Parrot Properties ---");
console.log(`Polly color: ${polly.color}`); // yellow
console.log(`Polly energy: ${polly.energy}`); // 100

console.log("--- Parrot Activity ---");
polly.isActive(); // Energy is decreasing, should be at: 80

console.log("--- Bird Creation ---");
const penguin = new Bird("shriek", false, "black and white", 200); // creating with custom properties
console.log(penguin); // Bird with custom properties

console.log("--- Penguin Properties ---");
console.log(`Penguin sound: ${penguin.sound}`); // 'shriek'
console.log(`Penguin can fly: ${penguin.canFly}`); // false
console.log(`Penguin color: ${penguin.color}`); // 'black and white'
console.log(`Penguin energy: ${penguin.energy}`); // 200

console.log("--- Penguin Activity ---");
penguin.isActive(); // Energy is decreasing, should be at: 180

// Additional tests for Cat subclasses
console.log("--- Cat Subclass Tests ---");
const fluffy = new HouseCat("meow", true, true, "purrrr", "orange", 120);
const rajah = new Tiger("growl", true, true, "ROARRR", "orange and black", 150);

console.log("--- HouseCat Tests ---");
fluffy.makeSound(); // Should output: meow
fluffy.makeSound(false); // Should output: purrrr
fluffy.getColor(); // Should output: this animal have orange skin color

console.log("--- Tiger Tests ---");
rajah.makeSound(); // Should output: growl
rajah.makeSound(false); // Should output: ROARRR
rajah.isActive(); // Energy decreasing from 150
