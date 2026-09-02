class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
        const numsMap = new Map()

        for(let i = 0; i < nums.length; i++) {

            let difference = target - nums[i]
            
            if(numsMap.has(difference)) {
                return [i, numsMap.get(difference)].sort()
            }
            numsMap.set(nums[i], i)
        }
    }
}
