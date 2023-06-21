let btn = document.getElementById('btn')
let div = document.getElementById('resultado')



function calcular(){
    let duracao = parseInt(document.getElementById('dura').value)
    let filme = document.getElementById('filme').value
    let durachoras=0
    let duracmin=0
    if(duracao < 0){
        alert('digite um valor valido')
    }
    else{
       durachoras= duracao/60;
       durachoras= parseInt(durachoras)

       duracmin = duracao - (durachoras * 60);

      div.innerHTML=`O nome do filme é ${filme} e sua duração é ${parseInt(durachoras.toFixed(0))} horas e ${parseInt(duracmin)} minutos.`
    }

}

btn.addEventListener('click',calcular)
