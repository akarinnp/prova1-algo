
let div = document.getElementById('resultado')
let soma = 0

let num1 = prompt('digite um número:')
let num2 = prompt('digite um número:')

if(num1 < 0 && num2 < 0){
    alert('ERRO-digite um numero maior que 0')
    

}
else{
   for(let i = num1 ;i < num2; i++ ){
    if(i % 2 != 0){
        soma+=i

    }
    
}
div.innerHTML= `a soma entre os numero ${num1} e ${num2} é: ${soma}`
}
