function primeFactors(n) {
    let factors = {};
    let divisor = 2;

    while (n > 1) {
        while (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            n /= divisor;
        }
        divisor++;
    }

    return Object.keys(factors)
        .map(p => factors[p] === 1 ? `(${p})` : `(${p}**${factors[p]})`)
        .join('');
}