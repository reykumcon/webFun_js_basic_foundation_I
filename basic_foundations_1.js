// 1. Get 1 to 255

function createArray() {
    var arr = [];

    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }

    return arr;
}

// 2. Get even 1000

function sumEven() {
    var sum = 0;
    
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }

    return sum;
}

// 3. Sum odd 5000

function sumOdd() {
    var sum = 0;

    for (var i = 1; i <= 5000; i+=2) {
        sum += i;
    }

    return sum;
}

// 4. Iterate an array

function sumArray(arr) {
    sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// 5. Find max

function maxValue(arr) {
    let max = 0; 

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// 6. Find average

function getAverage(arr) {
    var average;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    average = sum / arr.length;

    return average;
}

// 7. Array odd

function arrayOdd() {
    var arr = [];

    for (var i = 1; i <= 50; i+=2) {
        arr.push(i);
    }

    return arr;
}

// 8. Greater than Y

function greaterThan(Y, arr) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            newArr.push(arr[i]);
        }
    }

    return newArr.length;
}

// 9. Squares

function squareValue(arr) {
    var squaredArr = [];

    for (var i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] ** 2);
    }

    return squaredArr;
}

// 10. Negatives

function removeNegative(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// 11. Max/Min/Avg

function getMaxMinAvg(arr) {
    var newArr = [];
    var max = 0;
    var min = arr[0];
    var sum = 0;
    var avg;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    for (var j = 1; j < arr.length; j++) {
        if (arr[0] > arr[j]) {
            min = arr[j];
        }
    }

    for (var k = 0; k < arr.length; k++) {
        sum += arr[k];
        avg = sum / arr.length;
    }
    
    newArr.push(max, min, avg);

    return newArr;
}

// 12. Swap Values

function swapValue(arr) {
    if (arr.length >= 2) {
        var x = arr[arr.length - 1];
        arr[arr.length - 1] = arr[0];
        arr[0] = x; 
    }

    return arr;
}

// 13. Number to String

function convertToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr;
}