// You are given a large integer represented as an array  of digits, where each digits[i] is the ith digit of the integer. The digits are ordered in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Examples:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Input: digits = [9]
// Output: [1,0]

const addOne = (digits) => {
    
    if(digits.length === 0) { return digits }
    
    for(let i=digits.length-1; i >= 0; i--) {
        if(digits[i] === 9) {
            const carryOver = digits[i] - 9;
            digits[i] = 0;

            // carry over the one
            if(i === 0) {
                return([1,...digits]);
            }
            else {
                digits[i-1] += carryOver;
            }
        }
        else {
            digits[i]++;
            return(digits)
        }
    }
}

console.log(addOne([9,9,9,9,9,9]));