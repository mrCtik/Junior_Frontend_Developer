const myName = 'Вячеслав';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'Хочу стать востребованным специалистом';
const numberOfMonth = '2 месяца';

let myInfoText = `Всем привет! Меня зовут, ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`;

console.log(myInfoText);

myInfoText = myInfoText.replaceAll('JavaScript', 'JavaScript'.toUpperCase());

console.log(myInfoText);

console.log('Длина строки', myInfoText.length);

console.log('Первый символ ',myInfoText[0], ' Последний символ ', myInfoText[myInfoText.length-1]);

