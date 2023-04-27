//every element in java script is itself a node

// elemnt we get basically four types

//(1)  get element by ID


// const heading=document.getElementById('heading');
// console.log(heading);


//(1)  get elements by tagName it returns the collection 

// const heading1=document.getElementsByTagName('h1');
// console.log(heading1);

//get elements by className it also return the collection
const heading2=document.getElementsByClassName('heading');
//console.log(heading2);


 const heading3=document.querySelector('.heading');
//console.log(heading3);


//how to traverse in Dom 

// 1-------parent node 


//child ko acess kiya aur us say parent pr traverse kiya

const head=document.querySelector('.heading');
//console.log(head);

parent=head.parentNode;
//console.log(parent);


// 2 parent ko acess kry gay aur child pr traverse kry gay


const parent1=document.querySelector('.parent');
//console.log(parent1);

child=parent1.childNodes;
//console.log(child);


//nextElementSibling

const sibling=document.querySelector('.heading');

//console.log(sibling.nextElementSibling);