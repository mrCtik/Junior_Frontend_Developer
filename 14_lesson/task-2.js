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
}

// function createTasks(tasksList, task) {
//     const str = `<div class="task-item" data-task-id="${task.id}">
//                     <div class="task-item__main-container">
//                         <div class="task-item__main-content">
//                             <form class="checkbox-form">
//                                 <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
//                                 <label for="task-${task.id}"></label>
//                             </form>
//                             <span class="task-item__text">${task.text}</span>
//                         </div>
//                         <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
//                             Удалить
//                         </button>
//                     </div>
//                 </div>`;

// tasksList.insertAdjacentHTML('beforeend', str);
// }

document.body.innerHTML = '';
const createDiv = document.createElement('div');
createDiv.className = 'tasks-list';

document.body.append(createDiv);

tasks.forEach(task => createTasks(document.querySelector(".tasks-list"), task));
