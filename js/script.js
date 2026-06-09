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

const perguntas = [

{
pergunta:"O que a AstraLink monitora?",
opcoes:["Trânsito","Conectividade","Clima"],
correta:1
},

{
pergunta:"Qual tecnologia conecta áreas remotas?",
opcoes:["Fibra","Bluetooth","Satélite"],
correta:2
},

{
pergunta:"Quem se beneficia da AstraLink?",
opcoes:["Comunidades rurais","Pilotos","Turistas"],
correta:0
},

{
pergunta:"Qual setor é beneficiado?",
opcoes:["Educação","Cinema","Moda"],
correta:0
},

{
pergunta:"A AstraLink usa:",
opcoes:["IoT","DVD","Fax"],
correta:0
},

{
pergunta:"Os dados são mostrados em:",
opcoes:["Dashboard","Calculadora","Editor"],
correta:0
},

{
pergunta:"Qual benefício principal?",
opcoes:["Monitoramento","Jogos","Streaming"],
correta:0
},

{
pergunta:"A solução ajuda:",
opcoes:["Gestores","Cantores","Atletas"],
correta:0
},

{
pergunta:"A conectividade melhora:",
opcoes:["Serviços digitais","Propaganda","Turismo"],
correta:0
},

{
pergunta:"O objetivo é:",
opcoes:["Resolver falhas","Vender celulares","Criar filmes"],
correta:0
}

];
