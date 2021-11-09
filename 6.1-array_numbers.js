const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);

}

function arrayLength() {
    let len = 0;
    arr.forEach(element => {
        len++;
    });
    return len;
}

function arraySum() {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];

    }
    return sum;
}

function arraySum() {
    let mul = 1;
    for (let index = 0; index < arr.length; index++) {
        mul = mul * arr[index];

    }
    return mul;
}