class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         const count = {};
    let left = 0, maxFreq = 0, max = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, count[s[right]]);

        // window is invalid if replacements needed > k
        while ((right - left + 1) - maxFreq > k) {
            count[s[left]]--;
            left++;
        }

        max = Math.max(max, right - left + 1);
    }
    return max;
    }
}
