function getuser(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (res) {
            //console.log(res)
            return res.json()
        }).then(function (res) {
            //console.log(res)
            return res
        })
}
//getuser(2)

function getid(id) {
   return  fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            //console.log(res)
            return res
        })
}
//getid(7)

getuser(2).then(function(res){
    console.log(res)
   let id= res.data[2].id
    return getid(id)
})
.then(function(res){
    console.log(res)
})
