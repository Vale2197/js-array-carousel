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
let listVERO=[];

for (let i = 0; i < items.length; i++) {
    let list = `<img src=" ${items[i]} " alt="."/>`
    listVERO[i]= list;
    imgs.innerHTML += list  
}
/* / LISTA IMG A SCHERMO */
let n_Img=0;

/* BOTTONE DOWN*/
btnDown.addEventListener("click", function(){

    if(image == "") {
        image.innerHTML = listVERO[n_Img];
    }   
    else if(n_Img>=listVERO.length) {
        n_Img=0;
        image.innerHTML = listVERO[n_Img];
    }   
    else{
        image.innerHTML = listVERO[n_Img];
    }
        
    ++n_Img;
   
})
/* / BOTTONE DOWN */


/* BOTTONE UP */
btnUp.addEventListener("click", function() {

    if (image == "") {
        n_Img=0;
        image.innerHTML = listVERO[n_Img]
    } 
    else if(n_Img <= listVERO.length) {
        
        image.innerHTML = listVERO[n_Img];
    }   
    else{

        image.innerHTML = listVERO[n_Img];
    }

    --n_Img;

})





