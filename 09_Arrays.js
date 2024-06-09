let marks_of_class_12 = [90, 92, 94, 99, "Asif", 'Absent',]
console.log(marks_of_class_12)
console.log(marks_of_class_12[0])
console.log(marks_of_class_12[1])
console.log(marks_of_class_12[2])
console.log(marks_of_class_12[3])
console.log(marks_of_class_12[4])
console.log(marks_of_class_12.length) // this is the property

//In the array we cant replace the values of a particular variables we use the index of a particular variablee to assign a new value to ii
marks_of_class_12[0] = 98
console.log(marks_of_class_12)

//we can access the elements of array by using the indexes and using the loops as well
for (let i = 0; i < marks_of_class_12; i++) {
    console.log(marks_of_class_12[i])
}

//Methods in Arrays
let num = [1, 11, 22, 48, 88]
let num1 = [12,12,13,14,15]
let b = num.toString() //this method change the arrays in the strings
console.log(b)
console.log(typeof b)

let c = num.join("_")  // this is the another method to join the arrays 
console.log(c)
console.log(typeof c)


num.pop()
console.log(num) //this is the method in this method its return the same element by delting the last element of the array

let r = num.pop() //this is the method in this method its return the same element by delting the last element of the array and also return the popped element
console.log(num, r)

let s = num.push(88)
console.log(num)

let q = num.shift()  // this remove the first element ogf the array and return the rest of the array
console.log(q, num)


let p = num.unshift(46) // its add the new element in the begining of the array and returns the new ength of the array 
console.log(p,num)

delete num[1]
console.log(num)

let newArray = num.concat(num1)
console.log(newArray)


let compare = (a, b) => {  //this method sorts the arry in acending order
    return a - b
}
let num3 = [551, 121, 22, 489, 188]
num3.sort(compare)  //this method sort the elements alphabetically
console.log(num3)

let num4 = [51, 12, 22, 49, 18, 99] 
console.log(num4)
num3.splice(2,3,1021,1022,1023) //this methods add the new elements in the array in which we have to pass the arguments like 2 is the position ,3 is the element that can be romoved and the rest of the values that gone add at that places
console.log(num4)