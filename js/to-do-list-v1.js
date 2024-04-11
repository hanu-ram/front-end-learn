const todoList = [];
renderTodoList();
function renderTodoList() {
    let todoDisplayHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        todoDisplayHtml += `<div class = "todo-task-name">${todoList[i].getName}</div> 
                            <div class = "todo-task-date">${todoList[i].getDate}</div>
                            <button class="delete-button" onclick="removeTask(todoList, ${i})">Delete</button></>`
    }
    document.querySelector('.js-todo-list').innerHTML = todoDisplayHtml;
}

function removeTask(todoList, i) {
    todoList.splice(i, 1);
    renderTodoList();
}

function addTodo() {
    const taskValue = document.querySelector('.js-todo').value;
    const dateValue = document.querySelector('.js-date').value;
    const todoObject = {
        name : taskValue,
        date: dateValue,
        get getName() {
            return this.name;
        },
        get getDate() {
            return this.date;
        },
    }
    todoList.push(todoObject);
    renderTodoList();
}