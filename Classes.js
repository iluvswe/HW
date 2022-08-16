class Hamster {
    constructor(owner = "", name, price) {
    this.owner = owner;
    this.name = name;
    this.price = 15;
    }

    wheelRun() { console.log("squeak squeak"); }
  
    eatFood() { console.log("nibble nibble"); }
  
    getPrice() { return this.price; }}
  
  class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, 
        hamsters = [], bankAccount = 0) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.mood = mood;
      this.hamsters = hamsters;
      this.bankAccount = bankAccount;
    }
    getName() { return this.name; }
  
    getAge() { return this.age; }
    
    getWeight() { return this.weight; }
  
    greet() { console.log(`Hi there, ${this.name}`); }
  
    eat() {
      this.weight++;
      this.mood++;
    }
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount - hamster.getPrice(hamster);
    }}
  
  const Timmy = new Person("Timmy");

  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();

  Timmy.eat();
  Timmy.eat();
  Timmy.eat();
  Timmy.eat();
  Timmy.eat();

  Timmy.exercise();
  Timmy.exercise();
  Timmy.exercise();
  Timmy.exercise();
  Timmy.exercise();

  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  
  const Gus = new Hamster("Timmy", "Gus");
  Timmy.buyHamster(Gus);
  
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  Timmy.ageUp();
  
  Timmy.eat();
  Timmy.eat();
  Timmy.exercise();
  Timmy.exercise();

//Chef Makes Dinner

class Dinner {
    constructor (type, appetizer, entree, dessert)  {
    this.type = type;
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert; }}
      
class Chef {
    constructor (meal) {
    this.meal = meal;
    }

    cookMeal (appetizer, entree, dessert) {
    const Lunch = Lunch(this.meal, appetizer, entree, dessert);
          this.meal.push(newDinner);
        }}
    
    
      
    