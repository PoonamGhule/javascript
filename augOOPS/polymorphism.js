//overloading
//same class, same mathod, diff signature

class Addition {
    add(a, b) {
        console.log(a + b)
    }
    add(a, b, c) {
        console.log(a + b + c)
    }
    add(a, b, c, d) {
        console.log(a + b + c + d)
    }
}
let x = new Addition()
x.add(1, 2, 3, 4)
x.add(1, 2, 3)
//this will not achive in js so we do some hack to achieve this

class Add {
    sub(p, q, r, s) {
        if (p != undefined && q != undefined && r != undefined && s != undefined) {
            console.log(p + q + r + s)
        }
        else if (p != undefined && q != undefined && r != undefined) {
            console.log(p + q + r)
        }
        else if (p != undefined && q != undefined) {
            console.log(p + q)
        }
    }
}
let obj = new Add()
obj.sub(1, 3, 3, 5)
obj.sub(1, 3, 3)
obj.sub(1, 3)

//overriding
//diff class, same mathod,same signature

class Worldbank {
    loan() {
        console.log("world bank")
    }
    save() {
        console.log("world bank")
    }
}
class SBI extends Worldbank{
    loan() {
        console.log("SBI bank")
        super.loan()
    }
    save() {
        console.log("SBI bank")
        super.save()
    }
}
class ICICI extends Worldbank{
    loan() {
        super.loan()
        console.log("ICICI bank")
    }
    save() {
        console.log("ICICI bank")
        super.save()
    }
}

let sbi=new SBI()
sbi.loan()
sbi.save()

let icici=new ICICI()
icici.loan()
icici.save()



