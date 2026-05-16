// 実行順を予測
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");

// setTimeout(() => {
//     console.log("D");
// }, 1000);

// console.log("E");

// カウントダウンタイマー
function countdown(seconds) {
    console.log(`カウントダウン開始：${seconds}秒`);

    for (let i = seconds; 0 <= i; i--) {
        setTimeout(
            () => {
                if (i > 0) {
                    console.log(i);
                } else {
                    console.log("完了！");
                }
            },
            (seconds - i) * 1000,
        );
    }
}
countdown(5);
