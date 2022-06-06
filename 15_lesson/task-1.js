const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.querySelector('#data-container');

const createUsersElement = (name) => {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#'
    userElementAnchor.textContent = name;
    userElement.append(userElementAnchor);

    return userElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

const getAllUsers = () => {
    toggleLoader();
    const result = fetch(USERS_URL, {
    method: 'GET',
});
 
result
    .then((response) => {
        console.log(response);
        if(!response.ok) {
            throw new Error ('Ошибка');
        }
        return response.json();
    })
    .then((users) => {
        console.log('users', users);
        users.forEach((user) => {
            const userHTML = createUsersElement(user.name);
            dataContainer.append(userHTML);
        });
    })
    .catch((error) => {
        console.error('error', error);
    })
    .finally(() => {
        toggleLoader();
    })
}

getAllUsers();