let input = document.getElementById("input");
let buttons = document.querySelectorAll(".btn");
let musicbtn = document.querySelector(".music");
let calculator = document.querySelector(".calculator");
let deleteHistory = document.querySelector(".delete-history");
let allhistory = document.querySelector(".allhistory");
let history = document.querySelector(".history");
let crossbtn = document.querySelector(".crossbtn");
let deletebtn = document.querySelector(".dltbtn");
let music = new Audio("click.mp3")
let string = "";
let array = Array.from(buttons);
let musicval = true;
array.forEach(button => {
    button.addEventListener("click", (e)=>{
        if (musicval === true)
        {
            music.play();
        }
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
        allhistory.innerText += input.value;
    })
})

musicbtn.addEventListener('click',()=>{
    if(musicbtn.classList.contains('fa-volume-high'))
    {
        musicbtn.classList.replace('fa-volume-high','fa-volume-xmark');
        musicval=false;
    }
    else
    {
        musicbtn.classList.replace('fa-volume-xmark','fa-volume-high');
        musicval=true;
    }
});
crossbtn.addEventListener('click',()=>{
    deleteHistory.style.display='none';
    calculator.style.display='block';
    history.style.display='block';
})
history.addEventListener('click',()=>{
    deleteHistory.style.display='block';
    calculator.style.display='none';
    history.style.display='none';
})
deletebtn.addEventListener('click',()=>{
    allhistory.innerText="";
})