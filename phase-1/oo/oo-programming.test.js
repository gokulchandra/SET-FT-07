const {dog, cat} = require('./oo-programming');

jest.mock(console)

describe('Dog', () => {
    it('should have a name `doggo` ', () => {
        expect(dog.name).toEqual('doggo')
    });

    it('should bark ', () => {
        expect(console.log).toHaveBeenCalledWith('Bark!')
    });
});