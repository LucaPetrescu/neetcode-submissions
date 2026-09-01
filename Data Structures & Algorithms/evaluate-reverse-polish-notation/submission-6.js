class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let stack = []

        for(let i = 0; i < tokens.length; i++){
            if(!isNaN(tokens[i])){
                stack.push(parseInt(tokens[i]))
            }else{
                
                let nr1 = stack.pop();
                let nr2 = stack.pop();

                if(tokens[i] === "+"){
                    stack.push(nr1 + nr2) 
                }else if(tokens[i] === '-'){
                    stack.push(nr2 - nr1)
                }else if(tokens[i] === "*"){
                    stack.push(nr1 * nr2)
                }else if(tokens[i] === "/"){
                    stack.push(Math.trunc(nr2 / nr1)); 
                }

            }
        }

        return stack.pop()

    }
}
