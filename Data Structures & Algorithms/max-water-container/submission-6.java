class Solution {
    public int maxArea(int[] heights) {
        int left = 0;
        int right = heights.length - 1;

        int maxResult = 0;
        int currentArea = 0;

        while(left < right) {
            int currentHeight = Math.min(heights[left], heights[right]);
            int width = Math.abs(right - left);

            currentArea = currentHeight * width;

            maxResult = Math.max(currentArea, maxResult);

            if(heights[left] >= heights[right]) {
                right--;
            } else if(heights[left] <= heights[right]) {
                left++;
            }
        }

        return maxResult;
    }
}
