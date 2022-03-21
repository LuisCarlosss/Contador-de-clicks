let valor = 0;

function somar(){
    valor++;
    if (valor == 1){
        document.getElementById('valor').innerHTML = valor;
    }
    else{
        document.getElementById('valor').innerHTML = valor;
    }
}
function diminuir(){
    valor--;
    if (valor == 1){
        document.getElementById('valor').innerHTML = valor;
    }
    else{
        document.getElementById('valor').innerHTML = valor;
    }
}
function reset(){
    valor = 0;
    document.getElementById('valor').innerHTML = valor;
}