class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length
        let COLS = matrix[0].length

        let l = 0
        let r = ROWS * COLS - 1;

        while(l <= r) {
            let mid = l + Math.floor((r - l) / 2)

            let col = mid % COLS
            let row = Math.floor(mid / COLS)

            if(target === matrix[row][col]) {
                return true
            } else if(target > matrix[row][col]) {
                l = mid + 1
            } else if(target < matrix[row][col]) {
                r = mid - 1;
            }
        }

        return false
    }
}
