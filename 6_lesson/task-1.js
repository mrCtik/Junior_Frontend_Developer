const existingUserLogin  = 'the_best_user';
const existingUserPassword ='12345678';

let UserLogin = prompt('Введите логин', 'User login');
if ((UserLogin) === null || UserLogin === '') 
UserLogin = 'Пользователь не назвался';
else UserLogin = UserLogin.trim();

let UserPassword = prompt('Введите пароль', 'User pasword');
if ((UserPassword) != null && UserPassword != '')
    UserPassword = UserPassword.trim();

if ((existingUserLogin === UserLogin) && (existingUserPassword === UserPassword)) {
    alert (`Добро пожаловать, ${UserLogin}!`)
} else {
    alert ('Логин и (или) Пароль введены неверно!')
}