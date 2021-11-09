function strlengtrarr(arr) {
    let res = [];
    for (let index = 0; index < arr.length; index++) {
        res.push(arr[index].length);
    }
    return res;
}

console.log(strlengtrarr(["boo", "doooo", "hoo", "ro"]));