// basic difference between map and object 
// object property are only string
// but map can have any other datatype as property

let map=new Map([
    ['firstname',"poonam"],
    ['true',"married"],
    [2017,"year of marriage"]
])
console.log(map)

for(let key of map.keys()){
    console.log(key)
}

for(let val of map.values()){
    console.log(val)
}

for(let [a,b] of map.entries()){
    console.log(a,b)
}

let mapB=new Map()
mapB.set('firstname','poonam')
mapB.set(true,'married')
mapB.set(1,'kid')
console.log(mapB)

for(let key of mapB.keys()){
    console.log(key)
}

for(let val of mapB.values()){
    console.log(val)
}

for(let [a,b] of mapB.entries()){
    console.log(a,b)
}

console.log(mapB.has('firstname'))

console.log(mapB.get(true))
console.log(mapB.delete('firstname'))
console.log(mapB)