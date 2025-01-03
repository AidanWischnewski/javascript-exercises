const sumAll = function(start, end) {
    if (Math.min(start, end) < 0){
        return "ERROR";
    }
    if(!Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }
    const numbers = [start,end]
    numbers.sort();
    let sum = 0;
    for (i=numbers[0]; i<=numbers[1]; i++){
        sum += i;
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
