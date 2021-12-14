import Day from '../day';

export class Day04 extends Day {

    private queue: number[] = [];
    private cards: BingoCard[] = [];

    part1 = (data: string[]): number => {
        this.queue = data.shift()?.split(',').map(x => parseInt(x)) || [];
        data = data.filter(x => x);
        let card: BingoCard = new BingoCard();
        for (let i = 0; i < data.length; i++) {
            if (i % 5 == 0 && i !== 0) {
                this.cards.push(card);
                card = new BingoCard();
            }
            card.addNums(data[i]);
        }
        let pool: number[] = [];
        while (this.queue.length > 0) {
            pool.push(this.queue.shift()!);
            for (let i = 0; i < this.cards.length; i++) {
                let card = this.cards[i];
                if (BingoCard.hasBingo(card.card, pool)) {
                    console.log(pool, card.card);
                    return 0;
                }
            }
        }
        return 0;
    }

    part2 = (data: string[]): number => {
        return 0;
    }
}

class BingoCard {
    card: number[][] = [];

    addNums(row: string): void {
        this.card.push(row.split(/ +/).map(x => parseInt(x)));
    }

    static hasBingo = (card: number[][], nums: number[]) => {
        let diag1 = card.map((value, index) => card[index][index]);
        let diag2 = card.map((value, index) => card[index][4 - index]);
        diag1.filter(x => !nums.some(y => x === y));
        diag2.filter(x => !nums.some(y => x === y));
        console.log(diag1, diag2);
        if (diag1.length === 5 || diag2.length === 5) return true;
        for (let i = 0; i < card.length; i++) {
            let row = card[i];
            let column = card.map((value, index) => value[i]);
            row.filter(x => !nums.some(y => x === y));
            column.filter(x => !nums.some(y => x === y));
            if (row.length === 5 || column.length === 5) return true;
        }
        return false;
    }
}