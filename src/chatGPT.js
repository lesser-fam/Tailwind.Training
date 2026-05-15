// 第一段階

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
