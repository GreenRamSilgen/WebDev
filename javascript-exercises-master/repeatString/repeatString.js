const repeatString = function(word, amt) {
    let repeated = "";
    for(let i = 0; i < amt; i++)
    {
        repeated += word;
    }
    return repeated;
}

module.exports = repeatString
