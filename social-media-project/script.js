// ГРАФИК

const ctx=document.getElementById('chart');

if(ctx){

new Chart(ctx,{

type:'bar',

data:{
labels:['1 час','2 часа','3 часа','4 часа','5+ часов'],

datasets:[{
label:'Подростки (%)',
data:[10,18,25,28,19]
}]
}

})

}

// ТЕСТ

function calculateTest(){

let score=0

let answers=document.querySelectorAll('input[type=radio]:checked')

answers.forEach(a=>score+=Number(a.value))

let result=""

if(score<=5)
result="Социальные сети мало влияют на ваши взгляды."

else if(score<=10)
result="Социальные сети частично влияют на ваше мнение."

else
result="Социальные сети сильно влияют на ваше мировоззрение."

document.getElementById("result").innerText=result

}