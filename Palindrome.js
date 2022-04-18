//Given a string of length N. Check if the given string is a palindrome without using any built-in functionality.
//input: N = 9, string: malayalam
//Sample Input
//input: N = 9, string: malayalam
//Sample Output
//Output: Yes

let N = 9, str = "malayalam";

function checkPalindrome(N, str) {
    let i = 0, j = N-1;
    while(i < j) {
        if(str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

if(checkPalindrome(N, str)) {
    console.log("Yes");
} else {
    console.log("No");
}