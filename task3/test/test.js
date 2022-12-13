const assert = require('assert');
const fs = require("fs");
const { getIndex } = require('../utils/arraySearch');


describe('Array', async () => {
    let arr;
    beforeEach(async () => {
        try {
            arr = JSON.parse(await fs.promises.readFile('./files/numbers'));
        } catch (error) {
            console.log(error);
        }

    });

    describe('Index searching', async () => {
        it('Out of generated numbers range', () => {
            const target = 1000000;
            assert.equal(getIndex(arr, target), -1);
        });
        it('Found 911952 in position 911992 (not first of duplicates)', () => {
            const target = 911952;
            assert.notEqual(getIndex(arr, target), 911992);
        });
        it('Found 911952 in position 911992', () => {
            const target = 911952;
            assert.equal(getIndex(arr, target), 911990);
        });
        it('Start of array', () => {
            const target = 0;
            assert.equal(getIndex(arr, target), 0);
        });
    });
});