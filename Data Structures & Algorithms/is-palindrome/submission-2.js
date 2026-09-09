class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        s = s.toLowerCase().replace(/\s/g, '').replace(/[^\w\s]/gi, '');

        for (let i = 0, j = s.length - 1; i < j; i++, j--) {
            if(s[i] !== s[j]) {
                return false
            }
        }
        return true
    }
}
