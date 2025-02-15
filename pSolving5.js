// # problem-5 :
function waitingTime(array, serial) {
    if (!Array.isArray(array) || typeof serial !== "number") {
        return "Invalid Input";
    }

    let totalTime = 0;
    for (let i = 0; i < array.length; i++) {
        totalTime += array[i];
    }

    let averageTime = Math.round(totalTime / array.length);
    let remainingPerson = serial - 1 - array.length;

    let remainingTime = 0;
    if (remainingPerson> 0) {
        remainingTime = remainingPerson * averageTime;
    }
    return remainingTime;
}

let result = waitingTime([3, 5, 7, 11, 6], 10);
console.log(result);
