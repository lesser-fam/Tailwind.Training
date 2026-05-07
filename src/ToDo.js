let todos = [
    { id: 1, text: "初心者", completed: true },
    { id: 2, text: "中級者", completed: false },
    { id: 3, text: "上級者", completed: false },
];

function getIncompleteTodos(todoList) {
    return todoList.filter((todo) => !todo.completed);
}

console.log("未完了のToDo:", getIncompleteTodos(todos));

function completeTodo(todoList, todoId) {
    return todoList.map((todo) => {
        if (todo.id === todoId) {
            return { ...todo, completed: true };
        }
        return todo;
    });
}

todos = completeTodo(todos, 2);
console.log("更新後のToDoリスト：", todos);
