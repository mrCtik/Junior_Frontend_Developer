const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
const arrayLength = peopleWaiting.length;

function giveParcel(people) {
    const name = people.shift();
    alert(`${name} получил(а) посылку. В очереди осталось ${people.length} человек.`);
}

function leaveQueueWithoutParcel(people) {
    const name = people.shift();
    alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`);
}

for (let i = 0; i < arrayLength; i += 1) {
    if (i < 3)  {
        giveParcel(peopleWaiting);
    }
    else {
        leaveQueueWithoutParcel(peopleWaiting);
    }
}
