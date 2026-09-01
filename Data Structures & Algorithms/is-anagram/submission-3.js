class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;  // Early exit
    
    const sMap = new Map();
    const tMap = new Map();

    for(let i = 0; i < s.length; i++) {       // Fixed condition
        if(!sMap.has(s[i])) {
            sMap.set(s[i], 1);
        } else {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        }
    }

    for(let j = 0; j < t.length; j++) {       // Fixed condition
        if(!tMap.has(t[j])) {                 // Fixed logic
            tMap.set(t[j], 1);
        } else {
            tMap.set(t[j], tMap.get(t[j]) + 1);
        }
    }

    // Compare maps
    if (sMap.size !== tMap.size) return false;
    
    for (let [key, value] of sMap) {
        if (!tMap.has(key) || tMap.get(key) !== value) {
            return false;
        }
    }
    
    return true;

    }
}
