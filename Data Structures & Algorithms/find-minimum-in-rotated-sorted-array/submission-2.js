class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        let noOfRotations = 0;

        let min = nums[0]

        for(let i =0; i < nums.length; i++){

            if(nums[i] > nums[i + 1]){
                min = nums[i + 1]
                return min
            }
        }
        return min
    }
}
