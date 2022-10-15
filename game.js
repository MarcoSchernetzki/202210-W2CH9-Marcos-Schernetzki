let arrays = [
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 0],
];

let newArrays = [[], [], []];

export const gameOfLife = (array) => {
    for (let row = 0; row < array.length; row++) {
        for (let colum = 0; colum < array[row].length; colum++) {
            countNeighbor(array, row, colum);
        }
    }
};

export const countNeighbor = (array, row, colum) => {
    let count = 0;
    let myCount = count;
    const myRow = row;
    const myColum = colum;

    for (let i = row - 1; i < row + 2 && i < 3; i++) {
        for (let j = colum - 1; j < colum + 2; j++) {
            if (array[i] === undefined) {
                i++;
            }
            if (array[j] === undefined) {
                j++;
            }

            if (array[i][j] === 1) {
                count++;
            }
            if (array[i][j] === 0) {
                count + 0;
            }
        }
    }
    if (array[myRow][myColum] === 1) {
        count--;
    }

    liveOrDied(count);
    count = 0;
};

export const liveOrDied = (count) => {
    const myCount = count;
    if (newArrays[0].length < 3) {
        if (myCount < 2) {
            newArrays[0].push(0);
        }
        if (myCount > 3) {
            newArrays[0].push(0);
        }
        if (myCount > 1 && myCount < 4) {
            newArrays[0].push(1);
        }
        return;
    }
    if (newArrays[1].length < 3) {
        if (myCount < 2) {
            newArrays[1].push(0);
        }
        if (myCount > 3) {
            newArrays[1].push(0);
        }
        if (myCount > 1 && myCount < 4) {
            newArrays[1].push(1);
        }
        return;
    }
    if (newArrays[2].length < 3) {
        if (myCount < 2) {
            newArrays[2].push(0);
        }
        if (myCount > 3) {
            newArrays[2].push(0);
        }
        if (myCount > 1 && myCount < 4) {
            newArrays[2].push(1);
        }
        return;
    }
};

export const playGame = (array) => {
    gameOfLife(array);
    console.table(array);
    arrays = newArrays;
    newArrays = [[], [], []];
};

setInterval(() => {
    playGame(arrays);
}, 1000);
