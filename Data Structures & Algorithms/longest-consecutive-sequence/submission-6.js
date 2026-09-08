class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length === 0) {
            return 0
        }

        let maxStreak = 1;
        let currentStreak = 1
        nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === nums[i + 1]) {
                continue
            } else if(nums[i + 1] - nums[i] === 1) {
                currentStreak++
            } else {
                currentStreak = 1
            }
            maxStreak = Math.max(maxStreak, currentStreak)
        }

        return maxStreak;
    }
}
