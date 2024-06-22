// // numericals oof the classes and objects 

// class SBI{

//     constructor(name,position,salary,work){
//         console.log("This is the way of Assing the value to the objects ");
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//         this.work = work;
//     }


//     Working(){
//         console.log("Employees are working in the SBI Banks");
//     }

//     Onleave(){
//         console.log("Some of the Employees of the banks are on the leaves");
//     }

//     NotWorking(){
//         console.log("some of theemployees are not work properly");
//     }
// }

// let Employee1 = new SBI("Asif","Manager",50000,"Handling the details");
// let Employee2 = new SBI("Adeem","HR",550000,"Handling the Employees");
// let Employee3 = new SBI("Faisal","Assistance HR",60000,"Assist the HR");
// let Employee4 = new SBI("Faraz","Cashier",500000,"Handling the Cash ");

//Ques-2 you are crating a website for your collage.Create a class User with 2 Properties name & email.
//It also has a method called viewData() that allows user to view data.

// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("Secret Information");
//     }
// }

// let student1 = new User("Asif","abc@gmail.com");
// let student2 = new User("Adeem","def@gmail.com");


//Ques-3 Create a new class called Admin which inherits from the user.Add a new method called editData to Admin that allows it to edit website data\
let DATA = "Secret Information";

class User{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    
        viewData(){
            console.log("Secret Information");
        }
    }

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new value";
    }
}

let admin1 = new Admin("Asif","abc@gmail.com");