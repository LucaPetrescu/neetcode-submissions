class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let sumMap = {}

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i]

            if(sumMap.hasOwnProperty(diff)){
                return[i, sumMap[diff]]
            }
            
            sumMap[nums[i]] = i;

        }

    }
}
