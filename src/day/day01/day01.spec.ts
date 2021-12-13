import { Day01 } from '../';
import { getInput, toNumberArray } from '../../util';

describe('Day 01', () => {

    const testData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    test('part 1', () => {
        expect(new Day01().part1(testData)).toBe(7);
        expect(new Day01().part1(toNumberArray(getInput(1)))).toBe(1298);
    });

    test('part 2', () => {
        expect(new Day01().part2(testData)).toBe(5);
        expect(new Day01().part2(toNumberArray(getInput(1)))).toBe(1248);
    });
});