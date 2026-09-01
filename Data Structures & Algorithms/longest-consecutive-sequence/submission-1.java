class Solution {
    public int longestConsecutive(int[] nums) {

        HashSet<Integer> elementsSet = new HashSet<>();
        int longest = 0;
        

        for (int num : nums) {
            elementsSet.add(num);
        }

        for(int i = 0; i < nums.length; i++){
            if(!elementsSet.contains(nums[i] - 1)){
                int currentNumber = nums[i];
                int currentLength = 1;
                while(elementsSet.contains(currentNumber + currentLength)){
                    currentLength++;
                    
                }

                longest = Math.max(longest, currentLength);
            }
        }
        return longest;
    }
}
