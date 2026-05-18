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

// =============================================
// =============  5-2-4:実践  ==================
// =============================================

const postList = document.querySelector("#posts-container");
const loading = document.querySelector("#loading");
const errorMessage = document.querySelector("#error");
const empty = document.querySelector("#empty");

function showElement(element) {
    element.style.display = "block";
}

function hideElement(element) {
    element.style.display = "none";
}

async function fetchPosts() {
    showElement(loading);
    hideElement(postList);
    hideElement(errorMessage);
    hideElement(empty);

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status:${response.status}`);
        }
        const posts = await response.json();

        hideElement(loading);

        if (posts.length === 0) {
            showElement(empty);
        } else {
            showElement(postList);
            postList.innerHTML = "";
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
    } catch (err) {
        hideElement(loading);
        showElement(errorMessage);
    }
}
fetchPosts();
