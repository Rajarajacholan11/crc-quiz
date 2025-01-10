

if(!sessionStorage.getItem("initialized"))
{
    localStorage.setItem("b-text","Start");
    sessionStorage.setItem("initialized","true");

}
let status=localStorage.getItem("status");
let timestamp=localStorage.getItem("quiztimestamp");
function updatebtn()
{

function canretry()
{
    if(!timestamp)
    {
        return true;
    }
    let now=new Date().getTime();
    let sevendaysinms=7*24*60*60*1000;
    return now-parseInt(timestamp,10)>sevendaysinms;
}


let bsm=document.querySelector("#bsm");

if(localStorage.getItem("b-text")==="Retry")
{   
    
    if(canretry())
    {

    }
    else{
        let daysleft=Math.ceil((7*24*60*60*1000-(new Date().getTime()-parseInt(timestamp,10)))/(24*60*60*1000));
       let now=new Date().getTime();
        let bsm=document.querySelector("#bsm");
        let daysoleft=document.querySelector("#daysleft");
        daysoleft.textContent= `you can retry this quiz in ${daysleft} day(s).`;
        if(daysleft<=0)
        {
            bsm.disabled=false;
            bsm.textContent="Retry";

        }
        else
        {
            bsm.disabled=true;
            bsm.textContent="disabled";

        }

        
    }
    
   
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
        grde.classList.add('red');

    }
}
else if(localStorage.getItem("b-text")==="Resume")
{   
    console.log("entered resume ");

    let bsm=document.querySelector("#bsm");
    bsm.textContent="Resume";
}
};
updatebtn();
// setInterval(updatebtn,1000);




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


console.log(localStorage.getItem("status"));
