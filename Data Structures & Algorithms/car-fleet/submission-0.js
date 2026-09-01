class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        let pairs = position.map((pos, i) => [pos, speed[i]])

        pairs.sort((a, b) => b[0] - a[0])
        
        let stack = []

        for(let i = 0; i < position.length; i++) {
            let position = pairs[i][0]
            let speed = pairs[i][1]

            let currentTime = (target - position) / speed;

            if(stack.length === 0 || currentTime > stack[stack.length - 1]){
                stack.push(currentTime)
            }
        }
        return stack.length
    }
}
