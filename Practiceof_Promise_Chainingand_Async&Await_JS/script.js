//promise and promise chain

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     // resolve(123);
//     reject("error");
// })


// function getData(dataId,getnextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout( () => {
//             console.log("data",dataId);
//             resolve("sucess");
//         },3000);
//     });
// }

// function asyncfunc1 (){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncfunc2 (){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         },2000);
//     });
// }
 
// console.log("fetching data1...");
// let p1 = asyncfunc1();
// p1.then((res) =>{
//     console.log(res);
// });
// console.log("fetching data2...");
// let p2 = asyncfunc2();
// p2.then((res) =>{
//     console.log(res);
// })

//Another way to write the same code
// asyncfunc1().then((res) => {
//     return asyncfunc2();
// }).then((res) => {
//     console.log(res);
// })
//

//Self NUmerical practice question by using the promise and promise chain



// function Sbiemploye1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Asif");
//             resolve("Added");
//         },2000);
//     });
// }

// function Sbiemploye2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Adeem");
//             resolve("Added");
//         },3000);
//     });
// }

// function Sbiemploye3(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Farazz");
//             resolve("Added");
//         },4000);
//     });
// }

// Sbiemploye1().then((res) => {
//     console.log(res);
//     Sbiemploye2().then((res) =>{
//         console.log(res);  
//         Sbiemploye3().then((res) => {
//             console.log(res);
//         });
//     });
// })

// console.log("Adding the employee1");
// let p1 = Sbiemploye1();
// p1.then((res) =>{
//     console.log(res);
// })

// console.log("Adding the employee2");
// let p2 = Sbiemploye2();
// p1.then((res) =>{
//     console.log(res);
// })

// console.log("Adding the employee3");
// let p3 = Sbiemploye3();
// p1.then((res) =>{
//     console.log(res);
// })


// Same question with async-await method

function Sbiemploye(Name,Id){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
           console.log(Name, Id);
           resolve(`Added ${Name}`);
        }, 3000);
    });
}

async function AddAllEmployee() {
    await Sbiemploye("Asif",47);
    await Sbiemploye("Adeem",55);
    await Sbiemploye("Faraz",33);
    await Sbiemploye("Faisal",32);
    await Sbiemploye("Awaish",18);
    await Sbiemploye("Injamam",45);
}


//in console we have to passing the async function like that AddAllEmployee();