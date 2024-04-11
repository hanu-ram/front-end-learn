const todoList = [];

function renderTodoList() {
    const todoListContainer = document.querySelector('.js-todo-list');
    todoListContainer.innerHTML = ''; // Clear existing content
    todoList.forEach((todo, index) => {

        const nameElement = document.createElement('div');
        nameElement.classList.add('todo-task-name');
        nameElement.textContent = todo.name;

        const dateElement = document.createElement('div');
        dateElement.classList.add('todo-task-date');
        dateElement.textContent = todo.date;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeTask(index));

        todoListContainer.appendChild(nameElement);
        todoListContainer.appendChild(dateElement);
        todoListContainer.appendChild(deleteButton);

    });
}

function removeTask(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function addTodo() {
    const taskValue = document.querySelector('.js-todo').value;
    const dateValue = document.querySelector('.js-date').value;

    const todoObject = {
        name: taskValue,
        date: dateValue
    };

    todoList.push(todoObject);
    renderTodoList();
}
