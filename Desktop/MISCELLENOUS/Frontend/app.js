let arr = [2,43,94,32];
arr.sayHello =()=>{
    console.log("Hi i am Readyy")
}

// function PersonMaker(name,age){
//     const person = {
//     name:name,
//     age:age,
//     talk(){
//      console.log(`You are very expert ${this.name}`);
//     },
//     }
//     return person;
// }
//CONSTRACTOR//
function Person(name,age){
   this.name=name;
    this.age=age;
};
Person .prototype.talk = function(){
console.log(`Hi,My name is shradha ${this.name}`);
}
let p1 = new Person("Asad",32);
let p2 = new Person("Asad",32);


// INHERITANCE OPERASTOR//
class Mammal{
    constructor(name){
    this.name=name;
    this.type="Warm booled";
    };
    eat(){
        console.log(`I am eating the food`);
    }
}
class Dog extends Mammal{
        constructor(name){
        super(name);
        }
        bark(){
            console.log("Woof...")
        }
    };


    class Person{
        constructor(name,age){
        console.log("Student class room")
        this.name=name;
         this.age=age;
     }
    
     talk(){
        console.log(`Hi,I am ${this.name}`)
     }
    }
    class Student extends Person() {
    constructor(name,age,marks){
    super(name,age);
    this.marks= marks;
    }
    talk(){
        console.log(`Hi,iam ${this.name}`)
    }
    }
    let stu1 = new Student("Amir akbar anthelpi",23,98);
   














































// class Mammal{
//     constructor(name){
//         this.name = name;
//         this.type = "warm-blooded";
//     }
//     eat (){
//     console.log("I am eating");
//     }
// }
// class Dog extends Mammal{
//     constructor(name){
//     super(name);
//     }
//     bark(){
//         console.log("Woof...")
//     }
// }
// class Cat extends Mammal{
//     constructor(name){
//     super(name);
//     }
//     meow(){
//         console.log("Wttoof...")
//     }
// }
