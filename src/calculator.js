const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "0では割れません";
    }
    return a / b;
};

const calculate = (a, unknown, b) => {
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

console.log("足し算:9 + 3 =", calculate(9, "+", 3));
console.log("引き算:9 - 3 =", calculate(9, "-", 3));
console.log("掛け算:9 × 3 =", calculate(9, "*", 3));
console.log("割り算:9 ÷ 3 =", calculate(9, "/", 3));

console.log("エラー:9 @ 3 =", calculate(9, "@", 3));

const loops = [
    {
        a: 3,
        unknown: "-",
        b: 2,
    },
    {
        a: 5,
        unknown: "*",
        b: 10,
    },
    {
        a: 3,
        unknown: "/",
        b: 2,
    },
    {
        a: 3,
        unknown: "%",
        b: 2,
    },
    {
        a: 3,
        unknown: "+",
        b: 2,
    },
];

for (const loop of loops) {
    const result = calculate(loop.a, loop.unknown, loop.b);
    console.log(`${loop.a} ${loop.unknown} ${loop.b} = ${result}`);
}

const history = [];

const calculatorWithHistory = (a, unknown, b) => {
    const result = calculate(a, unknown, b);
    const record = {
        expression: `${a} ${unknown} ${b}`,
        result: result,
        timestamp: new Date().toLocaleString("ja-JP"),
    };
    history.push(record);
    return result;
};

const showHistory = () => {
    console.log("=== 計算履歴 ===");
    if (history.length === 0) {
        console.log("履歴がありません");
        return;
    }
    for (let i = 0; i < history.length; i++) {
        const record = history[i];
        console.log(
            `${i + 1}. ${record.expression} = ${record.result} (${record.timestamp})`,
        );
    }
};

showHistory();

calculatorWithHistory(100, "+", 200);
calculatorWithHistory(150, "-", 100);
calculatorWithHistory(100, "*", 200);

showHistory();
