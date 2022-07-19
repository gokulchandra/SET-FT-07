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

throw new Error('Boogie trap');