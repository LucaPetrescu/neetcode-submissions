class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let anagramMap = new Map()
        let result = []

        for(let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split("").sort().join("");
            if(anagramMap.has(sorted)) {
                anagramMap.get(sorted).push(strs[i])
            } else {
                anagramMap.set(sorted, [strs[i]])
            }
        } 

        anagramMap.forEach((value) => {
            result.push(value);
        });

        return result     
    }
}
