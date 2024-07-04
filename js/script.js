const main = document.getElementsByTagName('main')[0]
const telaAdicionarTarefa = document.getElementById('telaAdicionarTarefa')

function salvarTarefa() {
    telaAdicionarTarefa.classList.remove('abrir')

    main.classList.remove('ocultar')
}

function adicionarTarefa() {
    telaAdicionarTarefa.classList.add('abrir') //Anotar sobre classList.add

    main.classList.add('ocultar')

    
}