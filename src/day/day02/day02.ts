import Day from '../day';

export class Day02 extends Day {

    private aim: number = 0;
    private horizontal: number = 0;
    private depth: number = 0;

    part1 = (data: string[]): number => {
        for (let line of data) {
            const split = line.split(/ +/);
            switch (split[0]) {
                case 'forward': 
                    this.horizontal += parseInt(split[1]); 
                    break;
                case 'up': 
                    this.depth -= parseInt(split[1]); ; 
                    break;
                case 'down': 
                    this.depth += parseInt(split[1]); ; 
                    break;
            }
        }
        return this.horizontal * this.depth;
    }
    part2 = (data: string[]): number => {
        for (let line of data) {
            const split = line.split(/ +/);
            switch (split[0]) {
                case 'forward': 
                    this.horizontal += parseInt(split[1]);
                    this.depth += this.aim * parseInt(split[1]);
                    break;
                case 'up': 
                    this.aim -= parseInt(split[1]); ; 
                    break;
                case 'down': 
                    this.aim += parseInt(split[1]); ; 
                    break;
            }
        }
        return this.horizontal * this.depth;
    }
}