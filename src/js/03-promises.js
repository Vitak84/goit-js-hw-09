import Notiflix from 'notiflix';
const formEl = document.getElementsByClassName('form');
const amount =document.getElementsByName("amount");
const stepEl =document.getElementsByName("step");
function createPromise(position,delay) {
  return new Promise((resolve,reject)=>{
    let arr=[]
    arr.push(delay.position.length)
const shouldResolve = Math.random() > 0.3;
 if (shouldResolve) {
  let step = stepEl.currentTarget
   for (let i=0; i<=arr.length; i+=1) {
  delay+=step 
}
   resolve({position,delay})
  } else {
  reject({position,delay})
  }})
 }

 createPromise().all(Promise)
  .then(({ position,delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});