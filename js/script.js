const imagens = [
    "img/slide1.png",
    "img/slide2.png",
    "img/slide3.png"
];

let slideAtual = 0;

setInterval(() => {
    slideAtual++;

    if(slideAtual >= imagens.length){
        slideAtual = 0;
    }

    document.getElementById("slide").src = imagens[slideAtual];
},3000);
