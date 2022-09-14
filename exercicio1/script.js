
//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function Nome (){
    const nome = prompt("Qual é o seu nome?")
    console.log(`Olá, ${nome}`)
}

Nome()

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

function impimirTabuada (){
    const num = 6
    let i = 1
for(i; i<=10; i++){
    console.log(`${i} x ${num}= ${i*num}`)
}    
}
impimirTabuada()

/*c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__*/

/* a) function Nome (){
    const nome = prompt("Qual é o seu nome?")
    console.log(`Olá, ${nome}`)
}

Nome()


b) function impimirTabuada (){
    const num = 6
    let i = 1
for(i; i<=10; i++){
    console.log(`${i} x ${num}= ${i*num}`)
}    
}
impimirTabuada()*/