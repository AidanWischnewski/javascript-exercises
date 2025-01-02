const reverseString = function(string) {
    let reversed = []
    let length = string.length;
    for(i=0; i<string.length; i++){
        reversed.push(string[length-i-1])
    }
    reversed = reversed.join("")
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
