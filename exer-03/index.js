let number1 = document.getElementById('numero1');
let number2 = document.getElementById('numero2');
let btn = document.getElementById('btn');
let div = document.getElementById('result');
    let soma = 0;

function somaImpares(){
    let num1 = parseInt(number1.value);
    let num2 = parseInt(number2.value);
    
    
if(num1 < 0 && num2 < 0){
  document.write('ERRO-digite um numero maior que 0')
    

}
else{
   for(let i = num1 ;i < num2; i++ ){
    if(i % 2 != 0){
        soma+=i

    }
    
}
div.innerHTML= soma
}

btn.addEventListener('click', somaImpares);

