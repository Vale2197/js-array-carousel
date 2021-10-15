const items = [
    './consegna/img/01.jpg',
    './consegna/img/02.jpg',
    './consegna/img/03.jpg',
    './consegna/img/04.jpg',
    './consegna/img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let imgs = document.getElementById("imgSide");

let image = document.getElementById("img");
/* /DIV IMMAGINI */

let btnUp = document.getElementById("up");
let btnDown = document.getElementById("down");
/* / BOTTONI VARIABILI */

/* imgs.innerHTML = `<img src="${items[2]}" alt=".">`
image.innerHTML = `<img src="${items[2]}" alt=".">` */

/* LISTA IMG A SCHERMO */
let list = [];

for (let i = 0; i < items.length; i++) {
    list = `<img src=" ${items[i]} " alt="."/>`

   
    imgs.innerHTML += list
    
}
/* / LISTA IMG A SCHERMO */


/* BOTTONE DOWN*/
btnDown.addEventListener("click", function(){
    for (let x = 0; x < items.length; x++) {
        
    
  
    }
})





