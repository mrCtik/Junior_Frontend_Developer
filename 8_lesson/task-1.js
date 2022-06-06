let names = prompt('Введите 3 имени через пробел');

//Function declaration

function getName1 (name) {
    return name;
}

//Function expression

const getName2 = function (name) {
    return name;
}

//Arrow function expression

const getName3 = (name) => {
    return name;
}

function splitString(stringToSplit, separator = ' ') {
    let arrayOfNames = stringToSplit.split(separator);
    
    if (arrayOfNames.length === 3) {
        console.log(getName1(arrayOfNames[0]));
        console.log(getName2(arrayOfNames[1]));
        console.log(getName3(arrayOfNames[2]));  
    } 
    else alert('Введено не три имени');
}

if (names != null) {
    splitString(names);
} else alert('Введено не три имени');
