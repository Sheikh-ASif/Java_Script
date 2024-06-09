for (let i = 1; i < 11; i++) {
    console.log("2*i = ", 2 * i)
}

//for in loop
let obj = {
    Asif: 88,
    Adeem: 92,
    Avaish: 91,
    Faraz: 96,
}
for (let a in obj) {
    console.log(a)
    console.log("Marks of " + a + "are" + obj[a])
}

//for off loops
//In the majority of the cases the for off loops use in the arrays by using the for off loops the object must be in the itrable
let obj1 = {
    Asif: 88,
    Adeem: 92,
    Avaish: 91,
    Faraz: 96,
}
for (let a of "Asif") {
    console.log(a)
}


