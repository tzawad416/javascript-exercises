const sumAll = function(smallnum, bignum) {
    let sumnum = 0;
    if (!Number.isInteger(smallnum) || smallnum < 0 || !Number.isInteger(bignum) || bignum < 0) {
        return 'ERROR';
    }
    [bignum, smallnum] = (bignum < smallnum) ? [smallnum, bignum] : [bignum, smallnum];
    for (let i = smallnum; i <= bignum; i++) {
        sumnum += i;
    }
    return sumnum;
}

module.exports = sumAll
