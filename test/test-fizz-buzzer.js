const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function () {
    it('should return fizz for numbers evenly divisible by 3, buzz by 5, and fizz-buzz by 3 and 5', function () {
        const normalCases = [
            { a: 3, expected: 'fizz' },
            { a: 5, expected: 'buzz' },
            { a: 15, expected: 'fizz-buzz' }
        ];
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if args not numbers', function () {
        const badInputs = [
            'a',
            '1',
            false
        ];
        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});