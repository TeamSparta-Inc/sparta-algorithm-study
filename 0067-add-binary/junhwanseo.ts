function addBinary(a: string, b: string): string {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        // Get digits from each string, use 0 if we've run out of digits
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        
        // Add digits and carry
        const sum = digitA + digitB + carry;
        
        // Add the remainder to result string
        result = (sum % 2) + result;
        
        // Update carry for next iteration
        carry = Math.floor(sum / 2);
        
        // Move pointers
        i--;
        j--;
    }
    
    return result;
}