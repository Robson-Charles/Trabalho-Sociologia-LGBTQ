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

const q3 = {
    numQuestao: 3,
    pergunta: "Oque é identidade de genero ?",
    alternativaA: "Esta ligada ao que a pessoa se sente",
    alternativaB: "Esta ligado com o orgão reprodutor",
    alternativaC: "tem aver como a pessoa ve as pessoas a sua volta",
    correta: "Esta ligada ao que a pessoa se sente",
}
const q4 = {
    numQuestao: 4,
    pergunta: "Oque é atração sexual?",
    alternativaA: "É por qual sexo a pessoa se sente atraida fisicamente",
    alternativaB: "É como a pessoa se ve no espelho",
    alternativaC: "É a atrassão por si mesmo",
    correta: "É por qual sexo a pessoa se sente atraida fisicamente",
}


let instrucoes = document.querySelector('#instrucoes')

const questoes = [q0, q1, q2, q3, q4]
let nQuestao = 1
let pontos = 0
let placar = 0


let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)






let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.respostas')

let pergunta = document.querySelector('#pergunta')

let alternativas = document.querySelector('#alternativas')

let numQuestao = document.querySelector("#numQuestao")


let numero = document.querySelector('#numero')

let total  = document.querySelector('#total')

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

numero.textContent = q1.numQuestao
total.textContent = totalDeQuestoes

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}



/* function verificarSeAcertou(nQuestao, resposta){
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
*/

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos "+placar


    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 4000)
}




