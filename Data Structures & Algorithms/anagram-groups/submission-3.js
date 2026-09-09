class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let strsMap = new Map()

        for(let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split('').sort().join('');
            if(!strsMap.has(sorted)) {
                strsMap.set(sorted, [strs[i]])
            } else {
                let foundSorted = strsMap.get(sorted)
                foundSorted.push(strs[i])
                strsMap.set(sorted, foundSorted)
            }
        }

        return Array.from(strsMap.values())
    }
}
