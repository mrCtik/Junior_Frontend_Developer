const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += Math.pow(numbers[i], 3);;
}

console.log('for', sum);
sum = 0;

for (number of numbers) {
    sum += Math.pow(number, 3);
}

console.log('for of', sum);
sum = 0;

numbers.forEach(number => sum += Math.pow(number, 3));

console.log('forEach', sum);
sum = 0;

sum = numbers.reduce((acc, number) => acc + Math.pow(number, 3), 0);

console.log('reduce', sum);