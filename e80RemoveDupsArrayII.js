let myArr = [1,2,2,3,3,3,4,4]

var removeDuplicates = function(nums) {
    //let addArr = []
    let j = 0
    let count = 0
    //let prev = nums[i-1]
    let len = nums.length;
    for(var i = 0; i < len; i++) {
        // let prev = nums[i-1]
        // console.log(prev)
        // if (nums[i] != nums[i+1]) {
        //   nums[j] = nums[i]
        //   console.log(nums[j])

        //   j++;

        // }

        if (nums[i] === nums[i-1]) {
          //nums[j] = nums[i]
          //console.log(nums[j])
          //console.log(prev)
          count++
          //j++
        } else {
          count = 1
        }
        if (count <= 2) {
          nums[j] = nums[i]
          console.log(nums[j])
          j++
        }


    }
    // let test = nums.splice(j, nums.length)
    // console.log(test)
    //return nums.length
    return j
};


//line 6: Use .sort((a,b) => a-b) for sorting purposes for increments
// for descending alter the operators: .sort((a,b) => b-a
removeDuplicates(myArr)
