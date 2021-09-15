// class Person {
//     constructor(name) {
//         this.name = name;        
//     } 

//     printName() {
//         setTimeout(function() {
//             console.log(this.name);
//         }, 1000); 
//     }

//     myName() {
//         setTimeout(() => console.log(this.name), 500); 
//     }
// }
// let person = new Person('rejan'); 
// person.printName();
// person.myName(); 

var globalObject = this;
var foo = (function() { return this});
console.log(foo() === globalObject); // false

let temp = {
    bar: foo
}; 

temp.bar();


var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

let arrowTemp = {
    bar: foo
}; 
arrowTemp.bar();