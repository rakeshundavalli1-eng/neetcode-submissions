class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if (nums.empty()) return 0;

        // Sort the array
        sort(nums.begin(), nums.end());

        // Remove duplicates
        nums.erase(unique(nums.begin(), nums.end()), nums.end());

        int output = 1;
        int tempOutput = 1;

        for (int i = 0; i < nums.size() - 1; i++) {
            if (nums[i + 1] == nums[i] + 1) {
                output++;
            } else {
                tempOutput = max(tempOutput, output);
                output = 1;
            }
        }

        return max(output, tempOutput);
    }
};
