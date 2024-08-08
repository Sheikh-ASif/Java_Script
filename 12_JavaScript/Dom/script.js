// Acessing the elements of the Dom

// 1-Get Elemnt By ClassName
let Asif = document.getElementsByClassName("Asif");
console.dir(Asif);
console.log(Asif);

// 2-Get Elemnt by the Id
let iddd = document.getElementById("hello");
console.log(iddd);

// 3- get element by the tags
let parahs = document.getElementsByTagName("h1");
console.log(parahs);

// 4- querySlector in which tag id and class are acceseible
let query = document.querySelector("#Asif"); // . are use for accessing the class of the elements and # are used for the accessing the ids
console.log(query);

let query1 = document.querySelector("#Adeem");
console.log(query1);

//5-Querry Selector All
let all = document.querySelectorAll("p");
console.log(all);
