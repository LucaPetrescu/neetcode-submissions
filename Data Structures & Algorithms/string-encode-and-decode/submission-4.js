class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newString = ""

        for(let i = 0; i < strs.length; i++){
            newString = newString + strs[i].length + "#" + strs[i];
        }

        return newString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let decodedStrings = []

        let i = 0;

        while(i < str.length){
            let j = i

            while(str[j] !== "#"){
                j++
            }

            let length = Number(str.substring(i, j))

            i = j + 1 + length

            let string = str.substring(j + 1, i)

            decodedStrings.push(string)
            
        }
        return decodedStrings

    }
}
