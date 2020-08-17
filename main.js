'use strict';

{
  const btn=document.getElementById('btn');

  btn.addEventListener('click', () =>{
    // const results=['大吉','中吉','凶'];
    // btn.textContent=results[Math.floor(Math.random() * results.length)];
    const n =Math.random();
    if (n<0.1){
      btn.textcontent='まー';// 10%
    } else if(n<0.4){
      btn.textContent='大吉';//30%
    } else if(n<0.9){
      btn.textContent='中吉';//50%
    } else{
      btn.textContent='凶';//10%
    }
  });
}
