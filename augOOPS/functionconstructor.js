//function constructor

function vehicle(color, type) {
    this.color = color
    this.type = type
    this.start = function () {
        console.log("my favourite car is " + this.color + " " + this.type)
    }
}
let swift = new vehicle('grey', 'dzire')
console.log(swift)
swift.start()
swift.modelno = 2535
console.log(swift)

//ES6 constructor

class Fruit {
    constructor(color, taste) {
        this.color = color
        this.taste = taste
        this.eat = function () {
            console.log('fruit is very delicious')
        }
    }
}
let apple=new Fruit('red','sweet')
apple.smell='good'
console.log(apple)
apple.eat()

