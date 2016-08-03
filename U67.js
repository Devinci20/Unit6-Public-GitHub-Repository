var numberOfZeros = function(arry) {
    var i = 0;
    arry.forEach(function(v) {
        if (v === 0) i++;
    });
    return i;
}


var count = numberOfZeros([4, 0, false, 5, 0]);

alert( count );