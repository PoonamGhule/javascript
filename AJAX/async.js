
//sync 
function addA() {
    console.log('a')
}
function addB() {
    console.log('b')
}

// addB()
// addA()

function addC() {
    console.log('c')
}

function addD() {
    setTimeout(function () {
        console.log('d')
    }, 2000)
}

// addD()
// addC()

//async code
function mul() {
    setTimeout(function () {
        console.log('user created')
    }, 3000)
    setTimeout(function () {
        console.log('get id')
    }, 2000)
    setTimeout(function () {
        console.log('user info')
    }, 1000)
}
//mul()

//above code is async we want it in sync we using call back hell
function mul() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('user info')
            }, 1000)
        }, 2000)
    }, 3000)
}
//mul()
let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 20
    if (a == b) {
        resolve('equal')
    }
    else {
        reject('not equal')
    }
})
// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })
pro.then(function (str) {
    console.log(str)
})
    .catch(function (str) {
        console.log(str)
    })


//call back hell using promises
function createuser() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('user created')
        }, 3000)
    })
}

function getid() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('user id')
        }, 2000)
    })
}

function getinfo() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('user info')
        }, 1000)
    })
}

createuser().then(function (res) {
    console.log(res)
    return getid()
})
    .then(function (res) {
        console.log(res)
        return getinfo()
    })
    .then(function (res) {
        console.log(res)
    })


//async await

async function info(){
    let a=await createuser()
    console.log(a)
    let b=await getid()
    console.log(b)
    let c=await getinfo()
    console.log(c)
}
info()

