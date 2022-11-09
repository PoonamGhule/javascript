//set cannot store value by index
//set doesnot store duplicate values

let set= new Set()
//ADD
set.add('apple')
set.add('mango')
set.add('pineapple')
set.add('chikoo')
console.log(set)
//HAS
let a=set.has('apple')
console.log(a)
let a1=set.has('orange')
console.log(a1)
//DELETE
let a3=set.delete('apple')
console.log(a3)
console.log(set)
//CLEAR
set.clear()
console.log(set)

set.forEach(function(el){
    console.log(el)
})

let setB=new Set([11,22,33,44,566,5,33,33,3,45,6])
console.log(setB)

let setC=new Set("poonam")
console.log(setC)

setC.forEach(function(el){
    console.log(el)
})

