
//ES6
class Person {
    constructor(fn, ln, age) {
        this.firstname = fn
        this.lastname = ln
        this.age = age
        this.display = function () {
            console.log(this.firstname + this.lastname)
        }
    }
}
let poonam = new Person('poonam', 'ghule', 29)
console.log(poonam.firstname)
poonam.display()

//object.create

let obj = {
    init: function (fn, ln, ag) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.display=function(){
            console.log(this.firstname+this.lastname)
        }
    }
}
let monika = Object.create(obj)
monika.init('monika','gosavi',25)
console.log(monika)
console.log(monika.firstname)