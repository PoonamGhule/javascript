let obj = {
    firstname: 'poonam',
    lastname: 'ghule',
    display: function () {
        console.log(this.firstname + this.lastname)
    }
}
obj.display()

let obj2=obj.display
obj2()
 
let myself={
    firstname:'monika',
    lastname:'gosavi'
}
let myself2={
    firstname:'priti',
    lastname:'raut'
}

let info=obj2.bind(myself)
info()

let info2=obj2.bind(myself2)
info2()

obj2.call(myself2)
obj2.apply(myself2)

let info3={
    firstname:"poonam",
    lastname:"ghule",
    age:29
}

let mydata=function(){
    console.log(this.firstname+this.lastname)
}
let d=mydata.call(info3,'hello','hii')
console.log(d)

// mydata.apply(info3,['hello'])

// let b=mydata.bind(info3)
// b('hii')
