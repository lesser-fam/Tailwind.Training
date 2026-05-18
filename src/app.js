// const todoInput = document.querySelector("#todo-input");
// const addButton = document.querySelector("#add-button");
// const todoList = document.querySelector("#todo-list");

// const { Document } = require("postcss");
// const { doc } = require("prettier");

// ボタンがクリックされたらhandleClick関数を実行
// addButton.addEventListener("click", function () {
//     const todoText = todoInput.value;

//     if (todoText === "") return;

//     const newTodoItem = document.createElement("li");

//     newTodoItem.textContent = todoText;

//     todoList.appendChild(newTodoItem);

//     todoInput.value = "";
// });

// 5-2-4:実践
async function fetchPosts() {
    const postList = document.querySelector("#posts-container");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.forEach((post) => {
        const postItem = document.createElement("div");
        postItem.classList.add("post-card");

        const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;
        postTitle.classList.add("post-title");
        postItem.appendChild(postTitle);

        const postContent = document.createElement("p");
        postContent.textContent = post.body;
        postContent.classList.add("post-content");
        postItem.appendChild(postContent);

        postList.appendChild(postItem);
    });
}
fetchPosts();
