import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
const daysEL=document.querySelector('span[data-days]');
const hoursEL=document.querySelector('span[data-hours]');
const minutesEL=document.querySelector('span[data-minutes]');
const secondsEl=document.querySelector('span[data-seconds]');
const btnEl=document.querySelector('button[data-start]');
const fp = flatpickr("#datetime-picker",{
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0]<new Date()){
      Notiflix.Notify.failure("Please choose a date in the future");
      btnEl.disabled=true;
    }
    btnEl.disabled=false;
  },});
     let intervalId;
     function onTimeStarted(){
    let now = new Date().getTime();
    let userTime = fp.selectedDates[0].getTime();
    let delta = userTime - now;
    if(delta<=0){
      clearInterval(intervalId);
      return;}
    let{days,hours,minutes,seconds}=convertMs(delta);
    daysEL.textContent =   addLeadingZero(days);
    hoursEL.textContent =   addLeadingZero(hours);
    minutesEL.textContent =  addLeadingZero(minutes);
    secondsEl.textContent =   addLeadingZero(seconds); 
    }
     btnEl.addEventListener('click', ()=>{
      intervalId=setInterval(()=>
        onTimeStarted(),1000);
  });
  
     function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      return { days, hours, minutes, seconds };
    }
    
    function addLeadingZero(value){
      return value.toString().padStart(2,'0');
}
