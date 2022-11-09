let city = "pune"
for(let j = 0 ; j < city.length ; j++){
    console.log(j)
    //console.log(city[j])
}

for(let i = 4 ; i >= 0 ; i--){
   //console.log(i)
   console.log(city[i])
}

let city2 = "i"
switch(city){
    case "pune":
        console.log("MH")
    case 'indore':
        console.log('MP')
    case 'jaipur':
        console.log('RJ')
    default:
        console.log('invalid city')
}

let city22 = "indore"
switch(city22){
    case "pune":
        console.log("MH")
        break;
    case 'indore':
        console.log('MP')
        break;
    case 'jaipur':
        console.log('RJ')
        break;
    default:
        console.log('invalid city')
}