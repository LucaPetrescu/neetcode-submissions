class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res = {}

        if(strs.length === 1){
            return [strs]
        }

        for(let i = 0; i < strs.length; i++){
            const sortedString = strs[i].split("").sort().join("")
            if(!res[sortedString]){
                res[sortedString] = []
            }
            res[sortedString].push(strs[i])
            
        }
        return Object.values(res);
    }
}
