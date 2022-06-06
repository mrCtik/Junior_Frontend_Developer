const birthday = {
    nextbirthday: '27 June 2022',
}

const  getDaysBeforeBirthday = (nextBirthdayDate) => {
    return (Date.parse(nextBirthdayDate.nextbirthday)) - Date.now();
}

const convertMsToDays = (msToDays) => {
    return Math.round(msToDays / (1000 * 60 * 60 * 24));
}

console.log(`Дней до дня рождения: ${convertMsToDays(getDaysBeforeBirthday(birthday))}`);


