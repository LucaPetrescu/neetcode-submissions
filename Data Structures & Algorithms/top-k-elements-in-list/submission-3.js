class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let res = {}

        for(let i = 0; i < nums.length; i++){
            if(!res[nums[i]]){
                res[nums[i]] = 1;
            }else{
                res[nums[i]]++
            }
        }
        
        const sortedKeys = Object.keys(res)
            .sort((keyA, keyB) => res[keyB] - res[keyA]);

        return (sortedKeys.slice(0, k).map(Number))

    }
}
