var bo1 = document.getElementsByClassName("body1")[0]
var bo2 = document.getElementsByClassName("body2")[0]
var bo3 = document.getElementsByClassName("body3")[0]
var bo4 = document.getElementsByClassName("body4")[0]
var bo5 = document.getElementsByClassName("body5")[0]
var cscore=document.querySelectorAll("#value1")
var mscore=document.querySelectorAll("#value2")
var mselect=document.querySelectorAll(".meselect")
var sselect=document.querySelectorAll(".computerselect")
var ele = document.getElementsByClassName("outerrules")
var arr = ["rock", "scissors", "paper"]
var mycounter=localStorage.getItem("mc") || 0
var pccounter=localStorage.getItem("pc") || 0

for(let i=0;i<cscore.length;i++){
    cscore[i].value=localStorage.getItem("pc") || 0 
    mscore[i].value=localStorage.getItem("mc") || 0
 }



function hide() {
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.display = "none";
    }

}
function show() {
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.display = "flex";
    }
}
var element=document.getElementsByClassName("scorebox")[0]
function hurray() {
    bo2.style.display = "block"
    element.style.display="none"
    bo1.style.display = "none"
    bo3.style.display = "none"
    bo4.style.display = "none"
    bo5.style.display = "none"
}
function playagain() {
    element.style.display="flex"
    bo2.style.display = "none"
    bo1.style.display = "block"
    bo3.style.display = "none"
    bo4.style.display = "none"
    bo5.style.display = "none"
}

function getWinner(user, system) {
    if ((user === "rock" && system === "rock") || (user === "scissors" && system === "scissors") || (user === "paper" && system === "paper")) {
        return 0;
    }
    else if ((user === "rock" && system === "scissors") || (user === "scissors" && system === "paper") || (user === "paper" && system === "rock")) {
        return 1;
    }
    else {
        return -1;
    }
}
function getrandom() {
    return (Math.floor(Math.random() * 3));
}
function dispalyimage(image1,image2){
    if (image1 === 'rock') {
        for(var i=0;i<mselect.length;i++){
            mselect[i].classList.remove("meselectscissors")
            mselect[i].classList.remove("meselectpaper")
            mselect[i].classList.add("meselectrock")
        }
        
    }
    else if (image1 === 'paper') {
        for(var i=0;i<mselect.length;i++){
            mselect[i].classList.remove("meselectrock")
            mselect[i].classList.remove("meselectscissors")
            mselect[i].classList.add("meselectpaper")
        }
        
    }
    else {
        for(var i=0;i<mselect.length;i++){
            mselect[i].classList.remove("meselectrock")
            mselect[i].classList.add("meselectscissors")
            mselect[i].classList.remove("meselectpaper")
        }
     
    }
    if (image2 === 'rock') {
        for(var i=0;i<sselect.length;i++){
            sselect[i].classList.remove("computerselectscissors")
            sselect[i].classList.remove("computerselectpaper")
            sselect[i].classList.add("computerselectrock")
        }
        
    }
    else if (image2 === 'paper') {
        for(var i=0;i<sselect.length;i++){
            sselect[i].classList.remove("computerselectscissors")
            sselect[i].classList.add("computerselectpaper")
            sselect[i].classList.remove("computerselectrock")
        }
        
    }
    else {
        for(var i=0;i<sselect.length;i++){
            sselect[i].classList.add("computerselectscissors")
            sselect[i].classList.remove("computerselectpaper")
            sselect[i].classList.remove("computerselectrock")
        }
        
    }

}
function select(value) {
    let val = getrandom()
    let winner = getWinner(arr[value], arr[val])
    if (winner === 1) {
        mycounter++
        localStorage.setItem("mc",mycounter)
        for(let i=0;i<mscore.length;i++){
           mscore[i].value= mycounter//localStorage.getItem("mc")
        }
        bo2.style.display = "none"
        bo1.style.display = "none"
        bo3.style.display = "block"
        bo4.style.display = "none"
        bo5.style.display = "none"
        dispalyimage(arr[value],arr[val])
        
    }
    else if(winner===-1){
        pccounter++
        localStorage.setItem("pc",pccounter)
        for(let i=0;i<cscore.length;i++){
           cscore[i].value=pccounter//localStorage.getItem("pc")
        }
        bo2.style.display = "none"
        bo1.style.display = "none"
        bo3.style.display = "none"
        bo4.style.display = "block"
        bo5.style.display = "none"
        dispalyimage(arr[value],arr[val])
    }
    else{
        bo2.style.display = "none"
        bo1.style.display = "none"
        bo3.style.display = "none"
        bo4.style.display = "none"
        bo5.style.display = "block"
        dispalyimage(arr[value],arr[val])
    }
}