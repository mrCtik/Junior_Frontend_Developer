function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let array = [];

function getSumOfSequence(number) {
    
    console.log('Рандомайзер =', number);
    
    for (let i = 1; i <= number; i += 1)
        array.push(i);
    
    return array[0] + array[number-1];
}

console.log('Сумма первого и последнего элемента массива =', getSumOfSequence(getRandomInt(1)));