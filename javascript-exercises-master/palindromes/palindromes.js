const palindromes = function(input) {
    input = input.toLowerCase();
    input = input.replace(/ |\.|,|!/g,"");
    let left =0;
    let right = input.length-1;
    let bool = true;
    while(left <= right)
    {
        if(input.charAt(left) === input.charAt(right))
        {
            left++;
            right--;
        }
        else{
            return false;
        }
    }
    return true;
 }

module.exports = palindromes
