let btn = document.getElementById('btn')
let div = document.getElementById('resultado')



function calcular(){
    let valor = parseInt(document.getElementById('valor').value)
    let tempo = parseInt(document.getElementById('tempo').value)
   if(valor<= 0){
    alert('ERRO- Digite um numero valido')

   }

   else if(tempo<= 0){
    alert('ERRO- Digite um numero valido')

   }
   else{
    let preco= parseInt(tempo / 15)

    if(preco < tempo/15){
        preco++

    }
    valorPagar= preco * valor
    
   }

   div.innerHTML= `O valor por 15 inutos de uso R$ ${valor}<br>
   Tempo em minuto de usuarios : ${tempo}<br>
   Valor a pagar R$ ${valorPagar}`



//    valor de uso 15
// tempo min
// valor a pagadar

}

btn.addEventListener('click',calcular)