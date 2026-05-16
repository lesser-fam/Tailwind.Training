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
