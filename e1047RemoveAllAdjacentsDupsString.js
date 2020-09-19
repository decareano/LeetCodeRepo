let myString = "abbaca"

var removeDuplicates = function(s) {
    let arr = []
    for(var i = 0; i < s.length; i++) {

        if (arr[arr.length-1] === s[i]) {
          console.log(arr[arr.length-1])
          console.log([arr.length-1])
          arr.pop()
        } else {
          arr.push(s[i]);
      }


    }
    return arr.join('')
};

// var removeDuplicates = function(s) {
//     let arr = []
//     for(var i = 0; i < s.length; i++) {

//         if (arr[i-1] === s[i]) {
//           console.log(arr[i-1])
//           console.log(arr[i])

//           arr.pop()
//           console.log(arr)
//           console.log(arr[i])
//           console.log(i)
//         } else {
//           arr.push(s[i]);
//           console.log(s)
//       }


//     }
//     return arr.join('')
// };

//why one works and the other does not. simply put, a new arr
// via variable arr works with arr[arr.length-1] but not with
// arr[i-1]. not sure why....tbd later
// 1047. Remove All Adjacent Duplicates In String


removeDuplicates(myString)
