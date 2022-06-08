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

const getUsersByIds = (ids) => {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));

    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then((users) => {
            users.forEach((users) => {
                const userHTML = createUsersElement(users.name);
                dataContainer.append(userHTML);
            })
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })
};

getUsersByIds([5, 6, 2, 1]);
