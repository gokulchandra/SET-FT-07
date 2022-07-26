// A function that calls itself. 

const pokemon = [
    {
        name: 'Pikachu',
        type: [{ name: 'electric' }],
        weakness: 'ground',
        strength: 'water',
        league: 'indigo'
    },
    {
        name: 'Evee',
        type: 'normal',
        weakness: 'ghost',
        strength: 'water',
        league: 'indigo'
    },
    {
        name: 'Gangar',
        type: 'ghost',
        weakness: 'psychic',
        strength: 'fighting',
        league: 'indigo'
    },
    {
        name: 'snorlax',
        type: 'normal',
        weakness: 'fighting',
        strength: '',
        league: 'indigo'
    },
    {
        name: 'Xatu',
        type: 'flying',
        weaknesses: ['electric', 'ghost'],
        strength: 'bug',
        league: 'crystal'
    }
]

const ash = {
    name: 'Ash',
    profession: 'pokemon trainer',
    hobbies: ['talks a lot', 'catches pokemon'],
    address: {
        streetName: 'Pallet town',
        region: 'Pokemon county',
        country: 'Pokemon world'
    },
    pokemon: [...pokemon],
}

const traverseNestedObject = (person) => {
    for (const attribute in person) {
        if (typeof person[attribute] === 'object') {
            for (const nestedAttribute in person[attribute]) {
                const nestedObject = person[attribute]
                if (typeof nestedObject[nestedAttribute] === 'object') {
                    const nestedTwiceObject = nestedObject[nestedAttribute]

                    for (const nestedTwiceAttribute in nestedTwiceObject) {

                        console.log('\t\t' + nestedTwiceAttribute + ' ' + nestedTwiceObject[nestedTwiceAttribute]);
                    }
                    console.log('+++++++')
                }
                else {
                    console.log('\t' + nestedAttribute + ' ' + nestedObject[nestedAttribute]);
                }
            }
            console.log('--------------')
        } else {
            console.log(attribute + ' ' + person[attribute]);
        }

    }
    console.log('#######################')
}



const traverseObject = (obj, padding) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            traverseObject(obj[key], padding + '#');
        } else {
            console.log(padding + ' ' + key + '  ' + obj[key]);
        }
    }
    console.log(padding + ' ' + '--------------')
}

// traverseObject(ash, '');



// write a function that takes a number and prints the sum of all the numbers until the provided input
// eg myFunc(5) = 1 + 2  + 3 + 4 + 5

function sumSeries(num) {
    let sum = 0;
    for (let index = num; index >0; index--) {
         sum += index
    }

    console.log(sum);
}

function recSumSeries(num) {
    if (num === 0) return 0;

    return num + recSumSeries(num -1);
}


console.log(recSumSeries(4));