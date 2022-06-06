let numberOfString = Number(prompt('Введите число (number)'));
let counterDivider = 0;
let divider = '';

function getDivisorsCount(number = 1) {
    if ((number <= 0) || !(Number.isInteger(number))) 
        alert('number должен быть целым числом и больше нуля!');
    else {
        //console.log('number', number);
        for (let i = 0; i <= number; i += 1)
            if(number % i === 0) {
                divider += ' ' + i;
                counterDivider += 1;
            }

        console.log(`Количество делителей = ${counterDivider}, (делители -${divider})`);
    }
}

getDivisorsCount(numberOfString);