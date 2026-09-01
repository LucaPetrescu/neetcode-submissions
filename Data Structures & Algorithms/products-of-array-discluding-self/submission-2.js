class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let leftProduct = 1
        let rightProduct = 1

        let leftArr = new Array(nums.length).fill(1)
        let rightArr = new Array(nums.length).fill(1)

        let res = []

        for(let i = 0; i < nums.length; i++){
            leftArr[i] = leftProduct
            leftProduct = leftProduct * nums[i]
        }

        
        for(let i = nums.length - 1; i >= 0; i--){
            rightArr[i] = rightProduct
            rightProduct = rightProduct * nums[i]
        }

        for(let i = 0; i < nums.length; i++){
            res.push(rightArr[i] * leftArr[i])
        }

        return res
    }
}
