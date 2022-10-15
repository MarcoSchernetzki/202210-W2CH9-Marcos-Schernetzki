import { gameOfLife, countNeighbor } from './game.js';

describe('Given gameOfLife function', () => {
    test('when you pass an array check the positions and return the neighbors that are equal to 1', () => {
        const array = [0, 1, 0];
        const row = 0;
        const colum = 0;
        const result = gameOfLife(array);

        expect(result).toBe(countNeighbor(array, row, colum));
    });
});

describe('Given countNeighbor function', () => {
    test('when it receives its coordinates it checks the living neighbors', () => {
        const array = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];
        const count = 0;
        const row = 1;
        const colum = 1;
        const result = countNeighbor(array, row, colum);
        expect(result).toBe(2);
    });
});
