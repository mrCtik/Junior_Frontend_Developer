//https://codepen.io/mrctik/pen/VwQXgbj

const newForm = document.createElement('form');
newForm.className = 'create-user-form';

const label1 = document.createElement('label');
label1.textContent = 'Имя';
const label2 = document.createElement('label');
label2.textContent = 'Пароль';

const createUserForm = document.querySelector('.create-user-form');
newForm.append(label1);
newForm.append(label2);


const newInputUserName = document.createElement('input');
newInputUserName.type = 'text';
newInputUserName.name = 'userName';
newInputUserName.placeholder = 'Введите ваше имя';
label1.append(newInputUserName);

const newInputPassword = document.createElement('input');
newInputPassword.type = 'password';
newInputPassword.name = 'password';
newInputPassword.placeholder = 'Придумайте Пароль';
label2.append(newInputPassword);

const newButton = document.createElement('button');
newButton.type = 'submit';
newButton.textContent = 'Подтвердить';
newForm.append(newButton)

document.body.append(newForm);
