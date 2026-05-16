// ========第一段階========
const name = "自分の名前";
console.log(`こんにちは、${name}さん`);

const a = 5;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const score = 79;
if (score >= 80) {
    console.log("合格");
} else {
    console.log("不合格");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

function greet(myname) {
    console.log(`こんにちは、${myname}さん`);
}
greet("自分");

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isAdult(17));

// ========第二段階========
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}

const numbers = [10, 20, 30, 40, 50];
let total = 0;
for (const number of numbers) {
    total += number;
}
console.log(total);

const scores = [55, 80, 72, 90, 48];
for (const score of scores) {
    if (score >= 80) {
        console.log(score);
    }
}

const prices = [100, 200, 300];
const newPrices = [];
for (const price of prices) {
    newPrices.push(price * 2);
}
for (const price of newPrices) {
    console.log(price);
}
console.log(newPrices);

const names = ["田中", "佐藤", "鈴木"];
if (names.includes("田中")) {
    console.log("入っています");
} else {
    console.log("入っていません");
}

// ========第三段階========
const user = {
    name: "自分",
    age: 30,
    job: "teacher",
};
console.log(user.name);

const product = {
    name: "新商品",
    price: 2500,
    inStock: false,
};
if (product.inStock === true) {
    console.log("在庫あり");
} else {
    console.log("在庫なし");
}

const users = [
    { name: "田中", age: 17 },
    { name: "佐藤", age: 22 },
    { name: "鈴木", age: 19 },
];
for (const user of users) {
    if (user.age >= 18) {
        console.log(user);
    }
}

const items = [
    { name: "PC", price: 35000 },
    { name: "iphone", price: 2900 },
    { name: "洗濯機", price: 500 },
    { name: "テレビ", price: 55000 },
    { name: "ぬいぐるみ", price: 3000 },
];
for (const item of items) {
    if (item.price >= 3000) {
        console.log(item.name);
    }
}

// ========第四段階========
let todos = [
    { id: 1, text: "買い物", completed: false },
    { id: 2, text: "掃除", completed: true },
    { id: 3, text: "勉強", completed: false },
];
for (const todo of todos) {
    if (!todo.completed) {
        console.log(todo.text);
    }
}
function getIncompleteTodos(todoList) {
    return todoList.filter((todo) => !todo.completed);
}
console.log(getIncompleteTodos(todos));

function completeTodo(todoList, todoId) {
    return todoList.map((todo) => {
        if (todo.id === todoId) {
            return { ...todo, completed: true };
        }
        return todo;
    });
}
todos = completeTodo(todos, 3);
console.log(todos);

const products = [
    { id: 1, name: "ノート", price: 200 },
    { id: 2, name: "ペン", price: 100 },
    { id: 3, name: "消しゴム", price: 80 },
];
for (const product of products) {
    console.log(product.name);
}

const students = [
    { name: "田中", score: 80 },
    { name: "佐藤", score: 70 },
    { name: "鈴木", score: 90 },
];
let sumScore = 0;
for (const student of students) {
    sumScore += student.score;
}
console.log(sumScore / students.length);

// ========第五段階========
const hello = document.getElementById("hello");
hello.textContent = "こんにちは、JavaScript";

const button = document.getElementById("my-button");
button.addEventListener("click", function () {
    alert("ボタンが押されました");
});

const addText = document.getElementById("welcome");
addText.textContent = "ようこそ";

const target = document.getElementById("target");
const color = document.getElementById("color");
color.addEventListener("click", function () {
    target.style.color = "red";
});

const back = document.getElementById("back");
back.addEventListener("click", function () {
    target.style.backgroundColor = "purple";
});

const input = document.getElementById("input");
const helloButton = document.getElementById("hello-bt");
const view = document.getElementById("view");
helloButton.addEventListener("click", function () {
    view.textContent = `こんにちは、${input.value}さん`;
});

const todoInput = document.getElementById("input-todo");
const todoButton = document.getElementById("button-todo");
const todoList = document.getElementById("list-todo");
todoButton.addEventListener("click", function () {
    const text = todoInput.value;

    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;

        li.classList.add("cursor-pointer");

        li.addEventListener("click", function () {
            li.classList.toggle("bg-green-500");
        });

        todoList.appendChild(li);
        todoInput.value = "";
    }
});
