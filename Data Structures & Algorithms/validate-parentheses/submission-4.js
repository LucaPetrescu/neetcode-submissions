class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let paraStack = []

        for(let i = 0; i < s.length; i++) {
            if(paraStack[paraStack.length - 1] === '[' && s[i] ===  ']') {
                paraStack.pop()
            } else if (paraStack[paraStack.length - 1] === '(' && s[i] ===  ')'){
                paraStack.pop()
            } else if (paraStack[paraStack.length - 1] === '{' && s[i] ===  '}') {
                paraStack.pop()
            } else {
                paraStack.push(s[i])
            }
        }

        if(paraStack.length === 0) {
            return true
        }

        return false
    }
}
