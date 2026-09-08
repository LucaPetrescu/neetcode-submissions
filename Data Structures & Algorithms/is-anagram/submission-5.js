class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }

        let sMap = new Map()
        let tMap = new Map()

        for(let i = 0; i < s.length; i++) {
            if(!sMap.has(s[i])) {
                sMap.set(s[i], 1)
            } else {
                let newVal = sMap.get(s[i])
                newVal++
                sMap.set(s[i], newVal)
            }
        }

        for(let i = 0; i < t.length; i++) {
            if(!tMap.has(t[i])) {
                tMap.set(t[i], 1)
            } else {
                let newVal = tMap.get(t[i])
                newVal++
                tMap.set(t[i], newVal)
            }
        }

        for(const[key, value] of sMap) {
            if(value !== tMap.get(key)) {
                return false
            }
        }
        return true
    }
}
