import Day from '../day';

export class Day01 extends Day {
    part1 = (data: number[]): number => {
        let total = 0;
        for (let i = 1; i < data.length; i++) {
            if (data[i] > data[i - 1]) total++;
        }
        return total;
    }

    part2 = (data: any): number => {
        let triSum: number[] = [];
        for (let i = 2; i < data.length; i++) {
            triSum.push(data[i - 2] + data[i - 1] + data[i]);
        }
        return this.part1(triSum);
    }
}