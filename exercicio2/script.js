/*Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.*/

function calculaDoisNum (n1,n2){
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}

calculaDoisNum(Number(prompt("Informe o primeiro número")), Number(prompt("Informe o segundo número")))


/*b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.*/

function validaNum (n1,n2){
   console.log(`${n1} é maior que ${n2}? ${n1>n2}`)
}

validaNum(Number(prompt("Informe o primeiro número")), Number(prompt("Informe o segundo número")))


//c) Uma função que receba um número e imprima se ele é par ou não

function verificaPar (n1){
    if(n1%2 === 0){
        console.log(`${n1} é um número par`)
    } else {
        console.log(`${n1} é um número ímpar`)
}
}

verificaPar(Number(prompt("Informe um número")))

/*d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.*/

function mensagem(texto){
 console.log(`Sua mensagem possui ${texto.length} caracteres`)
 console.log(texto.toLocaleUpperCase())
}
mensagem(prompt("Digite o texto"))