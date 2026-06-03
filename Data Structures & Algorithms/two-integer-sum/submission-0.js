class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();
        for (let i =0; i<nums.length; i++){
            const complement = target - nums[i];
            if(seen.has(complement)){
                return [i, nums.indexOf(complement)];
            } else {
                seen.set(nums[i])
            }
        }
    }
}
