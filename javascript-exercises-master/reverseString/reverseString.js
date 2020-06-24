const reverseString = function(sentence) {
    let reversed = "";
    for(let i = sentence.length-1; i >= 0; i--)
    {
        reversed += sentence[i];
    }
    return reversed;
}

module.exports = reverseString
