let btn1=document.getElementById("btn-1");
btn1.onclick=function() {myFunction()}
btn1.style.fontSize="16px"
btn1.style.backgroundColor="lightYellow";

function myFunction() {
    let bgDiv=document.getElementById("bgDiv");
    bgDiv.style.backgroundColor = "black";
    bgDiv.style.color="white";
    bgDiv.style.padding="20px";
    bgDiv.style.fontSize="20px";
  }

let btn2=document.getElementById("btn-2");
btn2.onclick=function() {myFunction2()}
btn2.style.fontSize="16px"
btn2.style.backgroundColor="white";

function myFunction2() {
    let bgDiv=document.getElementById("bgDiv");
    bgDiv.style.backgroundColor = "white";
    bgDiv.style.color="black";
    bgDiv.style.padding="20px";
    bgDiv.style.fontSize="20px";
  }