let clientsEstimations = [];

function askClientToGiveEstimation() {
   const estimation = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
   if (((estimation <= 10) || (estimation > 0)) && (estimation != null) && (estimation != '')) {
        clientsEstimations.push(estimation);
   }
}

//------------------------------------------------------------------
//  
// function repeat(func, times) {
//     askClientToGiveEstimation();
//     times && --times && repeat(func, times);
// }

// repeat(function(){ document.write('Hi<br>');} , 5); //нашел в сети такой варик. Честно, не понял принципа работы....

//------------------------------------------------------------------

for (let i = 0; i < 5; i += 1) {
    askClientToGiveEstimation();
}

const estimations = clientsEstimations.filter(clientsEstimations => clientsEstimations >= 5);
const goodEstimations = estimations.length;
const notGoodEstimations = clientsEstimations.length - estimations.length;
//можно было без определения goodEstimations и notGoodEstimations, но следую заданию)
alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);
