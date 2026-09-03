class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const strsMap = new Map()
        const result = []

        for(let i = 0; i < strs.length; i++) {

            let sortedStr = strs[i].split('').sort().join('');
            if(!strsMap.has(sortedStr)){
                strsMap.set(sortedStr, [strs[i]])
            } else {
                strsMap.get(sortedStr).push(strs[i])
            }
            
        }

        for(const val of strsMap.values()) {
            result.push(val)
        }

        return result

    }
}
