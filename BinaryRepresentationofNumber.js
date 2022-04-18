//Write a program to print Binary representation of a given number.
// Sample Input
//  N = 7;
//Sample Output
// 00000000000000000000000000000111;

let n = 7;
 function BinaryRepresentation(n) {
    let res = "";
    for(let i = 1 << 30; i > 0; i = Math.floor(i/2)) {
        if((n & i) != 0) {
            res += "1";
        } else {
            res += "0"
        }
    }
    return res;
}
console.log(BinaryRepresentation(n));

//Binary representation to a number-->
let n1 = "00000000000000000000000000000111"
console.log(parseInt(n1, 2))