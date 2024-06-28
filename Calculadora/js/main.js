function insere(numero){
    var valor = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = valor + numero;
}

function limpar(){
    document.getElementById('result').innerHTML = "";
}

function voltar(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0,result.length -1);
}

function calcular(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }
    else{
        document.getElementById('result').innerHTML = "Inexistente...";  
    }
}