function toWeirdCase(string) {
    return string
        .split(' ')
        .map(word => 
            word.split('')
                .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
                .join('')
        )
        .join(' ');
}
