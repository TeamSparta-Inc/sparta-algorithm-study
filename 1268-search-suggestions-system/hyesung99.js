/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort(); 
    
    let result = [];
    let left = 0, right = products.length - 1;
    
    for (let i = 0; i < searchWord.length; i++) {
        let c = searchWord[i];
        
        
        while (left <= right && (products[left].length <= i || products[left][i] < c)) left++;

        

        while (left <= right && (products[right].length <= i || products[right][i] > c)) right--;
        
        
        let suggestions = [];
        for (let j = left; j <= right && j < left + 3; j++) {
            suggestions.push(products[j]);
        }
        result.push(suggestions);
    }
    
    return result;  
};