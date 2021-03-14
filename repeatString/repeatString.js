const repeatString = function(string, repeatNumber) {
    let repeatedString = '';
    for (let i = 0; i < repeatNumber; i++) {
        repeatedString+= string;
    }
    return (repeatNumber >= 0) ? repeatedString : 'ERROR';
}

module.exports = repeatString
