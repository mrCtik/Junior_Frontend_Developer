const newDate = new Date('January 17 2005');

function addDays(date, days) {
    const daysAtMs = days * 24 * 60 * 60 * 1000;
    return new Date(date.getTime() + daysAtMs);
}

console.log('Заданная дата:', newDate);
console.log('Измененная дата:', addDays(newDate, 5));
