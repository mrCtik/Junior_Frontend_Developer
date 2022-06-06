const carNames = 'Ford';
let maxCarSpeed = '240 km/h';
let carOwner = 'Вячеслав';

alert(carNames);
alert(maxCarSpeed);
alert(carOwner);


function car(number) {
    for (let i = 0; i < number; i+=1) {
        maxCarSpeed = prompt('У машины изменилась скорость на:', '220');
        console.log('У машины изменилась скорость', maxCarSpeed, 'km/h');

        carOwner = prompt('У машины изменился владелец на:', 'Мария');
        console.log('У машины изменился владелец', carOwner);
    }
  }
  car(3);