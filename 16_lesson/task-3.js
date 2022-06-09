const TASK_URL = 'https://jsonplaceholder.typicode.com/albums';

const dataElementUl = document.createElement('ul');
dataElementUl.className = 'data-container';
const dataSpan = document.createElement('span');
document.body.append(dataElementUl);

dataSpan.id = 'loader';
dataSpan.setAttribute('hidden', '');
dataSpan.textContent = 'Loading...';
dataElementUl.append(dataSpan);

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

const createDataElement = (name) => {
    const dataElement = document.createElement('li');
    dataElement.textContent = name;
    return dataElement;
}
const renderAlbums = async (url) => {
    try {
        toggleLoader();
        const response = await fetch(url);
        const datas = await response.json();
        datas.forEach((data) => {
            const urlHTML = createDataElement(data.title);
            dataElementUl.append(urlHTML);
        });

    } catch (error) {
        console.error("Произошла ошибка в получении данных об альбомах...", error);
    } finally {
        toggleLoader();
    }
};

renderAlbums(TASK_URL);
