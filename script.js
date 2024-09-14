const btn = document.querySelector('button');
const p = document.querySelector('p');
const state = false;
btn.addEventListener('click',function(){
  if(state ==false){
    p.style.color ="blue";
    p.style.textShadow ="0 0 4px blue";
    state = true
}
else{
  p.style.color ="red";
  p.style.textShadow ="none";
  state = false;
}
});

