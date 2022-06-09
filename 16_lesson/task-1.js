const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = () => {
  isLoading = true;
  fetch(POSTS_URL, {
    method: "POST"
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("result", result);
    })
    .catch((error) => {
      console.log("error", error);
    })
    .finally(() => {
      isLoading = false;
    });
};
createNewPost();

const createNewPost2 = async () => {
    try {
        isLoading = true;
        const response = await fetch(POSTS_URL, {
            method: "POST"
        });
        if (!response.ok) {
            throw new Error('Ошибка в получении данных о постах');
        }
        const posts = await response.json();
        console.log('result', posts);
    } catch (error) {
        console.error("error", error);
    } finally {
        isLoading = false;
    }
};
createNewPost2();