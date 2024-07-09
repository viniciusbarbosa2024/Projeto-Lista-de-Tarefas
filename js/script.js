const main = {
    conteiner: document.getElementsByTagName('main')[0],
    pNaoHaTarefas: document.getElementById('NaoHaTarefas'),
    listaTarefas: document.getElementById('tarefas') 
}


const telaAdicionarTarefa = {
    conteiner: document.getElementById('telaAdicionarTarefa'),
    botaoFechar: document.getElementById('botaoFecharTelaAdicionarTarefa'),
    txtTarefa: {
        título: document.getElementById('tituloTarefa'),
        horário: document.getElementById('horarioTarefa'),
        descricao: document.getElementById('descricaoTarefa')
    },
    botaoSalvar: document.getElementById('botaoSalvar'),
}


const telaAcessoTarefa = {
    conteiner: document.getElementById('telaAcessoTarefa'),
    botaoFechar: document.getElementById('botaoFecharTelaAcessoTarefa'),
    título: document.getElementById('tituloTarefaAdicionada'),
    descricao: document.getElementById('descricaoTarefaAdicionada'),
    botaoExcluirTarefa: document.getElementById('botaoExcluirTarefa')
}



const nomesDasTarefas = []


function FecharTelaAdicionarTarefa() {
    telaAdicionarTarefa.conteiner.classList.remove('abrir')

    main.conteiner.classList.remove('ocultar')
}

function AbrirTelaAdicionarTarefa() {
    telaAdicionarTarefa.conteiner.classList.add('abrir') //Anotar sobre classList.add

    main.conteiner.classList.add('ocultar')
}

function AbrirTelaAcessoTarefa() {
    telaAcessoTarefa.conteiner.classList.add('abrir')

    main.conteiner.classList.add('ocultar')
}

function FecharTelaAcessoTarefa() {
    telaAcessoTarefa.conteiner.classList.remove('abrir')

    main.conteiner.classList.remove('ocultar')
}


function ordenarTarefa() {
    //Ordena as tarefas em relação ao horário
    const orderHorario = Number(telaAdicionarTarefa.txtTarefa.horário.value.charAt(0) + telaAdicionarTarefa.txtTarefa.horário.value.charAt(1) + telaAdicionarTarefa.txtTarefa.horário.value.charAt(3) + telaAdicionarTarefa.txtTarefa.horário.value.charAt(4))

    main.listaTarefas.lastElementChild.setAttribute('style',`order: ${orderHorario}`)
    
}

function salvarTarefa() {
    if (telaAdicionarTarefa.txtTarefa.título.value == "") {
        window.alert('O título da tarefa é obrigatório')
        telaAdicionarTarefa.txtTarefa.título.focus()
    } else {
        FecharTelaAdicionarTarefa()
        main.pNaoHaTarefas.style.display = 'none'

        //Guardar o nome da tarefa no vetor nomeDasTarefas
        nomesDasTarefas.push(tituloTarefa.value)

        //Criar tarefa na página inicial
            const criarLi = document.createElement('li')
            //li criado com evento de clique para a função de acesso a tarefa(function acessarTarefa())
            criarLi.setAttribute('onclick',`acessarTarefa("${telaAdicionarTarefa.txtTarefa.título.value}","${telaAdicionarTarefa.txtTarefa.descricao.value}")`)
            main.listaTarefas.appendChild(criarLi)

            
            for (let c = 1;c<=2;c++) {
                const criarSpan = document.createElement('span')

                main.listaTarefas.lastElementChild.appendChild(criarSpan)
                //Anotar sobre lastElementChild
            }

            //Acessando o span[0] do li criado para colocar o título da tarefa
            main.listaTarefas.lastElementChild.children[0].innerHTML = telaAdicionarTarefa.txtTarefa.título.value

            //Acessando o span[1] do li criado para colocar o horário da tarefa
            main.listaTarefas.lastElementChild.children[1].innerHTML = telaAdicionarTarefa.txtTarefa.horário.value
     
        //Ordenar as tarefas adicionadas de acordo com o horário    
            ordenarTarefa()
    }
    
    
}

function adicionarTarefa() {
    AbrirTelaAdicionarTarefa()

    telaAdicionarTarefa.txtTarefa.título.value = ""
    telaAdicionarTarefa.txtTarefa.horário.value = ""
    telaAdicionarTarefa.txtTarefa.descricao.value = ""
    
    telaAdicionarTarefa.botaoFechar.addEventListener('click',FecharTelaAdicionarTarefa)

    telaAdicionarTarefa.botaoSalvar.addEventListener('click',salvarTarefa)
    
    
     
}

function excluirTarefa(titulo) {
    const tarefaParaExclusao = main.listaTarefas.children[nomesDasTarefas.indexOf(titulo)]
    tarefaParaExclusao.remove() //Anotar sobre remove()
    nomesDasTarefas.splice(nomesDasTarefas.indexOf(titulo),1) //Anotar sobre splice

    FecharTelaAcessoTarefa()

    if (main.listaTarefas.children[0] == undefined) {
        main.pNaoHaTarefas.style.display = 'block'
    }
}

function acessarTarefa(titulo,descricao) {
    telaAcessoTarefa.título.innerHTML = titulo
    
    if (descricao == "") {
        descricao = "Sem descrição"
    }

    telaAcessoTarefa.descricao.innerHTML = `<span>Descrição:</span><p>${descricao}</p>`
    
    AbrirTelaAcessoTarefa()

    telaAcessoTarefa.botaoFechar.addEventListener('click',FecharTelaAcessoTarefa)
    telaAcessoTarefa.botaoExcluirTarefa.addEventListener('click',()=>excluirTarefa(titulo)) //Anotar sobre passagem de parâmetro via addEventListener

}


