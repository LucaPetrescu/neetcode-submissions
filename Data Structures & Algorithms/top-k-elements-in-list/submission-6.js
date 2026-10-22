class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numsMap = new Map()

        for(let i = 0; i < nums.length; i++) {
            if(numsMap.get(nums[i])) {
                numsMap.set(nums[i], numsMap.get(nums[i]) + 1)
            } else {
                numsMap.set(nums[i], 1)
            }
        }

        const arraySortat = [...numsMap.entries()].sort((a, b) => b[1] - a[1])

        return(arraySortat
        .slice(0, k)).map(pereche => pereche[0]);
    }
}
