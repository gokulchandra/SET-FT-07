const Eddie = {
    name: 'Eddie',
    profession: 'Chef',
    introduce: function (kicker) {
        console.log(`My name is ${this.name} and I am an awesome ${this.profession} ${kicker}`)
    },
    address: {
        street: 'fun street',
        city: 'bendigo',
        navigate: function () {
            console.log('Turn right on ' + this.foo)
        }
    }
}

const Francis = {
    name: 'Francis',
    profession: 'Super admin',
    introduce: function () {
        console.log(`My name is ${this.name} and I am an awesome ${this.profession}`)
    },
    address: {
        street: 'fun street',
        city: 'North Sydney',
        navigate: function () {
            console.log('Turn right on ' + this.foo)
        }
    }
}

Eddie.introduce();
Eddie.introduce.bind(Francis)('in history');
Eddie.introduce.call(Francis, 'Until now');
Eddie.introduce.apply(Francis, ['forever']);