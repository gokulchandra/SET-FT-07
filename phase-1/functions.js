// // console.log('Rinse the plate')
// // console.log('Apply soap the plate')
// // console.log('Rinse soap the plate')
// // console.log('Dry the plate')

// // console.log('Rinse the plate')
// // console.log('Apply soap the plate')
// // console.log('Rinse soap the plate')
// // console.log('Dry the plate')

// // console.log('Rinse the plate')
// // console.log('Apply soap the plate')
// // console.log('Rinse soap the plate')
// // console.log('Dry the plate')

// // console.log('Rinse the plate')
// // console.log('Apply soap the plate')
// // console.log('Rinse soap the plate')
// // console.log('Dry the plate')


// function clean(utensils) {
//     const cleanUtensils = [];
//     console.log(`Cleaning in progress`)
//     for (let index = 0; index < utensils.length; index++) {
//         const utensil = utensils[index];   
//         cleanUtensils.push('Clean ' + utensil); 
//     }
//     return cleanUtensils;
// }

// // break just 1 step
// // return take me home

// const dirtyUtensils = ['spoon', 'fork', 'plate', 'bowl'];
// console.log(dirtyUtensils)

// console.log(clean(dirtyUtensils))

// // Write a function that takes an array of numbers and returns the even numbers



function getEvenNumbers() {
    for (let position = 0; position < numbers.length; position++) {
        const element = numbers[position];
        
        checkIfEven(element);
    }
    return evenNumbers;
}

module.exports = getEvenNumbers;


const checkIfEven = (element) => {
    if (element % 2 === 0) {
        evenNumbers.push(element);
    }
}

const evenNumbers = [];
const numbers = [2,5,2,8,03,66] ;


