class Solution {
    public int[] twoSum(int[] numbers, int target) {

        int indexLeft = 0;
        int indexRight = numbers.length - 1;

        while(indexLeft < indexRight){
            
            System.out.println("Before " + numbers[indexLeft] + " " + numbers[indexRight]);

            if(numbers[indexLeft] + numbers[indexRight] < target){
                indexLeft++;
            }

            if(numbers[indexLeft] + numbers[indexRight] > target){
                indexRight--;
            }

            if(numbers[indexLeft] + numbers[indexRight] == target){
                return new int[]{indexLeft + 1, indexRight + 1};
                
            }

        }

        return null;

    }
}
