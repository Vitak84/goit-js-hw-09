const btnStart=document.querySelector('button[data-start]');
const btnStop=document.querySelector('button[data-stop]');
let intervalId =null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

btnStart.addEventListener('click', ()=>{
    intervalId=setInterval(()=>{
    btnStart.parentNode.style.backgroundColor = getRandomHexColor()
    btnStart.disabled=true;
    btnStop.disabled=false;
},1000);
});

btnStop.addEventListener('click',()=>{
btnStop.disabled=true;
btnStart.disabled=false;
clearInterval(intervalId);
})
