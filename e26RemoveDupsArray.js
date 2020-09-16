/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //let addArr = []
    //let j = 0
    let _temp
    let len = nums.length;
    for(var i = 0; i < len; i++) {
        if (nums[i] != nums[i+1]) {
          //nums[j] = nums[i]
            _temp = nums[i]
          //console.log(nums[j])
          //j++;
        }
    }
    let test = nums.splice(_temp, nums.length)
    return nums.length
};

