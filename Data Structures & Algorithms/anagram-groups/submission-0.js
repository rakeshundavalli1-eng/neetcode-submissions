class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = new Map();
        strs.forEach(
            (str) => {
                const key = str.split('').sort().join('');
                if (!sorted.has(key)) sorted.set(key, []);
                sorted.get(key).push(str);
            }
        );
        const final = [];
        for (const [key, value] of sorted) {
            final.push(value);
        }
        return final;
    }
}
