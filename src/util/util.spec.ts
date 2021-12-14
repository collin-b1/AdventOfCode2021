import { getInput, toNumberArray } from './'; 
import { freqSort, rotateMatrix } from './util';

describe('getInput()', () => {
    it('should read the file to an array', () => {
        expect(getInput(1)[0]).toBe('140');
    });
});

describe('toNumberArray()', () => {
    it('should turn string array into number array', () => {
        expect(toNumberArray(['1','2','3'])).toStrictEqual([1,2,3]);
    });
});

describe('rotateMatrix()', () => {
    it('should rotate a matrix 90 degrees', () => {
        expect(rotateMatrix([
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ])).toStrictEqual([
            [7,4,1],
            [8,5,2],
            [9,6,3]
        ]);
    });
});

describe('freqSort()', () => {
    it('should return the array sorted by frequency', () => {
        expect(freqSort([1,2,3,4,5,5,5,4,3,2,1]).pop()).toBe(5);
    });
});