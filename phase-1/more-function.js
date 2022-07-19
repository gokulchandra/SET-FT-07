// Scope hoisting
// Array
// -> callback functions
// -> arrow functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// Object
// Testing


// The JS interpreter essentially is able to id all the variables, functions


// const names = ['Yejin', 'Priyanka', 'James', 'Eric', 'Felix'];
// const numbers = [1, 2, 3];

// console.log(numbers)

// function popping(newNumbers) {
//     newNumbers.pop()
//     newNumbers.pop()
// }

// popping(numbers);

// console.log(numbers);

// console.log(names.slice(2))
// console.log('Names is ' + names)

// console.log(names.splice(2))
// console.log('Names is ' + names)

// have examples for pass by reference and pass by value


// function filter(array, callback) {
//     const result = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if(callback(element)) {
//             result.push(element);
//         }
//     }
// }

const mixedNumbers = [12, 63, 83, 66, 92, 44];

// const filterFunction = function (item) {
//     return item % 2 === 0;
// };

// function getEvenNumbers(numbers) {
//     return numbers.filter(function (item) {
//         console.log('Hello world');
//     })
// }

// console.log(getEvenNumbers(mixedNumbers));


let result = mixedNumbers.find(function(item) {
    console.log(item);
    return item === -66;
})


console.log('Found ', result)
