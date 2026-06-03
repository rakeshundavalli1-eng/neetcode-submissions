class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const heap = new Map();
        for( let num of nums) {
            if(heap.has(+num)) {
                let val = heap.get(+num);
                val = ++val;
                heap.set(+num, val);
            } else {
                heap.set(+num, 1);
            }
        }
        const myMap = new Map([...heap]);
        const sortedMap = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
        const truncatedMap = new Map(Array.from(sortedMap.entries()).slice(0, k));
        const firstN = [];
        for (const [key, value] of truncatedMap) {
            firstN.push(key);
        }
        return firstN;
    }
}
