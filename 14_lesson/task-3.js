const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript"
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока"
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока"
    }
];

function createTasks(tasksList, task) {
    const createDiv1 = document.createElement('div');
    const createDiv2 = document.createElement('div');
    const createDiv3 = document.createElement('div');
    const createForm = document.createElement('form');
    const createInput = document.createElement('input');
    const createLabel = document.createElement('label');
    const createSpan = document.createElement('span');
    const createButton = document.createElement('button');

    createDiv1.className = "task-item";
    createDiv1.dataset.taskId = task.id;
    createDiv2.className = "task-item__main-container";
    createDiv3.className = "task-item__main-content";
    createForm.className = "checkbox-form";
    createInput.className = "checkbox-form__checkbox";
    createInput.type = "checkbox";
    createInput.id = "task-" + task.id;
    createLabel.htmlFor = "task-" + task.id;
    createSpan.className = "task-item__text";
    createSpan.innerText = task.text;
    createButton.className = "task-item__delete-button default-button delete-button";
    createButton.dataset.deleteTaskId = task.id;
    createButton.textContent = " Удалить ";
    createForm.append(createInput, " ", createLabel);
    createDiv3.append(createForm, " ", createSpan);
    createDiv2.append(createDiv3, " ", createButton)
    createDiv1.append(createDiv2);

    tasksList.append(createDiv1);
};

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = event.target.taskName.value;
    if (inputValue) {
        // console.log('inputValue', inputValue);
        const newId = String(Date.parse(new Date()));
        const newTask = {id: newId, completed: false, text: inputValue};
        tasks.push(newTask);
        createTasks(document.querySelector(".tasks-list"), newTask);
    } else {
        alert('Введите задачу!');
    }
});

const createDiv = document.createElement('div');
createDiv.className = 'tasks-list';
document.body.append(createDiv);
tasks.forEach(task => createTasks(document.querySelector(".tasks-list"), task));

document.addEventListener('click', (event) => {
  const { target } = event;
      const taskItemHTML = target.closest('.task-item');
      const taskId = taskItemHTML?.dataset.taskId;
      if (taskId) {
          const taskToDelete = document.querySelector(`[data-task-id="${taskId}"]`);
          if (taskToDelete) {
              const deleteTaskConfirm = confirm('Удалить данную задачу?');
              if (deleteTaskConfirm) {
                for (let i = 0; i < tasks.length; i++) {
                  for (const [key, value] of Object.entries(tasks[i])) {
                        if (value === taskId)
                        {
                          tasks.splice(i, 1);
                          console.log('value', value);
                        }
                      }
                }
                  taskToDelete.remove();
                  console.log('tasks', tasks);
              }
          }
      }
});
