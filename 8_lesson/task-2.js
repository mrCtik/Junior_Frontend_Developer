let sum = 0;
let names = prompt('Введите 2 параметра nubmer и type (“odd” - нечетные числа, “even” - четные числа, пустая строка “” - все числа) через пробел');


function getSumOfNumbers (number, type) {
    for (let i = 1; i <= number; i +=1) {
        //console.log('numbers =', i);
        if (type === 'odd') {
            //console.log('sum', sum);
            sum += isOdd(i);
        } else if (type === 'even') {
            sum += isEven(i);
        } else if (' '){
            sum += i;
        } else alert('Введенный параметр type не соответствует требуемому');
    }
    return sum;
}

function splitString(stringToSplit, separator = ' ') {
    let arrayOfNames = stringToSplit.split(separator);
    //console.log('number', arrayOfNames[0], 'type', arrayOfNames[1], 'arrayOfNames.length', arrayOfNames.length);
    if (arrayOfNames.length === 2) {
        console.log(getSumOfNumbers(arrayOfNames[0], arrayOfNames[1]));
    } else alert('Введено не 2 параметра');
}
    
function isOdd (number) {
    if (number % 2 === 1) {
        //console.log('numberIsOdd', number);
        return number;
    }   else return 0;
}

function isEven (number) {
    if (number % 2 === 0) {
        //console.log('numberIsEven', number);
        return number;
    }   else return 0;
}

if (names != null) {
    splitString(names);
} else alert('Введено не 2 параметра');
