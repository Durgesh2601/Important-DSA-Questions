//Given a positive integer N. Check if it is a power of two or not.
//Sample Input
//input: N = 4;
//Sample Output
// /Output: Yes;

let N = 16;
//Method-1 ===>
function checkPowrofTwo(N) {
    let logVal = Math.floor(Math.log(N)/Math.log(2));
    if(Math.pow(2, logVal) === N) {
        return ("Yes");
    }
    return ("No")
}
console.log(checkPowrofTwo(N))

//Method-2 ===>
function checkPowrofTwo(N) {
   for(let i = 0; i < N; i++) {
       if(Math.pow(2, i) === N) {
           return ("Yes");
       }
   }
   return ("No");
}
console.log(checkPowrofTwo(N))