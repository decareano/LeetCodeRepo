let myArr = [2,5,4,3,6,5]

var maxProduct = function(nums) {
    let max = 0;
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {

          max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
          //note: max as a first argument makes the multiplication
          // not needed cuz value is greater from previous iteration
          console.log(max)
          // if (nums[i] < nums[j]) {
          //   i++;
          // } else {
          //   j--;
          // }
          nums[i] < nums[j] ? i++ : j--


    }
    return max;
};

maxProduct(myArr);
