function solution(new_id) {
    let result = new_id.toLowerCase()
        .replace(/[^\w\-\.]/g, '');
    
    result = result.replace(/\.{2,}/g, '.');
    
    result = result.replace(/^\.|\.$/g, '');
    
    if (!result) {
        result = 'a';
    }
    
    if (result.length > 15) {
        result = result.slice(0, 15).replace(/\.$/, '');
    }
    
    while (result.length < 3) {
        result += result[result.length - 1];
    }
    
    return result;
}
