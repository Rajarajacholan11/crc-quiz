

if(!sessionStorage.getItem("initialized"))
{
    localStorage.setItem("b-text","Start");
    sessionStorage.setItem("initialized","true");
}


if(localStorage.getItem("b-text")==="Retry")
{   
    console.log("entered retry ");
    
    let bsm=document.querySelector("#bsm");
    bsm.textContent="Retry";
    let submited=document.querySelector(".submitted");
    submited.classList.remove("hide");
    let grade=document.querySelector("#grade");
    grade.textContent=` Your Grade ${localStorage.getItem("grade")}%`;
    let gradetxt=document.querySelector("#gradetxt");
    gradetxt.textContent="To pass You need At least 80%.we keep your highest score.";
    let grde=document.querySelector(".grade");
    if(localStorage.getItem("status")=="pass")
    {
        grde.classList.add('green');

    }
    else
    {
        grde.classList.add('red');;

    }
}
else if(localStorage.getItem("b-text")==="Resume")
{   
    console.log("entered resume ");

    let bsm=document.querySelector("#bsm");
    bsm.textContent="Resume";
}


let due=document.querySelector(".due");
let spa=due.querySelector("span");
const date=new Date();
date.setDate(date.getDate()+3);
let formatdate=date.toLocaleDateString();
let formattime=date.toLocaleTimeString();
spa.textContent=`${formatdate},${formattime} IST`;
localStorage.setItem('due',`${formatdate},${formattime} IST`);
let butt=document.querySelector("#bsm");
 butt.addEventListener("click",(e)=>{
    localStorage.setItem('b-text',"Resume");
    setTimeout(()=>{
        window.location.href='quiz.html';

    },500);
});

let submittime=document.querySelector(".submitted");
let s_span=submittime.querySelector("span");
s_span.textContent=`${localStorage.getItem("submittime")}`;


