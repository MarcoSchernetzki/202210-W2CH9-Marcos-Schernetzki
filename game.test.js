import { arrays, gameOfLife, countNeighbor, liveOrDied } from './game.js';

// describe('Given gameOfLife function', () => {
//     test('', () => {
//         const array = [0, 1, 0];
//         const result = arrays;

//         expect(result).toEqual(array);
//     });
// });

// describe('Given gameOfLife function', () => {
//     test('when you pass an array check the positions and return the neighbors that are equal to 1', () => {
//         const array = [0, 1, 0];
//         const result = gameOfLife(array);

//         expect(result).toBe(countNeighbor());
//     });
// });

// describe('Given countNeighbor function', () => {
//     test('when it receives its coordinates it checks the living neighbors', () => {
//         const array = [
//             [0, 1, 0],
//             [0, 1, 0],
//             [0, 1, 0],
//         ];
//         const count = 0;
//         const row = 1;
//         const colum = 1;
//         const result = countNeighbor(array, row, colum);
//         expect(result).toBe(2);
//     });
// });

describe('Given liveOrDied function', () => {
    test('checks whether you live or die and returns the results in a new array', () => {
        const count = 1;
        const newArray = [];
        if (count < 2 || count > 3) {
            newArray.push(0);
        }
        if (count > 1 || count < 4) {
            newArray.push(1);
        }

        const result = liveOrDied(count);
        expect(result).toEqual(newArray);
        expect(result).toBe(undefined);
    });
});
