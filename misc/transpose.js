const matrix = [[ 1, 2, 3, 4 ],
                [ 5, 6, 7, 8 ],
                [ 9, 10, 11, 12 ]];

function transpose(matrix) {
    const transposed = [];

    matrix.map(row => {
        row.forEach((item, idx) => {
            transposed[idx] = transposed[idx] || [];
            transposed[idx].push(item);
        });
    });

    return transposed;
}

console.log(transpose(matrix));

//  1   5   9
//  2   6   10
//  3   7   11
//  4   8   12
