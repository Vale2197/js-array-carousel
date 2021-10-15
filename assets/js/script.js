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

let imgs = document.querySelector(".container > #imgSide");

let image = document.getElementById("img");
/* /DIV IMMAGINI */

let btnUp = document.getElementById("up");
let btnDown = document.getElementById("down");
/* / BOTTONI VARIABILI */

/* imgs.innerHTML = `<img src="${items[2]}" alt=".">`
image.innerHTML = `<img src="${items[2]}" alt=".">` */

/* LISTA IMG A SCHERMO */
let listVERO=[];
let mainImg = "";

for (let i = 0; i < items.length; i++) {
    let list = `<div class="item main"> <img style="width: 100%" src=" ${items[i]} " alt="."/> </div>
                    <div class ="txt"> 
                    <h3> ${title[i]} </h3>
                        <p> ${text[i]} </p> 
                        </div>`
    listVERO[i]= list;
    
    mainImg = `<div class="item"> <img style="width: 100%" src=" ${items[i]} " alt="."/> </div>`

    imgs.innerHTML += mainImg
                   
}
/* / LISTA IMG A SCHERMO */
let n_Img=0;

/* BOTTONE DOWN*/
btnDown.addEventListener("click", function(){


    if(n_Img == 0 ) {
        
        image.innerHTML = listVERO[n_Img];
        ++n_Img;
    }   
    else if(n_Img>=listVERO.length) {
        n_Img=0;
        image.innerHTML = listVERO[n_Img];
    }   
    else{
        
        image.innerHTML = listVERO[n_Img];
        ++n_Img;
        
    }
        console.log(n_Img);
    
   
})
/* / BOTTONE DOWN */


/* BOTTONE UP */
btnUp.addEventListener("click", function() {

    if (n_Img == 0) {
       n_Img = listVERO.length -1
        image.innerHTML = listVERO[n_Img]
        
    } 

    else{
        --n_Img
        image.innerHTML = listVERO[n_Img];
       
    }
    console.log(n_Img);
    
   

})





