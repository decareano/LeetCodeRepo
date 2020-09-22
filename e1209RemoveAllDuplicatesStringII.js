let myString = "deeedbbcccbdaa"

var removeDuplicates = function(s, k) {
    const stack = [];

    for(let char of s) {
        if(stack.length && stack[stack.length-1][0] === char) {
            //stack.length is how many items you processed(2 or d/e)
            console.log(stack.length)
            //this is the zero index of d
            console.log(stack[stack.length-1][0])
            stack[stack.length-1][1] += 1;
            if(stack[stack.length-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }

    let res = '';

    for(let [char, count] of stack) {
        res += char.repeat(count);
    }

    return res;
};

removeDuplicates(myString, 3)
