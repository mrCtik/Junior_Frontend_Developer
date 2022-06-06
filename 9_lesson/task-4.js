const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2]; //евро 

const updatedPrices = prices.map(price => price * 2);

coffees.forEach ((coffeeName, index) => {
    alert(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро`);
})
