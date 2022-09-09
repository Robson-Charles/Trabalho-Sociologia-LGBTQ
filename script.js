const q0 = {
    numQuestao: 0,
    pergunta: "pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    correta: "0",
}
const q1 = { 
    numQuestao: 1,
    pergunta: "Quais são as cores da bandeira bi?",
    alternativaA: "ROSA, ROXO, AZUL",
    alternativaB: "ROSA, PRETO, ROXO",
    alternativaC: "LARANJA, VERDE, AZUL",
    correta: "ROSA, ROXO, AZUL",
}
const q2 = { 
    numQuestao: 2,
    pergunta: "Quais são as cores da bandeira pan?",
    alternativaA: "ROSA, AMARELO, AZUL",
    alternativaB: "ROSA, PRETO, ROXO",
    alternativaC: "AZUL, VERDE, ROSA",
    correta: "ROSA, AMARELO, AZUL",
}

const questoes = [q0, q1, q2]
let nQuestao = 1
let pontos = 0
let placar = 0

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.questoes')

let pergunta = document.querySelector('#pergunta')

let alternativas = document.querySelector('#alternativas')

let numQuestao = document.querySelector("#numQuestao")

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao){
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'1A')
    b.setAttribute('value', nQuestao+'1B')
    c.setAttribute('value', nQuestao+'1C')
}


function verificarSeAcertou(nQuestao, resposta){
    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("Resp " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta

    if (respostaEscolhida == certa){
        console.log("acertou")
    }
    else{
        console.log("errou")
    }
    setTimeout(function(){
        proxima = numeroDaQuestao+1
        if(proxima>(questoes.length-1)){
            alert("fim")
        }else{
            proximaQuestao(proxima)
        }
    }

    )
}






