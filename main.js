'use strict';

{
  const btn=document.getElementbyId('btn');

  btn.addEventListener('click', () =>{
    // const results=['大吉','中吉','凶'];
    // btn.textContent=results[Math.floor(Math.random() * results.length)];
    const n =MAth.random();
    if (n<0.05){
      btn.textcontent='まー';// 5%
    } else if(n<0.4){
      btn.textContent='大吉';//35%
    } else if(n<0.9){
      btn.textContent='中吉';//50%
    } else{
      btn.textContent='凶';//10%
    }
  });
}
