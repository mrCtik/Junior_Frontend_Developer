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
function createModalWindow() {
    
    const modalOverlayDiv = document.createElement('div');
    const deleteModalDiv = document.createElement('div');
    const modalQuestion = document.createElement('h3');
    const deleteModalButtonsDiv = document.createElement('div');
    const cancelButton = document.createElement('button');
    const confirmButton = document.createElement('button');

    modalOverlayDiv.className = "modal-overlay modal-overlay_hidden";
    deleteModalDiv.className = "delete-modal";
    deleteModalButtonsDiv.className = "delete-modal__buttons";
    modalQuestion.className = "delete-modal__question";
    modalQuestion.textContent = " Вы действительно хотите удалить эту задачу? ";
    cancelButton.className = "delete-modal__button delete-modal__cancel-button";
    cancelButton.textContent = " Отмена ";
    confirmButton.className = "delete-modal__button delete-modal__confirm-button";
    confirmButton.textContent = " Удалить ";

    deleteModalButtonsDiv.append(cancelButton, confirmButton);
    deleteModalDiv.append(modalQuestion);

    deleteModalDiv.append(deleteModalButtonsDiv);
    modalOverlayDiv.append(deleteModalDiv);
    document.body.prepend(modalOverlayDiv);

}
function createTasks(tasksList, task) {
    const taskItemDiv = document.createElement('div');
    const taskItemMainDiv = document.createElement('div');
    const taskItemMainContentDiv = document.createElement('div');
    const checkboxForm = document.createElement('form');
    const checkbox = document.createElement('input');
    const tasks = document.createElement('label');
    const itemText = document.createElement('span');
    const deleteButtons = document.createElement('button');

    taskItemDiv.className = "task-item";
    taskItemDiv.dataset.taskId = task.id;
    taskItemMainDiv.className = "task-item__main-container";
    taskItemMainContentDiv.className = "task-item__main-content";
    checkboxForm.className = "checkbox-form";
    checkbox.className = "checkbox-form__checkbox";
    checkbox.type = "checkbox";
    checkbox.id = "task-" + task.id;
    tasks.htmlFor = "task-" + task.id;
    itemText.className = "task-item__text";
    itemText.innerText = task.text;
    deleteButtons.className = "task-item__delete-button default-button delete-button";
    deleteButtons.dataset.deleteTaskId = task.id;
    deleteButtons.textContent = " Удалить ";
    checkboxForm.append(checkbox, " ", tasks);
    taskItemMainContentDiv.append(checkboxForm, " ", itemText);
    taskItemMainDiv.append(taskItemMainContentDiv, " ", deleteButtons)
    taskItemDiv.append(taskItemMainDiv);

    tasksList.append(taskItemDiv);
};


const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = event.target.taskName.value;


    const isValid = checkTaskNameInputOnValidation(inputValue);
    const createTaskBlock = document.querySelector('.create-task-block');
    const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');
    const messageClockFromDom = document.querySelector('.error-message-block');

    console.log('messageClockFromDom', messageClockFromDom);

        if ((isValid !== true)) {
            if (messageClockFromDom) {
                messageClockFromDom.remove();
            }
            const newMessageBlock = document.createElement('span');
            newMessageBlock.className = 'error-message-block';
            newMessageBlock.textContent = isValid;
            createTaskBlock.append(newMessageBlock);
        } else if ((isValid === true) && messageClockFromDom) {
            messageClockFromDom.remove();
        }
        
        if ((isValid === true)) {
            const newId = String(Date.parse(new Date()));
            const newTask = {id: newId, completed: false, text: inputValue};
            tasks.push(newTask);
            createTasks(document.querySelector(".tasks-list"), newTask);
        }
});

const checkTaskNameInputOnValidation = (value) => {
    if (!value) {
        return 'Название задачи не должно быть пустым.';
    }
    const checkTaskOnRepeat = tasks
    .filter(({ text }) => text === value );
    if (checkTaskOnRepeat.length) {
        return 'Задача с таким названием уже существует.';
    }
    return true;
}

const createDiv = document.createElement('div');
createDiv.className = 'tasks-list';
document.body.append(createDiv);
tasks.forEach(task => createTasks(document.querySelector(".tasks-list"), task));
createModalWindow();

let idButton = 0;
let darkTheme = false;

document.addEventListener('click', (event) => {
    const { target } = event;
        const taskItemButton = target.closest('.task-item__delete-button');
        const taskId = taskItemButton?.dataset.deleteTaskId;
        if (taskId) {
                document.querySelector('.modal-overlay').classList.remove('modal-overlay_hidden');
                idButton = taskId;
        }
  });

  document.addEventListener('click', (event) => {
    const { target } = event;
        const cancelButton = target.closest('.delete-modal__cancel-button');
        const confirmButton = target.closest('.delete-modal__confirm-button');
        const modalOverlay = document.querySelector('.modal-overlay');

        if (cancelButton) {
            modalOverlay.classList.add('modal-overlay_hidden');
        }
        if (confirmButton) {
            const taskToDelete = document.querySelector(`[data-task-id="${idButton}"]`);
            if (taskToDelete) {
                for (let i = 0; i < tasks.length; i++) {
                    for (const [key, value] of Object.entries(tasks[i])) {
                          if (value === idButton) {
                            tasks.splice(i, 1);
                          }
                        }
                  }
                    taskToDelete.remove();
                    modalOverlay.classList.add('modal-overlay_hidden');
            }
        }
  });

  document.addEventListener('keyup', (event) => {
    const { key } = event;
    if (key === 'Tab') {
        console.log('keyup', key);
        const allItemsTask = document.querySelectorAll('.task-item');
        const allButton = document.querySelectorAll('button');

        if(!darkTheme) {
            darkTheme = true;
            document.body.style.background = '#24292E';
            allItemsTask.forEach(task => task.style.color = '#ffffff');
            allButton.forEach(button => button.style.border = '1px solid #ffffff');
        } else {
            darkTheme = false;
            document.body.style.background = 'initial';
            allItemsTask.forEach(task => task.style.color = 'initial');
            allButton.forEach(button => button.style.border = 'none');
        }

    }
  });

