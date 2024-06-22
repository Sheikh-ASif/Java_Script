// // a simple objeccts example

// const student = {
//     Fullname : "Asif",
//     marks : 95.6,
//     printMarks: function() {
//         console.log("marks = ",student.marks);
//     }
// };

// //this is the way to use the methods or properties of one objects into the anothers

// // this is the object 1
// const Employee =  {
//     calTax() {
//         console.log("tax rate is 10%");
//     }
// };

// // this is the object 2
// const karanArjun = {
//     salary : 50000
// }

// //.__proto__ is used to inherit the properties of nother objects 
// karanArjun.__proto__ = Employee;

// Class in the js

// class Toyotacar {
//     constructor(brand,mileage,topspeed){
//         console.log("Properties of object is created");
//         //All are these are the property that we are assign it by using consstructor
//         this.brand = brand;
//         this.mileage = mileage;
//         this.topspeed = topspeed;
//     };

//     start(){
//         console.log("start")
//     }

//     stop(){
//         console.log("stop")
//     }

//     //this is the another way to assign the values to the objects of the classes insead of it we can alsonuse the constructor to assign the values to the objects of the class
//     // setBrand(brand){
//     //     this.brand = brand;
//     // }
// }

// let fortuner = new Toyotacar("fortuner",10,200);
// console.log(fortuner);

class SBI{

    constructor(name,position,salary,work){
        console.log("This is the way of Assing the value to the objects ");
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.work = work;
    }


    Working(){
        console.log("Employees are working in the SBI Banks");
    }

    Onleave(){
        console.log("Some of the Employees of the banks are on the leaves");
    }

    NotWorking(){
        console.log("some of theemployees are not work properly");
    }
}

let Employee1 = new SBI("Asif","Manager",50000,"Handling the details");

//inheritance in js
class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent{

}
let obj = new child();

// another example of the inhertance 
class Person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class engineer extends Person{
    work(){
        console.log("solve problems , build something");
    }
}

let asifobj = new engineer();


//super keyword it is used to call the propertiess and methods of the parenet class

class Person1{
    constructor(){
        this.species = "homo sapiens";
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class engineer1 extends Person1{
    constructor(branch){
        super(); // this is the way to invoke the constructor of the parent class
        this.branch = branch;    }

    work(){
        console.log("solve problems , build something");
    }
}

let engObj = new engineer("cse");
