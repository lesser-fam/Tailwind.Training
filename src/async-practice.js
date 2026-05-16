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
// function countdown(seconds) {
//     console.log(`カウントダウン開始：${seconds}秒`);

//     for (let i = seconds; 0 <= i; i--) {
//         setTimeout(
//             () => {
//                 if (i > 0) {
//                     console.log(i);
//                 } else {
//                     console.log("完了！");
//                 }
//             },
//             (seconds - i) * 1000,
//         );
//     }
// }
// countdown(5);

// データ取得シミュレーション(未習熟)
function fetchData(id) {
    return new Promise((resolve, reject) => {
        console.log(`データ取得中...（ID：${id}`);

        setTimeout(() => {
            if (id <= 0) {
                reject(new Error("無効なIDです"));
            } else {
                resolve({
                    id: id,
                    title: `データ ${id}`,
                    createdAt: new Data().toISOString(),
                });
            }
        }, 1000);
    });
}

fetchData(1)
    .then((data) => {
        console.log("取得成功:", data);
    })
    .catch((error) => {
        console.error("エラー:", error.message);
    });

fetchData(-1)
    .then((data) => {
        console.log("取得成功:", data);
    })
    .catch((error) => {
        console.error("エラー:", error.message);
    });
