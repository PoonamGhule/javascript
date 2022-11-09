
class Person {
    static firstname = "poonam"
    static lastname = "ghule"
    static display() {
        console.log(Person.firstname + Person.lastname)
    }

}
Person.display()
console.log(Person.firstname)

//encapsulation

class Person2 {
    constructor(fn, ln) {
        let firstname2 = fn
        let lastname2 = ln
        this.display2=function(){
            console.log(firstname2+lastname2)
        }
    }
}
let obj= new Person2("monika","gosavi")
obj.display2()
console.log(obj.firstname2)
