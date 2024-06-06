//Primitive data types
//NN SS BB U
//Non primitive data types
// objects and arrays

let a = null;
let b = 345;
let c = true;
let d = BigInt("546");
let e = "Asif";
let f = Symbol('i ama symbol');
let g = undefined;

console.log(a,b,c,d,e,f,g)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

//objects
const item = {
    "Asif" : true,
    "Adeem" : false,
    "Avaish" : 67,
    "Faisal" : undefined
}
console.log(item)
console.log(item["Asif"])