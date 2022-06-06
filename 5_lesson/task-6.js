const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();

let indexOfWord;

if (userText.includes(wordFromText)) {
    indexOfWord = userText.indexOf(wordFromText);
    alert(`Результат: ${userText.slice(0, indexOfWord)}`);
}
else {
    alert(`В веденом вами тексте нет нужного слова`);
}