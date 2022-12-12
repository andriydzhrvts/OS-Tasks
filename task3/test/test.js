var assert = require('assert');
const { generateNumbers, getIndex } = require('../index');

describe('Array', () => {

    describe('Generate array', () => {
        it('Generate 1.000.000 numbers array', () => {
            assert.equal(generateNumbers().length, 1000000);
        });
    });

    describe('Index searching', () => {
        const arr = generateNumbers();
        const target = 2300;
        it('Out of generated numbers range', () => {
            assert.equal(getIndex(arr, target), -1);
        });
    });
});