const removeFromArray = function() {
    array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let valueIndex = array.indexOf(arguments[i]);
        if (valueIndex >= 0) {
            array.splice(valueIndex, 1);
        }
    };
    return array;
}

module.exports = removeFromArray
