function verificaprimo() {
    let numero = parseInt(document.getElementById("numero").value);
    let divisores = 1;
    let controle = 2;
    let resultado = document.getElementById("resultado");
    if (numero == 0) {
        resultado.innerHTML = "O número 0 não é considerado primo pois é menor que 1"
    } else {
        for (controle; controle < numero; controle++) {
            if (numero % controle == 0) {
                divisores++;
                if (divisores > 2) {
                    resultado.innerHTML = "o número " + numero + " não é primo ";
                    return;
                }
            }
        }
        
        resultado.innerHTML = "O número " + numero + " é primo "
    }
}

function calculajuro(){
    let valorinicial = parseFloat(document.getElementById("valorinicial").value);
    let taxamensal = parseFloat(document.getElementById("taxamensal").value)/100    ;
    let periodo = parseInt(document.getElementById("periodo").value);
    let m;
    let resultado = document.getElementById("resultados") ;
    let juros = document.getElementById("juros")

    m = valorinicial*((1+taxamensal)**periodo);
    console.log(m)
    resultado.innerHTML = "o valor total após o calculo dos juros é de : R$" + m.toFixed(2) + " !"
    juros.innerHTML = "o Valor de juros acumulados no período e de : R$" + (m-valorinicial).toFixed(2) +"!"
}