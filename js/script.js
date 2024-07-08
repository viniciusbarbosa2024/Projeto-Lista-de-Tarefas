const main = document.getElementsByTagName('main')[0]
const pNaoHaTarefas = document.getElementById('NaoHaTarefas')
const listaTarefas = document.getElementById('tarefas')
const telaAdicionarTarefa = document.getElementById('telaAdicionarTarefa')
const botaoFecharTelaAdicionarTarefa =document.getElementById('botaoFecharTelaAdicionarTarefa')
const tituloTarefa = document.getElementById('tituloTarefa')
const horarioTarefa = document.getElementById('horarioTarefa')
const descricaoTarefa = document.getElementById('descricaoTarefa')
const botaoSalvar = document.getElementById('botaoSalvar')
const telaAcessoTarefa = document.getElementById('telaAcessoTarefa')
const botaoFecharTelaAcessoTarefa = document.getElementById('botaoFecharTelaAcessoTarefa')
const tituloTarefaAdicionada = document.getElementById('tituloTarefaAdicionada')
const descricaoTarefaAdicionada = document.getElementById('descricaoTarefaAdicionada')
const botaoExcluirTarefa = document.getElementById('botaoExcluirTarefa')

const nomesDasTarefas = []


function FecharTelaAdicionarTarefa() {
    telaAdicionarTarefa.classList.remove('abrir')

    main.classList.remove('ocultar')
}

function AbrirTelaAdicionarTarefa() {
    telaAdicionarTarefa.classList.add('abrir') //Anotar sobre classList.add

    main.classList.add('ocultar')
}

function AbrirTelaAcessoTarefa() {
    telaAcessoTarefa.classList.add('abrir')

    main.classList.add('ocultar')
}

function FecharTelaAcessoTarefa() {
    telaAcessoTarefa.classList.remove('abrir')

    main.classList.remove('ocultar')
}


function ordenarTarefa() {
    //Ordena as tarefas em relação ao horário
    const orderHorario = Number(horarioTarefa.value.charAt(0) + horarioTarefa.value.charAt(1) + horarioTarefa.value.charAt(3) + horarioTarefa.value.charAt(4))

    listaTarefas.lastElementChild.setAttribute('style',`order: ${orderHorario}`)
    
}

function salvarTarefa() {
    if (tituloTarefa.value == "") {
        window.alert('O título da tarefa é obrigatório')
        tituloTarefa.focus()
    } else {
        FecharTelaAdicionarTarefa()
        pNaoHaTarefas.style.display = 'none'

        //Guardar o nome da tarefa no vetor nomeDasTarefas
        nomesDasTarefas.push(tituloTarefa.value)

        //Criar tarefa na página inicial
            const criarLi = document.createElement('li')
            //li criado com evento de clique para a função de acesso a tarefa(function acessarTarefa())
            criarLi.setAttribute('onclick',`acessarTarefa("${tituloTarefa.value}","${descricaoTarefa.value}")`)
            listaTarefas.appendChild(criarLi)

            
            for (let c = 1;c<=2;c++) {
                const criarSpan = document.createElement('span')

                listaTarefas.lastElementChild.appendChild(criarSpan)
                //Anotar sobre lastElementChild
            }

            //Acessando o span[0] do li criado para colocar o título da tarefa
            listaTarefas.lastElementChild.children[0].innerHTML = tituloTarefa.value

            //Acessando o span[1] do li criado para colocar o horário da tarefa
            listaTarefas.lastElementChild.children[1].innerHTML = horarioTarefa.value
     
        //Ordenar as tarefas adicionadas de acordo com o horário    
            ordenarTarefa()
    }
    
    
}

function adicionarTarefa() {
    AbrirTelaAdicionarTarefa()

    tituloTarefa.value = ""
    horarioTarefa.value = ""
    descricaoTarefa.value = ""
    
    botaoFecharTelaAdicionarTarefa.addEventListener('click',FecharTelaAdicionarTarefa)

    botaoSalvar.addEventListener('click',salvarTarefa)
    
    
     
}

function excluirTarefa(titulo) {
    const tarefaParaExclusao = listaTarefas.children[nomesDasTarefas.indexOf(titulo)]
    tarefaParaExclusao.remove() //Anotar sobre remove()
    nomesDasTarefas.splice(nomesDasTarefas.indexOf(titulo),1) //Anotar sobre splice

    window.alert(nomesDasTarefas)
}

function acessarTarefa(titulo,descricao) {
    tituloTarefaAdicionada.innerHTML = titulo
    
    if (descricao == "") {
        descricao = "Sem descrição"
    }

    descricaoTarefaAdicionada.innerHTML = `<span>Descrição:</span><p>${descricao}</p>`
    
    AbrirTelaAcessoTarefa()

    botaoFecharTelaAcessoTarefa.addEventListener('click',FecharTelaAcessoTarefa)
    botaoExcluirTarefa.addEventListener('click',()=>excluirTarefa(titulo)) //Anotar sobre passagem de parâmetro via addEventListener

}


