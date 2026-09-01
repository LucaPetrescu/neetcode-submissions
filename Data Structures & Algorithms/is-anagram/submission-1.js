class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length){
            return false;
        }
        let sHash = {}
        let tHash = {}

        for(let i = 0; i < s.length; i++){
            if(sHash.hasOwnProperty(s[i])){
                sHash[s[i]]++
            }else{
                sHash[s[i]] = 1
            }

            if(tHash.hasOwnProperty(t[i])){
                tHash[t[i]]++
            }else{
                tHash[t[i]] = 1;
            }
        }

        for(const key in sHash){
            if(sHash[key] !== tHash[key]) return false
            
        }
        return true;
    }
}
