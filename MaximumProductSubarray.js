var maxProduct = function(nums) {
    let currMax = 1;
    let currMin = 1;
    var res = Math.max(...nums);

    for (let i of nums) {
        if (i == 0) {
            // if i is 0, manually set max/min to 1
            currMax = 1;
            currMin = 1;
            continue;
        }
        // max/min can be i, i * currMax, or i * currMin
        let temp = currMax;
        currMax = Math.max(i, i * currMax, i * currMin);
        currMin = Math.min(i, i * temp, i * currMin);
        
        res = Math.max(res, currMax);
        console.log(res);
    }

    return res;
}