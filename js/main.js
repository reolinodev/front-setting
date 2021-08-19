import '../css/main.css';
import '../scss/main.scss';

console.log('Hello webpack');

// ES5
const myArrary = [1, 2, 3, 4];
let arr1 = myArrary.map(function (item) {
    return item;
});
console.log(arr1);

// ES6
let arr2 = myArrary.map((item) => item);
console.log(arr2);
