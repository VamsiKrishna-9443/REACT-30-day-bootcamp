function checkPalindrome(str){
    let rev = "";
    for(let i = str.length -1 ; i >= 0;i--){
        rev += str[i];
    }

    return rev === str;
}
let s = "madam";
if(checkPalindrome(s)){
    console.log(s + " is a palindrome");
}
else
{
    console.log(s + " is not a palindrome");
}