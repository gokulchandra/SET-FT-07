/*
    2 + 3 = 5
    6 + 7 = 13
 */

const add = require("./what-are-tests");

describe('Add', () => {
    it('should return 5 when 2, 3 is input', () => {
        const expected = 5;
        const actual = add(2,3);

        expect(actual).toEqual(expected);
    })

    it('should return 13 when 6, 7 is input', () => {
        const expected = 13;
        const actual = add(6,7);

        expect(actual).toEqual(expected);
    })
});

