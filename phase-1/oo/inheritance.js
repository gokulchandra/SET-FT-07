class Vehicle {
    constructor(color) {
        this.color = color;
    }

    moveTo(destination) {
        console.log('Going to ' + destination);
    }
}

class Car {
    constructor(color) {
        this.wheels = 4;
        this.color = color;
    }

    moveTo(destination) {
        console.log('Going to ' + destination);
    }
}

class Motorcycle {
    constructor(color) {
        this.wheels = 2;
        this.color = color;
    }

    moveTo(destination) {
        console.log('Going to ' + destination);
    }
}

class Bus extends Vehicle {
    constructor(color) {
        super(color);
        this.wheels = 6;
    }

    specialMove(destination, request) {
        super.moveTo(destination);
        console.log('While ' + request)
    }
}


const car = new Car('red');
const motorcycle = new Motorcycle('green');
const bus = new Bus('blue');


console.log(car);
car.moveTo('Sydney');

console.log(motorcycle);
motorcycle.moveTo('Melbourne');

console.log(bus);

bus.specialMove('Bendigo', 'skip tolls')