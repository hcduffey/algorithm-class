// Given a string s, return true if the s can be a palindrome after deleting at most one character from it.

// Examples:

// Input: s = "aba"
// Output: true

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Input: s = "abc"
// Output: false

const palindromeCheck = (str) => {

    const strArray = str.split('');

    let right = strArray.length - 1;
    let deletedOne = false;

    //edge cases
    if(str.length === 1) return true;
    if(str.length === 0) return false;

    for(let left=0; left < strArray.length/2; left++) {
        // if we hit a condition that would make a pal false, check if we can delete one of the letters
        if(strArray[left] !== strArray[right]) {
            if(left === right-1 && !deletedOne) { 
                return true;
            }
            else if(strArray[left+1] === strArray[right] && !deletedOne) {
                left++;
                deletedOne = true;
            }
            else if(strArray[left] === strArray[right-1] && !deletedOne) {
                right--;
                deletedOne = true;
            }
            else {
                return false;
            }
        }
        right--;
    }

    return true;
}

console.log(palindromeCheck("ada"));