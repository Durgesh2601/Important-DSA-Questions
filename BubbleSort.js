//Given an array A having N positive integers. Sort the array A using bubble sort.
//Sample Input 
//input: N = 5
//A : 5 1 6 3 7
//Sample Output
//A: 1 3 5 6 7;

let ar = [5, 1, 6, 3, 7];
let N = 5;

function bubbleSort(N, ar) {
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N-i-1; j++) {
            if(ar[j] > ar[j+1]) {
                let temp = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = temp;
            }
        }
    }
    return ar;
}
console.log(bubbleSort(N, ar));
