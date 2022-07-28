class Chocolate {
    constructor(color, shape) {
        this.color = color;

        this.shape = shape;
    }

    melt() {
        console.log('I am melting, Yum!')
        this.shape = 'random';
    }

    whatIsMyAncestory() {
        console.log(Chocolate.name)
    }
}

class CreationsChocolate extends Chocolate {
    constructor(fillings) {
        super('green', 8, 'block');
        this.fillings = fillings;
    }
}

class Toblerone extends Chocolate {
    constructor(color) {
        super(color, 8, 'triangle');
        this.fillings = 'nuts';
    }

    melt() {
        console.log('Toblerone level melt!');
    }

    break() {
        console.log('Pop! more chocolate')
    }

    whatIsMyAncestory() {
        super.whatIsMyAncestory();
        console.log(Toblerone.name)
    }
}

class TobleroneWhiteChocolate extends Toblerone {
    constructor() {
        super('white');
    }
}

class TobleroneMilkChocolate extends Toblerone {
    constructor() {
        super('brown');
    }

    whatIsMyAncestory() {
        super.whatIsMyAncestory();
        console.log(TobleroneMilkChocolate.name)
    }
}

const tobleroneWhiteChocolate = new TobleroneWhiteChocolate()
const tobleroneBrownChocolate = new TobleroneMilkChocolate()

// console.log(tobleroneWhiteChocolate);

// tobleroneBrownChocolate.melt()
tobleroneBrownChocolate.break()

tobleroneBrownChocolate.whatIsMyAncestory();