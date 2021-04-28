function Animal(name, age) {
   this.name = name;
   this.age = age;
   this.getFullName = function () {
     console.log(name, age);
   }
}

Animal.prototype.getAge = function () {
     return this.age;
}

let animal = new Animal("kuta", 20);

console.log(animal);
console.log(animal.name);
console.log(animal.getFullName());
console.log("age", animal.getAge());
console.log(animal.constructor === Animal)



console.log("---------------------------------");
function Dog(name, age, type) {
  Animal.call(this, name, age);
  this.type = type;
  this.getName = function() {
    console.log(this.name, this.age, this.type);
  }
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
let dog = new Dog('bda kutta', 35, "street");

console.log(dog);
console.log(dog.name);
console.log(dog.getName());
console.log(dog.getFullName());
console.log("dog age", dog.getAge());
console.log(dog.constructor);
console.log(dog instanceof Animal);
