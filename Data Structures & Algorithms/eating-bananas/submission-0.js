class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {


        const hoursNeeded = (k) => {
            let hours = 0
            for(let i =0; i < piles.length; i++){
                hours = hours + Math.ceil(piles[i] / k)
            }
            return hours
        }

        let left = 1
        let right = Math.max(...piles)

        while(left < right){
            let mid = Math.floor((right + left) / 2)

            if(hoursNeeded(mid) <= h){
                right = mid;
            }else{
                left = mid + 1
            }
        }
        return left
    }
}
