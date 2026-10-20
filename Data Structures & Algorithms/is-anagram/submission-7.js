class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        let sMap = new Map()
        let tMap = new Map()

        for(let i = 0; i < s.length; i++) {
            if(sMap.has(s[i])) {
                sMap.set(s[i], sMap.get(s[i])+1)
            } else {
                sMap.set(s[i], 1)
            }
        }

        for(let j = 0; j < t.length; j++) {
            if(tMap.has(t[j])) {
                tMap.set(t[j], tMap.get(t[j])+1)
            } else {
                tMap.set(t[j], 1)
            }
        }

        for (const [key, value] of sMap) {
            if (tMap.get(key) !== value) {
                return false;
            }
        }
        return true
    }
}
