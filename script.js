let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let string = "";
let array = Array.from(buttons);
array.forEach(button => {
    button.addEventListener("click", e => {
        if(e.target.innerText == "="){
            try{
                string = eval(string);
                if(isNaN(string))
                {
                    throw error;
                }
                input.value = string;
            }
            catch(Error){
                input.value="Syntax Error";
            }
        }
        else if(e.target.innerText == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerText == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerText;
            input.value = string;
        }
    })
})