class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res = {}

        for(let s of strs){
            let letterInASCIICount = new Array(26).fill(0);
            for(let char of s){
                letterInASCIICount[char.charCodeAt(0) - 'a'.charCodeAt(0)] = letterInASCIICount[char.charCodeAt(0) - 'a'.charCodeAt(0)] + 1
            }
            let keyFromASCIIOccurences = letterInASCIICount.join(",")
            
            if(!res[keyFromASCIIOccurences]){
                res[keyFromASCIIOccurences] = []
            }

            res[keyFromASCIIOccurences].push(s);

        }

        return Object.values(res)
    }
}
