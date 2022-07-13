function isInvalid(valor1, valor2){
    if(valor1 > valor2){
        return true
    }else{
        return false
    }
}

function range(min, max) {
    if(min === max) return [min];
    return [min, ...range(min + 1, max)];
}


function valorCalculado(){
    let valor1=parseInt(document.getElementById("inputValor1").value);
    let valor2=parseInt(document.getElementById("inputValor2").value);
    let indice=0;
    let resultado1=0;
    let resultado2=0;
        if(isInvalid(valor1, valor2)){
            return document.getElementById("resultado").innerHTML='o primeiro número deve ser menor que o segundo.'
        }else{
            document.getElementById("resultado").innerHTML='';
            while(indice <= range.length -1){
                resultado1 = Math.abs(range(valor1, valor2).filter(valor => valor >= 0).reduce((valorParcial, a) => valorParcial + a, 0))

                resultado2= range(valor1, valor2).filter(valor => valor < 0).length

                indice++;
            }


            document.getElementById("resultado1").innerHTML=' Soma dos valores positivos: ' + resultado1.toString();
            document.getElementById("resultado2").innerHTML=' Quantidade de números negativos: ' + resultado2.toString();
        }

}
