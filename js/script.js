const main = document.getElementsByTagName('main')[0]
const listaTarefas = document.getElementById('tarefas')
const telaAdicionarTarefa = document.getElementById('telaAdicionarTarefa')
const botaoFecharTelaAdicionarTarefa =document.getElementById('botaoFecharTelaAdicionarTarefa')
const tituloTarefa = document.getElementById('tituloTarefa')
const horarioTarefa = document.getElementById('horarioTarefa')
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

    
    for (let c = 1;c<=2;c++) {
        const criarSpan = document.createElement('span')

        listaTarefas.lastElementChild.appendChild(criarSpan)
        //Anotar sobre lastElementChild
    }

    //Acessando o span[0] do li criado
    listaTarefas.lastElementChild.children[0].innerHTML = tituloTarefa.value

    //Acessando o span[1] do li criado
    listaTarefas.lastElementChild.children[1].innerHTML = horarioTarefa.value
    

     
}

function adicionarTarefa() {
    telaAdicionarTarefa.classList.add('abrir') //Anotar sobre classList.add

    main.classList.add('ocultar')

    
    botaoFecharTelaAdicionarTarefa.addEventListener('click',FecharTelaAdicionarTarefa)
    botaoSalvar.addEventListener('click',salvarTarefa)
    
     
}