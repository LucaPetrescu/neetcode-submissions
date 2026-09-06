class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefixSum = new Array(nums.length);
        let product = 1;

        let zeroCount = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== 0) {
                product = product * nums[i]
            } else {
                zeroCount++
            }
        }

        if(zeroCount > 1) {
            return prefixSum.fill(0)
        }

        for(let i = 0; i < nums.length; i++) {
            if(zeroCount > 0) {
                if(nums[i] === 0) {
                    prefixSum[i] = product
                } else {
                    prefixSum[i] = 0
                }
            } else {
                let current = nums[i]
                prefixSum[i] = product / current
            }
            
        }

        return prefixSum
    }
}
