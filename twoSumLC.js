let myArr = [12,7,9,3]

var twoSum = function(nums, target) {
    //setup an object to work with
    let myObj = {}

    //iterate over the nums
    for (let i = 0; i < nums.length; i++) {
      //setup first variable for every element
      let first = nums[i]
      //setup second variable to obtain the difference
      // between every element and the target
      let second = target - first
      //console.log to obtain status of myObj[second]
      //should be "undefined" at first
      console.log(myObj[second])
      // if statement will test if value is undefined or not
      // if Yes, it will [return myObj[second], i] (an ARRAY)
      // if Not, it will return myObj[first] = i
      // meaning the first value will be nums[i] and second value
      // will be index
      if (myObj[second] !== undefined) {

        return [myObj[second], i]
      } else myObj[first] = i


    }
};
//line 6: Use .sort((a,b) => a-b) for sorting purposes for increments
// for descending alter the operators: .sort((a,b) => b-a
twoSum(myArr, 15)
