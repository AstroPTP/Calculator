let string = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        //show result when user clicked =   
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("textarea").innerText = string;
        } else if(e.target.innerHTML == "AC") {
            //clear full calculation
            string = "";
            document.querySelector("textarea").innerText = string;
        } else if(e.target.innerHTML == "←") {
            //remove last element using slice
            string = string.slice(0, -1);
            document.querySelector("textarea").innerText = string;
        }else if(e.target.innerHTML == "%") {
            //
            string = string / 100;
            document.querySelector("textarea").innerText = string; 
        } else {
            string = string + e.target.innerText;
            document.querySelector("textarea").innerText = string;
        }
    }) 
})