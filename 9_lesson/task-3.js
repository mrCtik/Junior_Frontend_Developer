const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt('Поиск кофе по названию: ');

if (coffeeName != null) {
    for (let i = 0; i < coffees.length; i += 1) {
        if (coffeeName.trim().toUpperCase().includes(coffees[i].toUpperCase())) {
            alert(`Держите ваш любимый кофе ${coffees[i]}. Он ${i+1}-й по популярности в нашей кофейне.`);
            break;
        }
        else if (i === coffees.length - 1) {
            alert('К сожалению, такого вида кофе нет в наличии');
            break;
        }
    }
}
