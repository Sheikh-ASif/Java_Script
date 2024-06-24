// console.log("one");
// console.log("Two");

// function hello(){
//     console.log("Hello");
// }
// setTimeout(hello,5000);

// console.log("three");
// console.log("four");


// callbacks in js

// function sum (a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// calculator(2,4,sum);

// function multiplier(a,b){
//     console.log(a*b);
// }

// function calculator(a,b,multiplier){
//     multiplier(a,b,multiplier);
// }

// calculator(5,6,multiplier);



// function getData(dataId, getNextData){
//     setTimeout( () => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// and all these are called callback hell because in this we use multiple time callback function in the nested loop
// getData(1, () => {       //this is the callback function that we are used to print the data after 2 sec
//     getData(2, () => {         //simply we can write as getData(1); by writin this we can also get the results but we get the immediate result of it
//         getData(3, () =>{
//             getData(4);
//         });
//     });
// });



// Promises- it is a object in javaScript and its have a three state that is pending,fullfilled,and rejected

// let promise = new Promise( (resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("successs");
//     reject("rejected state");
// })

// function getData(dataId, getNextData) {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     }
// )};

//promise cahain

// function asynFunc() {
//     return new Promise( (resolve,reject) => {
//         setTimeout( () => {
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching dat1a");
// let p1 = asynFunc();
// p1.then((res) => {
//     console.log(res);
// })



//Async & Await
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            console.log("Weather Data"); 
//         }, 4000);
//     });
// }

// async function gatWeatherData(){
//     await api();
// }

function getData(dataId){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("data",dataId);
            resolve("success");
        },4000);
    });
}

async function getAllData(){ 
    console.log("Getting Data1.....");    //this is nothing but this is the shortcut way to print our code after how longer time we wanted to be printed that
    await getData(1);  
    console.log("Getting Data2.....");            //This is the simple example of the callback function
    await getData(2);
    console.log("Getting Data3....."); 
    await getData(3);
    console.log("Getting Data4....."); 
    await getData(4);
}