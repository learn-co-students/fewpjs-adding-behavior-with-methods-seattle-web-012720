// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.speak() = `${name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.speak() = `${name} says woof!`;
    }  }
  
  class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        if (sex === 'male') {
            this.speak() = `It's me! ${name} the parrot!`;
        } else {
            this.speak() = `${name} says squawk!`;
        }
    }  
}