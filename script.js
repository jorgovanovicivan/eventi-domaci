let input=document.querySelector('input');
let btn=document.querySelector('button');
let ispis=document.querySelector('.ispis');
let visina=document.querySelector('.visina');
let unosSirine=document.querySelector('#number');
let poruka=document.querySelector('.porukaOVisini');

btn.addEventListener('click',()=>{  
    unosSirine=parseInt(unosSirine.value);
    
       if(unosSirine===window.innerWidth){
           poruka.innerHTML="Sirina je ista!";
       }else if(unosSirine>window.innerWidth){
        poruka.innerHTML="Uneta sirina je veca";
       }else{
        poruka.innerHTML="Uneta sirina je manja";
       }
});

window.addEventListener('resize',()=>{

    visina.innerHTML=`<br>Sirina ekrana je: ${window.innerWidth}`;

});


input.addEventListener('keydown',(event)=>{

    ispis.innerHTML+=`<b>${event.key}<b>`;

});
let formInput=document.querySelector('form input');
let mouse=formInput.nextElementSibling;


let count =0;
formInput.addEventListener('mousemove', ()=>{

count++;
mouse.innerHTML=`Presli ste preko polja <b>${count} </b>puta`;
});

