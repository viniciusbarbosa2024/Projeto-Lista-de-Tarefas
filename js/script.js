const main = document.getElementsByTagName('main')[0]
const listaTarefas = document.getElementById('tarefas')
const telaAdicionarTarefa = document.getElementById('telaAdicionarTarefa')
const botaoFecharTelaAdicionarTarefa =document.getElementById('botaoFecharTelaAdicionarTarefa')
const tituloTarefa = document.getElementById('tituloTarefa')
const botaoSalvar = document.getElementById('botaoSalvar')

function FecharTelaAdicionarTarefa() {
    telaAdicionarTarefa.classList.remove('abrir')

    main.classList.remove('ocultar')
}

function salvarTarefa() {
    FecharTelaAdicionarTarefa()

    //Criar tarefa na página inicial
    const criarLi = document.createElement('li')
    listaTarefas.appendChild(criarLi)
    listaTarefas.lastElementChild.innerHTML = tituloTarefa.value
}

function adicionarTarefa() {
    telaAdicionarTarefa.classList.add('abrir') //Anotar sobre classList.add

    main.classList.add('ocultar')

    
    botaoFecharTelaAdicionarTarefa.addEventListener('click',FecharTelaAdicionarTarefa)
    botaoSalvar.addEventListener('click',salvarTarefa)
    
     
}