//map method 
let arr = [44,45,46,48]
let a = arr.map((value, index , array) => {
    console.log(value, index, array)
    return value + 1
})
console.log(a)

//Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a)=>{
    return a<10
}) 
console.log(a2)

//Reduced method
let arr3 = [ 11, 2, 3, 8, 9]
let a3 = arr3.reduce((h,h1)=>{
    return h+h1
})
console.log(a3)