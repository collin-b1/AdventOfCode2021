import { Day03 } from '../';
import { getInput } from '../../util';

describe('Day 03', () => {

    const testData = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010'
    ];

    test('part 1', () => {
        expect(new Day03().part1(testData)).toBe(198);
        expect(new Day03().part1(getInput(3))).toBe(2972336);
    });

    test('part 2', () => {
        expect(new Day03().part2(testData)).toBe(230);
        expect(new Day03().part2(getInput(3))).toBe(3368358);
    });
});