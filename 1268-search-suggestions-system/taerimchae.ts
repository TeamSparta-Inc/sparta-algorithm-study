function suggestedProducts(products: string[], searchWord: string): string[][] {


    // Sort products in lexicographically ascending order
    products.sort((a, b) => a.localeCompare(b));

    const result: string[][] = [];
    let prefix = '';

    for (let char of searchWord) {
        prefix += char;
        const matches = products.filter(product => product.startsWith(prefix));
        result.push(matches.slice(0, 3));
    }

    return result;
};