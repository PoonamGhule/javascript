// function Person(fn, ln, ag) {
//     this.firstname = fn
//     this.lastname = ln
//     this.age = ag
//     this.display = function () {
//         console.log(this.firstname + this.lastname)
//     }
// }
// let monika=new Person('monika','gosavi',25)
// let poonam=new Person('poonam','ghule',29)

// console.log(monika)
// console.log(poonam)
// poonam.display()

function Person(fn, ln, ag) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    // this.display = function () {
    //     console.log(this.firstname + this.lastname)
    // }
}
let monika=new Person('monika','gosavi',25)
let poonam=new Person('poonam','ghule',29)

console.log(monika)
console.log(poonam)
//poonam.display()

console.log(monika.__proto__==Person.prototype)

Person.prototype.display=function(){
    console.log(this.firstname + this.lastname)
}
poonam.display()
console.log(monika)
