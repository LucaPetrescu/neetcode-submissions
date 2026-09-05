class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ""
        for(let i = 0; i < strs.length; i++) {
            encodedString = encodedString + strs[i].length + "#" + strs[i]
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0

        while(i < str.length) {
            let j = i
            while(str[j] !== '#') {
                j++
            }
            const length = parseInt(str.slice(i, j))
            const skipTheNumberPlusTheActualWord = j + 1 + length
            const tempStr = str.slice(j + 1, skipTheNumberPlusTheActualWord)

            res.push(tempStr)

            i = skipTheNumberPlusTheActualWord
        }

        return res
    }
}
