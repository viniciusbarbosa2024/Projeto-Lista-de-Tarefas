const main = document.getElementsByTagName('main')[0]
const telaAdicionarTarefa = document.getElementById('telaAdicionarTarefa')
const tituloTarefa = document.getElementById('tituloTarefa')
const botaoSalvar = document.getElementById('botaoSalvar')

function salvarTarefa() {
    telaAdicionarTarefa.classList.remove('abrir')

    main.classList.remove('ocultar')
}

function adicionarTarefa() {
    telaAdicionarTarefa.classList.add('abrir') //Anotar sobre classList.add

    main.classList.add('ocultar')

    botaoSalvar.addEventListener('click',salvarTarefa)
    
     
}