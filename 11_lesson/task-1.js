
const getDateFormat = (date, separator = '.') => {
    return format(date.getDate()) + separator + format(date.getMonth() + 1) + separator + date.getFullYear();
}

const format = (value) => {
    return (value <= 9) ? '0' + value : value;
}

const newDate = new Date('January 17 2005');

console.log(getDateFormat(newDate));
