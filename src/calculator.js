const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "0では割れません";
    }
    return a / b;
};

const calculator = (a, unknown, b) => {
    if (unknown === "+") {
        return add(a, b);
    } else if (unknown === "-") {
        return subtract(a, b);
    } else if (unknown === "*") {
        return multiply(a, b);
    } else if (unknown === "/") {
        return divide(a, b);
    } else {
        return "エラーです";
    }
};

console.log("足し算:9 + 3 =", calculator(9, "+", 3));
console.log("引き算:9 - 3 =", calculator(9, "-", 3));
console.log("掛け算:9 × 3 =", calculator(9, "*", 3));
console.log("割り算:9 ÷ 3 =", calculator(9, "/", 3));

console.log("エラー:9 @ 3 =", calculator(9, "@", 3));
