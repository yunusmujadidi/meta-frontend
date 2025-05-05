// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
class Person {
  // WRITE YOUR CODE HERE - Add a constructor with default parameters
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  // WRITE YOUR CODE HERE - Add the sleep() method
  sleep() {
    this.energy += 10;
  }
  // WRITE YOUR CODE HERE - Add the doSomethingFun() method
  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
class Worker extends Person {
  // WRITE YOUR CODE HERE - Add a constructor with additional parameters
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  // WRITE YOUR CODE HERE - Add the goToWork() method
  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
  const intern = new Worker("Bob", 21, 110, 0, 10);
  // WRITE YOUR CODE HERE - Call the goToWork() method
  intern.goToWork();
  // WRITE YOUR CODE HERE - Return the intern object
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
  const manager = new Worker("Alice", 30, 120, 100, 30);
  // WRITE YOUR CODE HERE - Call the doSomethingFun() method
  manager.doSomethingFun();
  // WRITE YOUR CODE HERE - Return the manager object
  return manager;
}
