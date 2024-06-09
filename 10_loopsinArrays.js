//For loops
let a = [3, 5, 11, 9, 8]

for (let i =0; i<a.length; i++){
    console.log(a[i])
}

//For Each
a.forEach((element) => {
    console.log(element * element)
})


//Array.from this methods are used to create array from the strings or from any other values
let arr = Array.from(a)
console.log(a)

// this method change a string into a array
let name = "Sheikh_Asif"
let arr1 = Array.from(name)
console.log(arr1)

//for off and for in loop
// /for off this is the method to accessing the elements of the arry in shortcut way
for(let i of a){
    console.log(i)
}

//for in  this lops gives the index of the element 
for(let i in a){
    console.log(i)
}