const repeatString = function(string, repititions) {
    if (repititions < 0){
        return "ERROR"
    }
    result = "";
    for ( i=0; i < repititions; i++){
        result += string
    }
    return result
};

repeatString("hey",2)
// Do not edit below this line
module.exports = repeatString;
