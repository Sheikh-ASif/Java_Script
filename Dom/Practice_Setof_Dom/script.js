let element = document.querySelector("h2");
console.log(element);
element.innerText = element.innerText + "From Apna College Students";


//solution-2
let boxes = document.querySelectorAll(".box");

let idx = 0;
for (div of boxes) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

//let boxes = document.querySelectorAll(".box");
// boxes[0].innerText = "New unique value 1";
// boxes[1].innerText = "New unique value 2";  //this is the another method to solve this problem but its to lengthy
// boxes[2].innerText = "New unique value 3";

