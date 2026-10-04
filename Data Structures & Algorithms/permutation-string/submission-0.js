class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        need[s1.charCodeAt(i) - 97]++;
        window[s2.charCodeAt(i) - 97]++;
    }

    if (need.join() === window.join()) return true;

    for (let right = s1.length; right < s2.length; right++) {
        window[s2.charCodeAt(right) - 97]++;                    // add new char
        window[s2.charCodeAt(right - s1.length) - 97]--;        // remove left char

        if (need.join() === window.join()) return true;
    }

    return false;
}
}
