function ipv4Parser(ip, mask) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = mask.split('.').map(Number);

    let networkBlock = [];
    let hostIdentifier = [];

    for (let i = 0; i < 4; i++) {
        networkBlock.push(ipParts[i] & maskParts[i]);
        hostIdentifier.push(ipParts[i] & ~maskParts[i]);
    }

    return [`${networkBlock.join('.')}`, `${hostIdentifier.join('.')}`];
}
