class Animal {
    constructor(name, speak) {
        this.name = name; 
        this.speak = speak;
    }

    sayHi() {
        return `the ${this.name} runs up and ${this.speak}s at you!`;
    }
}

class Dog extends Animal {
    constructor(name, speak) {
        super(name, speak);
    }

    sayHi(){
        return `${this.name} runs in a circle and ${this.speak}s at you! Adorable.`
    }

}

class Cat extends Animal {
    constructor(name, speak) {
        super(name, speak);
    }

    sayHi() {
        return `${this.name} flops over and ${this.speak}s at you. Aww!`;
    }

}

let wolf = new Animal ("wolf", "howl");
let dusty = new Cat ("Dusty", "meow"); 
let indy = new Dog ("Indy", "bark");

console.log(wolf.sayHi());
console.log(dusty.sayHi());
console.log(indy.sayHi());

/////////////////////////////

try {
    module.exports = Animal;
  } catch {
    module.exports = null;
  }

  try {
    module.exports = Dog;
  } catch {
    module.exports = null;
  }

  try {
    module.exports = Cat;
  } catch {
    module.exports = null;
  }