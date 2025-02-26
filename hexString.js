function hexStringToRGB(hexString) {
    let r = parseInt(hexString.slice(1, 3), 16);
    let g = parseInt(hexString.slice(3, 5), 16);
    let b = parseInt(hexString.slice(5, 7), 16);

    return { r, g, b };
}