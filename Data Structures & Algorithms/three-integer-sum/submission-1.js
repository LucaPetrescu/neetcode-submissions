class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        
        nums.sort((a, b) => a - b);
        const triplets = [];
        for(let k = 0; k < nums.length; k++) {
            if (nums[k] > 0) break;
            if (k > 0 && nums[k] === nums[k - 1]) continue;

            let l = k + 1
            let r = nums.length - 1

            while(l < r) {
                let sum = nums[l] + nums[r] + nums[k]

                if(sum === 0) {
                    triplets.push([nums[l], nums[r], nums[k]])
                    l++
                    r--
                    while(l < r && nums[l] === nums[l - 1]) {
                        l++
                    }
                } else if (sum > 0) {
                    r--
                } else if (sum < 0) {
                    l++
                }
            }

            
        }
        return triplets
        
    }
}
