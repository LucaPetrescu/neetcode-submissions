class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let currentMax = 0
        let maxResult = 0

        let i = 0;
        let j = heights.length - 1

        while(i < j) {
            let minHeigth = Math.min(heights[i], heights[j])

            currentMax = minHeigth * Math.abs(i - j);
            maxResult = Math.max(currentMax, maxResult)
            if(heights[i] <= heights[j]) {
                i++
            }else{
                j--
            }
           
        }

        return maxResult
    }
}
