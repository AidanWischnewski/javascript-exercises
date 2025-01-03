const removeFromArray = function(x, ...toRemove) {
    const result = x.filter((element) => !toRemove.includes(element))
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
