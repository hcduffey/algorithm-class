// check if str2 can be formed by rearranging the letters of str1

const validAnagram = (str1, str2) => {
    const str1Freq = {};
    const str2Freq = {};

    for(let character in str1) {
        str1Freq[str1[character]] = ++str1Freq[str1[character]] || 1
    }

    for(let character in str2) {
        str2Freq[str2[character]] = ++str2Freq[str2[character]] || 1
    }

    for(let key in str1Freq) {
        if(str1Freq[key] !== str2Freq[key]) { return false; }
    }

    return true;
}



console.log(validAnagram('','')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true