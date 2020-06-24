const repeatString = function(word, amt) {
    if(amt < 0){return "ERROR";}
    let repeated = "";
    for(let i = 0; i < amt; i++)
    {
        repeated += word;
    }
    return repeated;
}

module.exports = repeatString
