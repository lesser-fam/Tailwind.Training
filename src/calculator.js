const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "0では割れません";
    }
    return a / b;
};

console.log("足し算:5 + 10 =", add(5, 10));
console.log("引き算:5 - 10 =", subtract(5, 10));
console.log("掛け算:5 × 10 =", multiply(5, 10));
console.log("割り算:5 ÷ 0 =", divide(5, 0));
