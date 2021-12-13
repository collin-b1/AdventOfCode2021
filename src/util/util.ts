import fs from 'fs';

export const getInput = (day: number): string[] => {
    try {
        return fs.readFileSync(`src/day/day${day < 10 ? '0' + day : day}/input.txt`, 'utf-8').toString().trim().split('\n');;
    } catch (e) {
        throw e; 
    }
}

export const toNumberArray = (arr: string[]): number[] => {
    return arr.map(x => parseInt(x));
}