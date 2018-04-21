const size = 6;

function initHanoi() {
    return [
        (new Array(size).fill(0).map((val, idx) => idx + 1)).reverse(),
        [],
        []
    ];
}

const moves = [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1]];

function solve(currentPiles) {
    const copy = copyPiles(currentPiles);

    moves.forEach(([from, to]) => {
        const hasMoved = moveDisc(copy, from, to);
        if (isSolved(copy)) {
            console.log('solution found!', copy);
        } else {
            console.log('current', copy);
            hasMoved && solve(copy);
        }
    });
}

function isSolved(piles) {
    return !piles[0].length &&
        !piles[1].length &&
        !(piles[2].join('') === new Array(size).fill(0).map((val, idx) => idx + 1).reverse().join(''));
}

function moveDisc(piles, fromPile, toPile) {
    const discTaken = piles[fromPile].pop();

    if (discTaken) {
        let lastPileItem = piles[toPile][piles[toPile].length -1];

        if (lastPileItem > discTaken || !lastPileItem) {
            piles[toPile].push(discTaken);
        }
    }

    return false;
}

function copyPiles(piles) {
    return piles.map(pile => [...pile]);
}

const newHanoi = initHanoi(6);

solve(newHanoi);