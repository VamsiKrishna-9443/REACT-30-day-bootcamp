function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log("madam:", isPalindrome("madam"));
console.log("hello:", isPalindrome("hello"));