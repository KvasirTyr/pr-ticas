let pesoInput = document.getElementById("input-peso");
let alturaInput = document.getElementById("input-altura");
let container = document.querySelector(".form");

container.addEventListener("submit", function (e) {
    e.preventDefault();
    let peso = Number(pesoInput.value)
    let altura = Number(alturaInput.value)
    let calculo2 = peso/(altura*altura);
    let calculo = calculo2.toFixed(2)
    let resFinal = ""

if (calculo<=18.5 ) {
    resFinal = `${calculo} é Peso Baixo`;
} else {
    if (calculo>=18.5&&calculo<24.99) {
        resFinal = `${calculo} é Peso Normal`;
    } else {
        if (calculo>=25&&calculo<29.99) {
            resFinal = `${calculo} é Sobrepeso`;
        } else {
            if (calculo>=30&&calculo<34.99) {
                resFinal = `${calculo} é Obesidade (Grau I)`;
            } else {
                if (calculo>=35&&calculo<39.99) {
                     resFinal = `${calculo} é Obesidade Severa (Grau II)`;
                } else {
                    if (calculo>=40) {
                       resFinal = `${calculo} é Obesidade Mórbida (Grau III)`;
                    } else {
                        if (pesoInput||alturaInput==false) {
                            resFinal = 'Você utilizou um valor invalido (troque , por . e tente novamente)'
                        }
                    }
                }
            }
        }
    }
}
const resultadoFinal = document.querySelector(".resultFinal");
resultadoFinal.innerHTML = " ";
const p = document.createElement('p');
p.innerHTML = `${resFinal}`;
resultadoFinal.appendChild(p);
classP( )

function classP () {
    const pegaP = document.querySelector('p');

    if (calculo>=18.5&&calculo<24.99) {
        p.classList.add ('p-positivo');
    } else {
        p.classList.add ('p-negativo');
    }
}

})

