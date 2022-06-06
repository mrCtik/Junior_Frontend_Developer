const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));

if (temperatureInCelsius === '0') {
   alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

console.log('Temperature', temperatureInCelsius);
console.log('Temperature', typeof(temperatureInCelsius));

if (!(temperatureInCelsius === null) && (temperatureInCelsius > 0) || (temperatureInCelsius < 0)){
    const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
    console.log('Temperature In Fahrenheit', temperatureInFahrenheit);

    alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
    Фаренгейту.`);
}   else 
    alert('Не корректно введенные данные');

