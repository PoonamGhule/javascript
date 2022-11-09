//program 1
//lexical scope
// all value of parent function are accesible in child function
function addA() {
    let a = 10
    let b = 20
    console.log(a + b)
    function addB() {
        let c = 2
        let d = 3
        console.log(a + b + c + d)
        function addC() {
            let e = 22
            let f = 32
            console.log(a + b + e + f + c + d)
        }
        addC()
    }
    addB()
}
addA()

//closures

// function sub(){
//     let t=2
//     let t1=3
//     console.log(t+t1)
//     return t+t1
//     console.log("hello") // this line wiil not be print because after return no any value wiil be print
// }
// let q1=sub()
// console.log(q1)

//to overcome this we are using closures
//program2
function sub() {
    let t = 2
    let t1 = 3
    console.log(t + t1)
    return function d() {
        console.log(t + t1) //in that case this function is exicuted because of closure
    }
}
let q1 = sub()
q1()

//program 3

function substraction() {
    let f = 10
    let g = 20
    let display = function () {
        console.log(f + g)
    }
    let sub = function () {
        console.log(f + g)
    }
    return [display, sub]
}
let b = substraction()
b[0]()               //30
b[1]()               //30


//program 4
//diff b/w arrow function and function declaration/exprssion

var firstname = "keshav"
var lastname = "ghule"

let mydata = {
    firstname: "poonam",
    lastname: "ghule",
    age: 29,
    display: function () {
        console.log(this.firstname + this.lastname)
        function sub() { //in that function this keyword reffers to the window object
            console.log(this.firstname + this.lastname)
        }
        sub()
    }
}
mydata.display()
//output of above=poonamghule
                 //NaN
//on console op=poonamghule   bcoz firstname lastname globally declared
              //keshav ghule

//when we using arrow function the scope of arrow function is immidate parent
let mydata1 = {
    firstname: "poonam",
    lastname: "ghule",
    age: 29,
    display: function () {
        console.log(this.firstname + this.lastname)
        let sub = () => { //in that function this keyword reffers to the window object
            console.log(this.firstname + this.lastname)
        }
        sub()
    }
}
mydata1.display()

//output of above=poonamghule
                 //poonamghule

//if we do both two function as arrow function this keyword reffers to window 
//object and in window firstname and lastname declared then op is that o/w NaN or undefined

