/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let index = 0; index < s.length; index = index + 2) {
        if (pairs[s[index]] !== s[index+1]) {
            return false
        }

    }
    return true
};
