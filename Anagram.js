//Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.
// Sample Input
//input: N = 4, X = abcd, M = 4, Y = dacb
//Sample Output
//Output: Yes
let N = 4, x = "acdb", M = 4, y = "dacb";

function checkAnagram(x, y) {
    x = x.split("").sort();
    y = y.split("").sort();
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== y[i]) {
            return false;
        }
    }
    return true;
}
if(checkAnagram(x, y)){
    console.log("Yes");
} else {
    console.log("No");
}