(()=>{"use strict";const e=function(){return"Hello from about"},o=()=>"Hello from home",n=()=>"menu loaded",t=document.querySelector(".content main");console.log(o),console.log(e),console.log(n),Array.from(document.querySelectorAll("button")).forEach((e=>{e.addEventListener("click",(e=>{switch(e.target.id){case"home":t.innerText="Hello from home";break;case"menu":t.innerText="menu loaded";break;case"about":t.innerText="Hello from about";break;default:t.innerText="Weuh"}}))}))})();