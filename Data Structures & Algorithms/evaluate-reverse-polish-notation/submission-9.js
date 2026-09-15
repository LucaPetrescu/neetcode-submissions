class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let nbrStack = []

        

        for(let i = 0; i < tokens.length; i++) {
            if(!isNaN(tokens[i])) {
                nbrStack.push(tokens[i])
            } else if(nbrStack.length >= 2) {
                let nbr2 = parseInt(nbrStack.pop())
                let nbr1 = parseInt(nbrStack.pop())
                if(tokens[i] === '+') {
                    nbrStack.push(nbr1 + nbr2)
                    console.log(nbrStack[nbrStack.length - 1])
                } else if(tokens[i] === '-') {
                    nbrStack.push(nbr1 - nbr2)
                } else if(tokens[i] === '*') {
                    nbrStack.push(nbr1 * nbr2)
                } else if(tokens[i] === '/') {
                    nbrStack.push(Math.trunc(nbr1 / nbr2))
                }
            }
        }
        return nbrStack.pop()
    }
}
