/**
 * @param {number[]} nums
 * @return {number[]}
 */
//brute force - does not scale
// var findDuplicates = function(s) {

//     let newArr = []
//     for (let i = 0; i < s.length; i++) {
//       s.sort()
//       if (s[i] === s[i+1]) {
//         newArr.push(s[i])
//       }
//     }
//     return newArr;
// }


const myArr = [4,3,2,7,8,2,3,1]
var findDuplicates = function(s) {
    let newArr = []

    for (let i = 0; i < s.length; i++) {
      if (s[Math.abs(s[i])-1] < 0) newArr.push(Math.abs(s[i]));
      //console.log(index)
      s[Math.abs(s[i])-1] = -s[Math.abs(s[i])-1]
      //}

    }
    return newArr;
}

console.log(findDuplicates(myArr))
