/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    function sortFunction(item1, item2) {
        return item1 - item2;
    }

    nums = nums.sort(sortFunction)
    let menor = Infinity

    for (let index = 0; index < nums.length - 2; index++) {
        
        left = index + 1
        right = nums.length - 1

        while (left < right){
            let sum = nums[index] + nums[left] + nums[right]

            if (Math.abs(sum - target) < Math.abs(target - menor)) {
                menor = sum
            } else if (sum < target) {
                left++
            }else if(sum > target){
                right--
            }
        }
        
    }

    return menor
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))