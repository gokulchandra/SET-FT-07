
// const cat = {
//     name: 'Garfield',
//     legs: 4,
//     makesSound() {
//         console.log('Meow!')
//     }
// }

// cat.makesSound()

// const parrot = {
//     name: 'Polly',
//     legs: 2,
//     makesSound() {
//         console.log('Sqawk!')
//     }
// }


function AnimalFn(name, legs, sound) {
    return {
        name,
        legs,
        sound,
        makesSound() {
            console.log(this.sound);
        }
    }
}

class Animal {
    constructor(name, legs, sound) {
        this.name = name;
        this.legs = legs;
        this.sound = sound;
    }

    makesSound() {
        console.log(this.sound);
    }
}

const dog = new AnimalFn('doggo', 4, 'Bark!')

dog.makesSound();

const classyDog = new Animal('Sir Doggo', 4, 'Woof!')
const cat = new Animal('Bob', 4, 'Meow!')
const parrot = new Animal('Polly', 2, 'Sqawk!')

classyDog.makesSound();
cat.makesSound();
parrot.makesSound();


module.exports = {
    dog
}

