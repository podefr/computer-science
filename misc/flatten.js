function flatten(arrayOfArrays, toArray = []) {

    arrayOfArrays.forEach(item => {
        if (Array.isArray(item)) {
            flatten(item, toArray);
        } else {
            toArray.push(item);
        }
    });

    return toArray;
}

console.log(flatten([0, 1, 2, [3, [4]], 5]));