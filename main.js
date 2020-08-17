'use strict';

{
  const btn=document.getElementById('btn');

  btn.addEventListener('click', () =>{
    // const results=['大吉','中吉','凶'];
    // btn.textContent=results[Math.floor(Math.random() * results.length)];
    const n =Math.random();
    if (n<0.01){
      btn.textcontent='?';//0%
       } else if(n<0.2){
      btn.textContent='まー';//20%
    } else if(n<0.5){
      btn.textContent='大吉';//30%
    } else if(n<0.7){
      btn.textContent='吉';//20%
      } else if(n<0.8){
      btn.textContent='中吉';//10%
      } else if(n<0.9){
      btn.textContent='末吉';//10%
    } else{
      btn.textContent='凶';//10%
    }
  });
}
