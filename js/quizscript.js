
const correct=["d","c","d","b"];
let highest=[];
let butt=document.getElementById("butt");
console.log(butt);
let due=document.getElementById("dp");
const date=new Date();
date.setDate(date.getDate()+3);
let formatdate=date.toLocaleDateString();
let formattime=date.toLocaleTimeString();
due.textContent=`${formatdate},${formattime} IST`;

butt.addEventListener("click",(e)=>
{   e.preventDefault();
    let checkbox=document.querySelector(`input[type="checkbox"]`);
    if(checkbox.checked)
        {
            check();
        }    
     else
     {
        alert("please click the checkbox");
     }
});

let score=0;
let crt=document.querySelectorAll(".correct");
let incrt=document.querySelectorAll(".incorrect");
let submittime;

function  updatesubmittime()
{
   

    if(localStorage.getItem('submittime'))
    {
        
        submittime=localStorage.getItem('submittime');
        
        
    }
    else{
        submittime=0;
        console.log(submittime);

    }
    var current=new Date();
    let currupt=`${current.toLocaleDateString()},${current.toLocaleTimeString()} IST`;
    
        if(currupt)
        { 
        
            localStorage.setItem('submittime',currupt);  

        
        } 
    
        
        
};

function check()
{   
    let userlist=document.querySelectorAll('input[type="radio"]:checked');
    let userlistvalue=[];
    userlist.forEach((element,index)=>
        {
        if(element.value)
        {
            userlistvalue.push(element.value);
        }

         });
     
    userlistvalue.forEach((el,indx)=>
        {
       
        if(el==correct[indx])
        {
            score++;
            crt[indx].classList.remove('hide');

        }
        else
        {
            incrt[indx].classList.remove('hide');
        }
        });

        //grade//
        let result1=document.querySelector(".result");
            result1.classList.remove("hide");
        let percentmark=(score/correct.length)*100;
        let result=document.querySelector(".result");
        let res_h2=result.querySelector("h2");
        res_h2.textContent=`Your Grade ${percentmark}%`;
        if (percentmark >= 80) {
            let passornot=document.getElementById("pass_or_not");
            passornot.textContent="Congradulations! you passed the Quiz";
            let result=document.querySelector(".result");
            result.classList.add('pass');
            localStorage.setItem("status","pass");
        }  
        else{
            
            localStorage.setItem("status","fail");

        }
        localStorage.setItem('b-text','Retry');
        localStorage.setItem('grade',percentmark);


        
        updatehighest(percentmark); 
        updatesubmittime();
    
};

    

function updatehighest(currentscore)
{   
   
    var highScore;
    if(localStorage.getItem('highScore'))
    {
        console.log(localStorage.getItem('highScore'));
        
        highScore=parseInt(localStorage.getItem('highScore'));
        console.log("true");
        
        console.log(highScore);
        
    }
    else{
        highScore=0;
        console.log(highScore);

    }
    if(currentscore>highScore)
        { 
        
            localStorage.setItem('highScore',currentscore);  

        
        } 
        let li=document.getElementById("highscore");
        let final=`Your Highest: ${localStorage.getItem('highScore')}%`;
        li.textContent=final;
    

        
    
};





