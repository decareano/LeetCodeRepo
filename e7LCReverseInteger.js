#7 LC reverse integer

let myNum = -1234;

var reverse = function(num) {
    const isNegative = num < 0;
    const myFinalNum = Math.abs(num).toString().split('')
    //console.log(myFinalNum)
    const reveS = myFinalNum.reverse().join('')
    const a_num = Number(reveS)

    if (isNegative && a_num > Math.pow(2, 31)) {
        return 0;
    }
    if (!isNegative && a_num > Math.pow(2, 31) - 1) {
        return 0;
    }

    return isNegative ? -a_num : a_num

}
//const reversedNum = num => parseFloat(num.toString()
//.split('').reverse().join('')) * Math.sign(num)
//line 6: Use .sort((a,b) => a-b) for sorting purposes for increments
// for descending alter the operators: .sort((a,b) => b-a
reverse(myNum)
