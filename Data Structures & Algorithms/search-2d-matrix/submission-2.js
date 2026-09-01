class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length
        let COLS = matrix[0].length

        let nrOfElements = ROWS * COLS

        let left = 0
        let right = nrOfElements - 1

        while(left <= right){
            let mid = left + Math.floor((right - left) / 2)
            let i = Math.floor(mid / COLS)
            let j = mid % COLS
            if(matrix[i][j] < target){
                left = mid + 1
            }else if(matrix[i][j] > target){
                right = mid - 1
            }else {
                return true
            }
        }
        return false
    }
}
