//1. Fill an array with 100 of a same object using array fill method.
let filledArray = new Array(100).fill({ 'hello': 'goodbye' });
//2. Create an array with numbers ranging from 1-100 using the Array.from method.
let filledArray2 = Array.from({ length: 100 }, (v, i) => i + 1);
console.log(filledArray);
console.log(filledArray2);
//3. Convert only values of an object into one array.

var obj1 = { "1": 0, "2": 1 }
var result = Object.values(obj1);
console.log(result);
//4. Convert an array into one object.
const names = ['Alex', 'Bob', 'Johny', 'Atta'];
const obj = Object.assign({}, names);
console.log(obj);
//5. Find out if an array is an array.
if (Array.isArray(names)) {
    console.log('true');
}

//6. Copy an array.
let res = names.slice();
names[0] = 'dsafsa';
console.log(names);
console.log(res);