import { Day02 } from '../';
import { getInput, toNumberArray } from '../../util';

describe('Day 02', () => {

    const testData = [
        'forward 5',
        'down 5',
        'forward 8',
        'up 3',
        'down 8',
        'forward 2'
    ];

    test('part 1', () => {
        expect(new Day02().part1(testData)).toBe(150);
        expect(new Day02().part1(getInput(2))).toBe(2322630);
    });

    test('part 2', () => {
        expect(new Day02().part2(testData)).toBe(900);
        expect(new Day02().part2(getInput(2))).toBe(2105273490);
    });
});