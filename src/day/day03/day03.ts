import Day from '../day';
import { rotateMatrix } from '../../util';

export class Day03 extends Day {

    part1 = (data: string[]): number => {
        let matrix = data.map(x => x.split(''));
        let byte = this.getMostCommon(matrix);
        let gamma = parseInt(byte, 2);
        let epsilon = parseInt(byte.split('').map(x => (1 - parseInt(x)).toString()).join(''), 2);
        
        return gamma * epsilon;
    }

    part2 = (data: string[]): number => {
        let d = [...data];

        // Oxygen Generator
        for (let i = 0; i < d[0].length && d.length > 1; i++) {
            let matrix = d.map(x => x.split(''));
            let byte = this.getMostCommon(matrix, 1);
            d = d.filter(x => x.charAt(i) === byte.charAt(i));
        }
        let oxygen = parseInt(d[0], 2);

        // CO2 Scrubber
        d = [...data];
        for (let i = 0; i < d[0].length && d.length > 1; i++) {
            let matrix = d.map(x => x.split(''));
            let byte = this.getMostCommon(matrix, 0);
            d = d.filter(x => x.charAt(i) === byte.charAt(i));
        }
        let co2 = parseInt(d[0], 2);
        return oxygen * co2;
    }

    getMostCommon = (matrix: string[][], criteria: 0 | 1 = 1): string => {
        let byte = Array(matrix[0].length).fill(0);
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == '0') {
                    byte[x]--;
                } else {
                    byte[x]++;
                }
            }
        } if (criteria === 1) {
            return byte.map(x => (x >= 0) ? 1 : 0).join('');
        } else {
            return byte.map(x => (x >= 0) ? 0 : 1).join('');
        }
    }
}