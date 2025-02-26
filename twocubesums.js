function hasTwoCubeSums(n) {
    let cubeSums = [];
let limit = Math.cbrt(n) | 0;

for (let a = 1; a <= limit; a++) {
    let a3 = a ** 3;
    if (a3 >= n) break;

    for (let b = a + 1; b <= limit; b++) {
        let b3 = b ** 3;
        if (a3 + b3 === n) {
            cubeSums.push([a, b]);
        }
    }
}

return cubeSums.length >= 2;
}
