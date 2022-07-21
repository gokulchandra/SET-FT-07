// Pokemon Gotta catch em all

const pokemon = [
    {
        name: 'Pikachu',
        type: 'electric',
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

// Write a function, that takes a list of pokemon and filters them by specified type

function getPokemonByType(list, pokemonType) {
    const filteredPokemon = [];
    for (const item of list) {
        if (item.type === pokemonType) {
            filteredPokemon.push(item);
        }
    }

    return filteredPokemon;
}

function filterPokemonByType(list, pokemonType) {
    const filteredPokemon = list.filter((item) => {
        return item.type === pokemonType
    });

    return filteredPokemon;
}

//console.log('Filtered', filterPokemonByType(pokemon, 'normal'));

// Create a function; when given a list it should print pokemon details

function printPokemon(pokemon) {
    console.log(`Pokemon: \n`)
    for (const attribute in pokemon) {
        console.log(`${attribute}: ${pokemon[attribute]}`)
    }
    console.log(`========================= \n`)
}

function printPokemon1(pokemon) {
    console.log(`Pokemon: \n`)
    const keys = Object.keys(pokemon);

    for (const key of keys) {
        console.log(`${key}: ${pokemon[key]}`)
    }

    console.log(`========================= \n`)
}

// for (const item of pokemon) {
//     printPokemon1(item);
// }


const pokeball1 = {
    pokemon: null
}

function releasePokemon(pokeball) {
    console.log('I choose you: ' + pokeball.pokemon.name);
    pokeball1.pokemon = null;
}

function releasePokemonNonDestructively(pokeball) {
    console.log('I choose you: ' + pokeball.pokemon.name);
    return { ...pokeball1, pokemon: null};
}


// Spread operator in objects
// obj1 = { a: 1, b: 2 }; obj2 = { a:4, c: 7 }
// {...obj1, ...obj2}
// obj1 = {obj2}

console.log('before: ', pokeball1)

catchPokemon(pokeball1, pokemon[4]);

try {
   console.log(`I don't fail`)
} catch(error) {
    console.log(error.message)
    console.log(error.stack)
} finally {
    console.log('In finally')
}

console.log('after: ', pokeball1);

const pokeball2 = releasePokemonNonDestructively(pokeball1);

console.log('after release: pokeball1', pokeball1);
console.log('after release: pokeball2', pokeball2);

// Scenario: Pokeball will catch pokemon when empty; Should throw error otherwise

function catchPokemon(pokeball, pokemon) {
    if (pokeball.pokemon !== null) {
        throw new Error('pokeball is not empty');    
    }

    pokeball.pokemon = pokemon;
}


const ash = {
    pokemon: [...pokemon],
    name: 'Ash',
    profession: 'pokemon trainer',
    hobbies: ['talks a lot', 'catches pokemon'],
    address: {
        streetName: 'Pallet town',
        region: 'Pokemon county',
        country: 'Pokemon world'
    },
}

// Write a function that traverses a nested object. Eg: person

function traversePerson(person) {
    for (const key in person) {
        const element = person[key];

        if (typeof person[key] === 'object') {
            console.log(key + ": ");

            for (const key2 in element) {
                const nestedElement = element[key2];
                if (typeof element[key2] === 'object') {

                    console.log(key2 + ": ");
                    for (const key3 in nestedElement) {
                        console.log('\t' + key3 + ": " + nestedElement[key3]);
                    }
                } else {
                    console.log('\t' + key2 + ": " + element[key2]);
                }

            }

        } else {
            console.log(key + ": " + person[key]);
        }
    }
}

// Traverse a person iteratively
traversePerson(ash);


function loop(x) {
    if (x >= 10) // "x >= 10" is the exit condition
        return;

    console.log(x)
    loop(x + 1); // the recursive call
}

function traversePersonRecursively(person, tabs) {
    for (const attribute in person) {
        const value = person[attribute];
        if (typeof value !== 'object') {
            console.log(tabs + attribute + ": " + value);
        } else {
            console.log(tabs + attribute + ": ");
            traversePersonRecursively(value, `${tabs}-`);
        }
    }
}

traversePersonRecursively(ash, '-');

// Write it as an iterative function and then rewrite as a recursive function
// Write a function that takes a number and adds all the numbers upto 0;
// example: input: 5; output: 15; reason: 5 + 4 + 3 + 2 + 1 + 0

/*
    1. Implement function itertatively
    2. Write the tests, and they should all pass of course
    3. Rewrite the function as a recursive, tests should keep passing
*/