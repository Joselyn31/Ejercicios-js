function sumar (){
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let resultado = n1 + n2;
    document.getElementById('resultado').value=resultado;
}
function restar (){
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let resultado = n1 - n2;
    document.getElementById('resultado').value=resultado;
}
function multiplicar (){
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let resultado = n1 * n2;
    document.getElementById('resultado').value=resultado;
}
function dividir(){
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let resultado = n1 / n2;
    document.getElementById('resultado').value=resultado;
}

