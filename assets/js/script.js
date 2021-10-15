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
let lista_immaginiBloccoCentrale=[];
let mainImg = "";
let lista_ImmaginiBloccoLato = []
for (let i = 0; i < items.length; i++) {
    let list = `<div class="item main"> <img style="width: 100%" src=" ${items[i]} " alt="."/> </div>
                    <div class ="txt"> 
                    <h3> ${title[i]} </h3>
                        <p> ${text[i]} </p> 
                        </div>`
    lista_immaginiBloccoCentrale[i]= list;
    
    mainImg = `<div class="item"> <img style="width: 100%" src=" ${items[i]} " alt="."/> </div>`
    lista_ImmaginiBloccoLato[i] = mainImg
    imgs.innerHTML += mainImg
                   
}
/* / LISTA IMG A SCHERMO */
let n_Img=0;

/* BOTTONE DOWN*/
btnDown.addEventListener("click", function(){


    if(n_Img == 0 ) {
        
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
        var element = document.getElementsByClassName("item");
        ++n_Img;
    }   
    else if(n_Img>=lista_immaginiBloccoCentrale.length) {
        n_Img=0;
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
        var element = document.getElementsByClassName("item");
    }   
    else{
        
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
        var element = document.getElementsByClassName("item");
        ++n_Img;
        
    }
        console.log(n_Img);
    
   
})
/* / BOTTONE DOWN */


/* BOTTONE UP */
btnUp.addEventListener("click", function() {

    if (n_Img == 0) {
       n_Img = lista_immaginiBloccoCentrale.length -1
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img]
        
    } 

    else{
        --n_Img
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
       
    }
    console.log(n_Img);
    
   

})





