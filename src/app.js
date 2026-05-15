const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// ボタンがクリックされたらhandleClick関数を実行
addButton.addEventListener("click", function () {
    const todoText = todoInput.value;

    if (todoText === "") return;

    const newTodoItem = document.createElement("li");

    newTodoItem.textContent = todoText;

    todoList.appendChild(newTodoItem);

    todoInput.value = "";
});
