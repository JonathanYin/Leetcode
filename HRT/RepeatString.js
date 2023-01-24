function repeatString(n) {
    if (n === 0) {
        return "x";
    } else {
        return "f(" + repeatString(n - 1) + ")";
    }
}