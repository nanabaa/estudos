function fibonacci() {
    let valorAtual = 0;
    let valorAnterior = 0;
    let valor= document.getElementById("valor").value;

    for(i = 1; i <= valor; i++) {
        if (i == 1) {
            valorAtual = 1;
            valorAnterior = 0;
        } else{
            valorAtual += valorAnterior;
            valorAnterior = valorAtual - valorAnterior;
        }
    }

    return document.getElementById("fib").innerHTML=valorAtual;

}
