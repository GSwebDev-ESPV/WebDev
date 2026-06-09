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

const container = document.getElementById("perguntas");

perguntas.forEach((q,index)=>{

    let html = `
    <div class="pergunta">
        <p>${index+1}. ${q.pergunta}</p>`;

    q.opcoes.forEach((op,i)=>{

        html += `
        <label>
            <input
            type="radio"
            name="p${index}"
            value="${i}"
            >

            ${op}

        </label> `;
    });

    html += "</div>";
    container.innerHTML += html;

});

function corrigirQuiz(){

    let pontos = 0;
    for(let i = 0; i < perguntas.length; i++){
        const resposta = document.querySelector(`input[name="p${i}"]:checked`);

        if(!resposta){
            alert("Responda todas as perguntas antes de enviar o quiz.");
            return;
        }

    }

    perguntas.forEach((q,index)=>{

        const resposta =  document.querySelector(`input[name="p${index}"]:checked`);

        if(Number(resposta.value) === q.correta){
            pontos++;
        }

    });

    document.getElementById("resultado").innerHTML =
    `Você acertou ${pontos} de ${perguntas.length} perguntas!`;

}

function trocarTema(tema){

    if(tema === "azul"){

        document.documentElement.style.setProperty('--fundo','#030712');
        document.documentElement.style.setProperty('--menu','#0b1120');
        document.documentElement.style.setProperty('--card','#101827');
        document.documentElement.style.setProperty('--laranja','#2563eb');
        document.documentElement.style.setProperty('--laranja-claro','#60a5fa');
    }

    else if(tema === "laranja"){

        document.documentElement.style.setProperty('--fundo','#1a0d00');
        document.documentElement.style.setProperty('--menu','#2b1400');
        document.documentElement.style.setProperty('--card','#3d1f00');
        document.documentElement.style.setProperty('--laranja','#ff6a00');
        document.documentElement.style.setProperty('--laranja-claro','#ffb347');
    }

    else if(tema === "roxo"){

        document.documentElement.style.setProperty('--fundo','#12051f');
        document.documentElement.style.setProperty('--menu','#1d0d2f');
        document.documentElement.style.setProperty('--card','#291542');
        document.documentElement.style.setProperty('--laranja','#9333ea');
        document.documentElement.style.setProperty('--laranja-claro','#c084fc');
    }
}
function reiniciarQuiz(){

    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => {
        radio.checked = false;
    });

    document.getElementById("resultado").innerHTML = "";
}

