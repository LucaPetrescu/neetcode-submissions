class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let numsMap = new Map()

        for(let i = 0; i < nums.length; i++) {
            if(numsMap.has(nums[i])){
                return true
            }
            numsMap.set(nums[i], 1)

        }
        return false
    }
}
