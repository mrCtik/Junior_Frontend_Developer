const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos';
const dataContainer = document.querySelector('#data-container');

const createPhotoElement = (url, title) => {
    const photoElement = document.createElement('li');
    const photoElementImage = document.createElement('img');
    const photoElementHeader = document.createElement('h3');

    photoElement.className = "photo-item";
    photoElementImage.className = "photo-item__image";
    photoElementImage.setAttribute("src", url);
    photoElementHeader.className = "photo-item__title";
    photoElementHeader.textContent = title;
    photoElement.append(photoElementImage);
    photoElement.append(photoElementHeader);

    return photoElement;
}

const getFastestLoadedPhoto = (ids) => {
    toggleLoader();
    const result = ids.map((id) => fetch(`${PHOTO_URL}/${id}`));

    Promise.race(result)
        .then((result) => {
            const dataResults = result.json();
            return (dataResults);
        })
        .then((photos) => {
                const urlHTML = createPhotoElement(photos.url, photos.title);
                dataContainer.append(urlHTML);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            toggleLoader();
        })
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

getFastestLoadedPhoto([12, 60, 55]);