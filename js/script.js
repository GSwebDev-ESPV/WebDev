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

document.getElementById("formQuiz").addEventListener("submit",function(e){

    e.preventDefault();
    const nome =
    document.getElementById("nome").value;

    if(nome.trim() === ""){
        alert("Digite seu nome.");
        return;
    }

    alert("Bem-vindo(a), " + nome);
});