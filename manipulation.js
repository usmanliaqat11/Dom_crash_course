/* basic manipulation 

const heading=document.querySelector('.heading');

heading.innerHTML="my name is usman";
heading.style.color="red";

heading.style.fontSize="50px";

heading.classList.add('title');
heading.classList.remove('heading');


*/




/*-----------------advance manipulation-----

we append the h1 tag in parent div tag 

const heading=document.createElement('h1');

heading.innerHTML="this is my heading";

parent = document.querySelector('.parent');

parent.appendChild(heading);

console.log(heading);

*/


//----------------DOM-EVENTS------------

/*
const button =document.querySelector('#btn');

const heading =document.querySelector('#heading');

button.addEventListener('click',function(){
    heading.style.color="yellow";
    console.log('button clicked'); 
});

*/


const bulb=document.querySelector('#btn')
const heading=document.querySelector('#heading')
bulb.addEventListener("click",function(){
    heading.style.backgroundColor="red";
    console.log("button clicked");

})





