let modeBtn = document.querySelector("#mode");

let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if(currMode == "light"){
        currMode = "dark";
        body.classList.add("dark")
        // document.querySelector("body").style.backgroundColor = "black";
        alert('you enter dark mode');
    }
    else{
        currMode = "light"
        body.classList.add("light")
        // document.querySelector("body").style.backgroundColor = "white";
        alert('you enter light mode');
    }

    console.log(currMode);
})