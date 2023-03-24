const wednesday=document.querySelector('.bar3');
const priceWed=document.querySelector('.price3');
const thursday=document.querySelector('.bar4');
const priceThu=document.querySelector('.price4');

wednesday.addEventListener('mouseover',()=>{
    priceWed.style.visibility="visible";
});

wednesday.addEventListener('mouseout',()=>{
    priceWed.style.visibility="hidden";
});

thursday.addEventListener('mouseover',()=>{
    priceThu.style.visibility="visible";
});

thursday.addEventListener('mouseout',()=>{
    priceThu.style.visibility="hidden";
});
