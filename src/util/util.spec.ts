import { getInput, toNumberArray } from './'; 

describe('getInput()', () => {
    it('should read the file to an array', () => {
        expect(getInput(1)[0]).toBe('140');
    });
});

describe('toNumberArray()', () => {
    it('should turn string array into number array', () => {
        expect(toNumberArray(['1','2','3'])).toStrictEqual([1,2,3]);
    })
});