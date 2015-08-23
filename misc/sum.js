function canSum(array, sum) {
    var candidates = {};

    return array.some(function (number) {
        var candidate = sum - number;

        if (candidate in candidates) {
            console.log("yes with", candidate, number);
            return true;
        }

        if (number < sum) {
            candidates[number] = true;
        }
    });
}

var array = [4, 19, 3, 3, 2, 7, 8];

var tests = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: true,
    6: true,
    7: true,
    8: false,
    9: true,
    10: true,
    11: true,
    12: true,
    13: false,
    14: false,
    15: true,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: true,
    22: true,
    23: true,
    24: false,
    25: false,
    26: true,
    27: true
};

Object.keys(tests).forEach(function (idx) {
    console.log("expecting", tests[idx], "for", idx, "got", canSum(array, +idx));
});