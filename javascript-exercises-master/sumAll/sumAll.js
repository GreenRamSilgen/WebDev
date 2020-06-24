const sumAll = function(arg1, arg2) {
    if(typeof arg1 != "number" || typeof arg2 != "number"){return "ERROR";}
    if(arg1 < 0 || arg2 < 0){return "ERROR";}
    let sum = 0;
    
    if(arg1 > arg2){
        let temp = arg2;
        arg2 = arg1;
        arg1 = temp;
    }
    for(let i = arg1; i <= arg2; i++)
    {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
