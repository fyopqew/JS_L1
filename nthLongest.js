function longest(arr, n) {
    let sortedArr = [...arr].sort((a, b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b));

    return sortedArr[n - 1];
}   