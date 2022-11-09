//we can set the value using set and get
class Person {
    setfirstname(fn) {
        this.firstname = fn
    }
    setlastname(ln) {
        this.lastname = ln
    }
    setage(ag) {
        this.age = ag
    }
    getfirstname() {
        return this.firstname
    }
    getlastname() {
        return this.lastname
    }
    getag() {
        return this.age
    }
}
let poonam = new Person()
poonam.setfirstname('poonam')
poonam.setlastname('ghule')
poonam.firstname = "sharu"
poonam.city = 'pune'
console.log(poonam)
console.log(poonam.getfirstname())
console.log(poonam.city)

class Person2 {
    set setfirstname(fn) {
        this.firstname = fn
    }
    set setlastname(ln) {
        this.lastname = ln
    }
    set setage(ag) {
        this.age = ag
    }
    get getfirstname() {
        return this.firstname
    }
    get getlastname() {
        return this.lastname
    }
    get getag() {
        return this.age
    }
}
let obj=new Person2()
obj.setfirstname="monika"
obj.setlastname="gosavi"
obj.setage=25
console.log(obj)
console.log(obj.getfirstname)

