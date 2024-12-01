let gameSeq=[];
let userSeq=[];
let btns =["red","yellow","green","purple"]

let started =false;
let high=0;
let level=0; 
let h2=  document.querySelector('h2');

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        levelUp();
    } 
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    userSeq=[]; 
    level++;
    h2.innerText=`Level ${level}`;
    let randInx = Math.floor(Math.random()*3);
    let randColor=btns[randInx];
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    btnFlash(randBtn); 
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML =`Game Over! Your Score was <b> ${level} </b> <br>  Press any Key to Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 200)
        if(level>high){
            high = level;
            let para1=document.querySelector("p");
            para1.innerText = `High Score: ${high}`;
        }
        reset();

    }
}



function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length -1);
}

let allBtns =document.querySelectorAll('.btn');
for(btnav of allBtns){
    btnav.addEventListener("click", btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

 