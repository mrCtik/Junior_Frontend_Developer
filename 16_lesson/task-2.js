const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const getTodosByIds = (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((data) => data.json());
      return Promise.all(dataResults);
    })
    .then((allTasks) => {
      console.log('allTasks', allTasks);
    })
    .catch((error) => {
      console.log(error);
    });
};
getTodosByIds([43, 21, 55, 100, 10]);

const getTodosByIds2 = async (ids) => {
    try {
      const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
      const result = await Promise.all(requests);
      const dataResults = result.map((data) => data.json());
      const allTasks = await Promise.all(dataResults);
      console.log('allTasks', allTasks);

    } catch (error) {
      console.error("error", error);
    }
};
getTodosByIds2([43, 21, 55, 100, 10]);
