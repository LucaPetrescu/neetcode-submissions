
class Solution {
    public int maxArea(int[] heights) {

        int left = 0;
        int right = heights.length - 1;
        int max = 0;

        while(left < right){
            int width = right - left;
            int min = Math.min(heights[left], heights[right]);
            
            int currentArea = min * width;

            max = Math.max(max, currentArea);

            if(heights[left] > heights[right]){
                right--;
            }else {
                left++;
            }

            
        }

        return max;

    }
}
