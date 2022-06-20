function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let i = 0;
    let j = 1;

    if(arr.length <= 1) {
        return arr.length
    }

    while(j < arr.length) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        else {
            j++
        }
    }

    return i+1
}

// console.log(countUniqueValues())

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));