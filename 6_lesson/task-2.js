let correctAnswers = 0;
let incorrectAnswers = 0;

const question1 = 'Сколько будет 2 + 2?';
const question2 = 'Сколько будет 2 * 2?';
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?';
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?';
const question5 = 'Сколько будет 2 + 2 * 2?';

const answers1 = 2 + 2;
const answers2 = 2 * 2;
const answers3 = 5 - 3 - 1;
const answers4 = 10 - 2 - 1 + 5;
const answers5 = 2 + 2 * 2;

let Useranswer1 = Number(prompt(question1));
if (Useranswer1 === answers1) {
    right ();
} else {
    wrong ();
}

let Useranswer2 = Number(prompt(question2));
if (Useranswer2 === answers2) {
    right ();
} else {
    wrong ();
}

let Useranswer3 = Number(prompt(question3));
if (Useranswer3 === answers3) {
    right ();
} else {
    wrong ();
}

let Useranswer4 = Number(prompt(question4));
if (Useranswer4 === answers4) {
    right ();
} else {
    wrong ();
}

let Useranswer5 = Number(prompt(question5));
if (Useranswer5 === answers5) {
    right ();
} else {
    wrong ();
}

function right () {
    alert ('Ответ Верный')
    correctAnswers += 1;
}

function wrong () {
    alert ('Ответ Неверный')
    incorrectAnswers += 1;
}

alert (`Конец теста! Правильные ответы - ${correctAnswers} \nНеправильные ответы - ${incorrectAnswers}.`);