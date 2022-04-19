//Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

//Sample Input
//array = {0, 1, 2, 0, 1, 2}
//Sample Output
//array = {0, 0, 1, 1, 2, 2}
let ar = [0, 1, 2, 0, 1, 2];

function sortArray(arr) {
    let x = 0, y = 0, z = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            x++;
        } else if(arr[i] === 1) {
            y++;
        } else {
            z++;
        }
    }
    let index = 0;
    while(index < x) {
        arr[index++] = 0;
    }
    while(index < y) {
        arr[index++] = 1;
    }
    while(index < z) {
        arr[index++] = 2;
    }
    return arr;
}
console.log(typeof ar[0])
console.log(sortArray(ar));