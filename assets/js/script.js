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
    
    mainImg = `<div class="itemList"> <img style="width: 100%" src=" ${items[i]} " alt="."/> </div>`
    lista_ImmaginiBloccoLato[i] = mainImg
    imgs.innerHTML += mainImg
                   
}

/* / LISTA IMG A SCHERMO */
let n_Img=0;
image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
/* BOTTONE DOWN*/
btnDown.addEventListener("click", function(){


    
    if(n_Img == 0 ) {
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
        //deo accendere alla posizione zero l'image a destra
        document.getElementsByClassName("itemList")[n_Img].classList.add("attivo"); 
        ++n_Img;
                
    }   
    else if(n_Img>=lista_immaginiBloccoCentrale.length) {
        n_Img=0;
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
        /* devo spegnere l'ultima img e riaccendere la prima */
        document.getElementsByClassName("itemList")[lista_ImmaginiBloccoLato.length - 1].classList.remove("attivo");
        document.getElementsByClassName("itemList")[n_Img].classList.add("attivo");
        ++n_Img
    }   
    else{
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];   
        //devo PRIMA spegnere l'immagine alla posizione precedente
        document.getElementsByClassName("itemList")[n_Img - 1].classList.remove("attivo"); 
        //DEVO ACCENDERE l'immagine nella posizione n_Img
        document.getElementsByClassName("itemList")[n_Img].classList.add("attivo"); 
        ++n_Img;
             
    }
    
    console.log(n_Img);
})
/* / BOTTONE DOWN */

/* BOTTONE UP */
btnUp.addEventListener("click", function() {

    if (n_Img == 0) {
       n_Img = lista_immaginiBloccoCentrale.length -1
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
        /* accendo ultima img */
        document.getElementsByClassName("itemList")[n_Img].classList.add("attivo");
        /* devo spegnere la prima */
        document.getElementsByClassName("itemList")[0].classList.remove("attivo");
    } 

    else{
        --n_Img
        image.innerHTML = lista_immaginiBloccoCentrale[n_Img];
        /* accendo penultima img */
        document.getElementsByClassName("itemList")[n_Img].classList.add("attivo");
        /* devo spegnere l'ultima */
        document.getElementsByClassName("itemList")[n_Img + 1].classList.remove("attivo");
    }
    console.log(n_Img);
    
})






