function alterarcss() {
    var nomes = [
        document.getElementById('nome').value,
        document.getElementById('comentario').value,
    ];
    for (var i = 0; i < nomes.length; i++) {
        document.getElementById('resultado').innerHTML += nomes[i] + '<br>';
    }

    let estilo = document.getElementById('body');
    let corTexto = document.getElementById('cor-texto').value;
    let corFundo = document.getElementById('cor-fundo').value;
    let tamanhoTexto = document.getElementById('tamanho-texto').value;

    estilo.style = 'color: ' + corTexto + ';  background-color:' + corFundo + '; font-size: ' + tamanhoTexto + 'px;';

   

}
