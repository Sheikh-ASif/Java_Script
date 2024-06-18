let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a) //26
// }

// btn1.addEventListener("click", () =>{
//     console.log("Button1 was clicked")
// }) this is for the event listener to add something 

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1 ");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

const handler3 = () =>{
    console.log("button1 was clicked -handler3");
};
btn1.addEventListener("click",handler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

btn1.removeEventListener("click",handler3);



// at the same time we cant use the same events multiple times because due to this the events are over ride 
// And also we cant use the same identifier like btn1 multiple times 

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);

// }

//here evt is the event object that are used to identife the types of the event
//evt.type is a property of an event object

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside the div");
    alert('you are inside the div');
}
