let body =document.body.style.background='#808080';
document.getElementById('title').style.color= 'green'
document.querySelectorAll('h3').forEach(element => element.style.textTransform='uppercase');

let fruits=document.getElementById('fruitList')
let fruit1=document.createElement('li');
fruit1.textContent='Oranges'
fruits.appendChild(fruit1)

let vegies=document.getElementById('vegList')
let vegie1=document.createElement('li');
vegie1.textContent='Cauliflower'
vegies.appendChild(vegie1)






