let health = Number(prompt('Введите число параметра "здоровье" для персонажа'));
console.log(health);

if (health <= 0 || !health) {
    console.log(`Здоровье ${health}`);
    alert('Параметр "здоровье" должен быть больше нуля!');
} else {
    console.log(`Здоровье = ${health}`);
    alert(`Параметр "здоровье" равен ${health}`);
} 