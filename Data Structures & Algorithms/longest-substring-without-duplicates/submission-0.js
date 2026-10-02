class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let subset = new Set()
        let first = 0
        let max = 0

        for(let second = 0; second < s.length; second++) {
            while(subset.has(s[second])) {
                subset.delete(s[first])
                first++
            }
            subset.add(s[second])
            max = Math.max(max, second - first + 1)
        }
        return max
    }
}
