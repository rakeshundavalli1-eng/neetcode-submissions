class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sorted = [...new Set(nums.sort((a, b) => a - b))];
        let output = 1
        let tempOutput = 1
        if(nums.length === 0) return 0;
        for (let i =0; i<sorted.length; i++){
            if(sorted[i + 1] === sorted[i] +1){
                output = output +1;
            } 
            if(sorted[i + 1] !== sorted[i] +1){
                if(output > tempOutput) tempOutput = output;
                output = 1;
            } 
        }
        return output > tempOutput? output : tempOutput;
    }
}
