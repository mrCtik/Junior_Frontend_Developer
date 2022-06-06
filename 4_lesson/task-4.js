// 1
console.log(Number(' 1 2 3 4 5')); //Ответ: NaN 
// 2
console.log(Number('1234 5')); //Ответ: NaN
// 3
console.log(Number('12345')); //Ответ: 12345
// 4
console.log(String(false)); //Ответ: 'false'
// 5
console.log(Boolean(0000000)); //Ответ: false
// 6
console.log(Boolean(0.0000001)); //Ответ: true
// 7
console.log(String(undefined)); //Ответ: 'undefined'
// 8
console.log(Number('100f')); //Ответ: NaN
// 9
console.log(Number('100')); //Ответ: 100
// 10
console.log(Number('000001')); //Ответ: 1