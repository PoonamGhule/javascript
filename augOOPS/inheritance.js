

// multilevel inheritance

class Grandfather {
    constructor(Gfn, Gln) {
        this.Gfirstname = Gfn
        this.Glastname = Gln
    }
    displayG() {
        console.log(this.Gfirstname + this.Glastname)
    }
}

class Father extends Grandfather {
    constructor(Gfn, Gln, Ffn) {
        super(Gfn, Gln)
        this.Ffirstname = Ffn
    }
    displayF() {
        console.log(this.Ffirstname + this.Glastname)
    }
}

class Son extends Father {
    constructor(Gfn, Gln, Ffn, Sfn) {
        super(Gfn, Gln, Ffn)
        this.Sfirstname = Sfn
    }
    displayS() {
        console.log(this.Sfirstname + this.Glastname)
    }
}
//class Son
let son = new Son("shantaram", "tambe", "baban", "mayur")
console.log(son.Gfirstname)
console.log(son.Glastname)
console.log(son.Ffirstname)
console.log(son.Sfirstname)
son.displayG()
son.displayF()
son.displayS()
//class Grandfather
let myGfather = new Grandfather("shantaram", "tambe")
console.log(myGfather.Gfirstname)
console.log(myGfather.Glastname)
myGfather.displayG()
// class Father
let myfather = new Father("shantaram", "tambe", "baban")
console.log(myfather.Ffirstname)
console.log(myfather.Gfirstname)
console.log(myfather.Glastname)
myfather.displayG()
myfather.displayF()

//multiple inheritance one parent two child

class Mother {
    constructor(Mfn, Mln) {
        this.Mfirstname = Mfn
        this.Mlastname = Mln
    }
    displayMfn() {
        console.log(this.Mfirstname + this.Mlastname)
    }
}

class Son1 extends Mother {
    constructor(Mfn, Mln, Sfn) {
        super(Mfn, Mln)
        this.Sfirstname = Sfn
    }
    displaySfn() {
        console.log(this.Sfirstname + this.Mlastname)
    }
}

class Doughter extends Mother {
    constructor(Mfn, Mln, Dfn) {
        super(Mfn, Mln,)
        this.Dfirstname = Dfn
    }
    displayDfn() {
        console.log(this.Dfirstname + this.Mlastname)
    }
}

let son1= new Son1("vimal","tambe","mayur")
console.log(son1.Mfirstname)
console.log(son1.Sfirstname)
console.log(son1.Mlastname)
son1.displayMfn()
son1.displaySfn()

let doughter=new Doughter("vimal","tambe","poonam")
console.log(doughter.Mfirstname)
console.log(doughter.Dfirstname)
console.log(doughter.Mlastname)
doughter.displayMfn()
doughter.displayDfn()