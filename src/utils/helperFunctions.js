export const shuffleFifteens = (arr) => {
    let j, temp;
    for(let i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
};

export const checkFifteens = (arr) => {
    return arr[0] === 1 && arr[1] === 2 && arr[2] === 3 &&
        arr[3] === 4 && arr[4] === 5 && arr[5] === 6 &&
        arr[6] === 7 && arr[7] === 8 && arr[8] === 9 &&
        arr[9] === 10 && arr[10] === 11 && arr[11] === 12 &&
        arr[12] === 13 && arr[13] === 14 && arr[14] === 15 &&
        arr[15] === 0 ? 1 : 0;
};