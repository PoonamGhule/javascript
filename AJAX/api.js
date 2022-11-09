// https://reqres.in/api/users?page=${page}
//https://reqres.in/api/users/${id}

function getuser(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function (res) {
            console.log(res)
            return res.json()
        })
        .then(function (res) {
            console.log(res)
            //renderhtml(res.data[3])   //for one user

            // res.data.forEach(function(el){    // for all user
            //     renderhtml(el)
            // });
        })
}
getuser(2)

// function renderhtml(obj){
//     document.write(`<h1>${obj.first_name}</h1>`)
//     document.write(`<h1>${obj.last_name}</h1>`)
//     document.write(`<h1>${obj.email}</h1>`)
//     document.write(`<h1>${obj.id}</h1>`)
//     document.write(`<img src=${obj.avatar}>`)
// }



