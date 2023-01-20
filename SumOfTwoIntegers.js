var getSum = function(a, b) {
    while (b != 0) {
        let tmp = (a & b) << 1;
        a = a ^ b;
        b = tmp;
    }
    return a;
}