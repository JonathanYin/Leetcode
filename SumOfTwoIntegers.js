var getSum = function(a, b) {
    while (b != 0) {
        // calculate carry
        let tmp = (a & b) << 1;
        // take XOR of a and b
        a = a ^ b;
        // set b as the carry-over
        b = tmp;
    }
    return a;
}