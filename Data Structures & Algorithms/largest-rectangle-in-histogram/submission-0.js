class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []

        let maxArea = 0;

        for(let i = 0; i < heights.length; i++){
            let start = i
            while(stack.length > 0 && stack[stack.length - 1][0] > heights[i]){
                const[height, index] = stack.pop()
                let width = i - index
                let area = width * height
                maxArea = Math.max(maxArea, area)
                start = index
            }
            stack.push([heights[i], start])
        }
        
        while(stack.length > 0){
            const [height, index] = stack.pop()
            let width = heights.length - index
            maxArea = Math.max(maxArea, height * width)
        }

        return maxArea
    }
}
