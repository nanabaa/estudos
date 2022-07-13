function multiplicador(){
    let fator = parseInt(document.getElementById("fator").value);
    let n =fator;
    let multiplicador =parseInt(document.getElementById("multiplicador").value);
    let i = 1;

    if(multiplicador <= 0 || fator <= 0) {
        return document.getElementById("multiplicacao").innerHTML='0';
    } else{
    
        while(i < multiplicador){
            i++
            fator += n;
        }
    }

    return document.getElementById("multiplicacao").innerHTML=fator;
 }


