const removeFromArray = function(arr, arg, arg2) {
    let myArr = [];
    console.log(arr)
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === arg || arr[i] === arg2)
        {
        }
        else
        {
            myArr.push(arr[i]);
        }
    }
    console.log(myArr);
    return myArr;
}

module.exports = removeFromArray
