class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let numsMap = new Map()

        for(let i = 0; i < nums.length; i++) {
            if(!numsMap.has(nums[i])) {
                numsMap.set(nums[i], 1)
            } else {
                let freq = numsMap.get(nums[i])
                freq++
                numsMap.set(nums[i], freq)
            }
        }

        return [...numsMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([num]) => num);

    }
}
