const main = document.getElementsByTagName('main')[0]

function adicionarTarefa() {
    const telaAdicionarTarefa = document.getElementById('telaAdicionarTarefa')

    telaAdicionarTarefa.classList.add('abrir') //Anotar sobre classList.add

    main.classList.add('ocultar')
    
}