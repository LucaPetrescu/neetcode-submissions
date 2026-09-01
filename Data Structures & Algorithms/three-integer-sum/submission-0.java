class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        Set<List<Integer>> tripletsSet = new HashSet<>();

        Arrays.sort(nums);

        for(int i = 0; i < nums.length; i++){
            
            int right = nums.length - 1;
            int left = i + 1;

            while(left < right){
                int sum = nums[i] + nums[left] + nums[right];

                if(sum > 0){
                    right--;
                }else if(sum < 0){
                    left++;
                }else{
                    tripletsSet.add(new ArrayList<>(Arrays.asList(nums[i], nums[left], nums[right])));
                    left++;
                    right--;
                    
                }
            }

        }

        
        return new ArrayList<>(tripletsSet);

    }
}
