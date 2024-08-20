/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    return [...s].reduce((acc, curr)=> {
        if(curr !== '*'){
           acc.push(curr);          
        }else{
            acc.pop();
        }
        return acc;         
    }, []).join('')
};