function value(array, stringToSplice) {
    if (typeof array !== "array") throw new TypeError("RemoveArrayIndex wants a array!");
        
    let arrayIndex = array.indexOf(stringToSplice);
    return array.splice(arrayIndex, 1);
};
function index(array, indexToSplice) {
    if (typeof array !== "array") throw new TypeError("RemoveArrayIndex wants a array!");

    return array.splice(indexToSplice, 1);
};

module.exports = {value, index}