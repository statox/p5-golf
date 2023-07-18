const constrain = function(n: number, low: number, high: number) {
    return Math.max(Math.min(n, high), low);
};

export const map = function(n: number, start1: number, stop1: number, start2: number, stop2: number) {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (start2 < stop2) {
        return constrain(newval, start2, stop2);
    } else {
        return constrain(newval, stop2, start2);
    }
};

const linearMap = function(n: number, start: number, stop: number) {
    return n * (stop - start) + start;
};

const squareMap = function(n: number, start: number, stop: number) {
    return n ** 2 * (stop - start) + start;
};

const cubeMap = function(n: number, start: number, stop: number) {
    return n ** 3 * (stop - start) + start;
};

const linearSquareCompositeMap = function(n: number, start: number, stop: number) {
    if (n < 0.5) {
        return linearMap(n, start, stop);
    }
    const midStart = linearMap(0.5, start, stop);
    return squareMap(n * 2 - 1, midStart, stop);
};

const sqrtMap = function(n: number, start: number, stop: number) {
    return Math.sqrt(n) * (stop - start) + start;
};

const cbrtMap = function(n: number, start: number, stop: number) {
    return Math.cbrt(n) * (stop - start) + start;
};

const domeMap = function(n: number, start: number, stop: number) {
    return Math.sin(n * Math.PI) * (stop - start) + start;
};

export const interpolations = [
    linearMap,
    squareMap,
    linearSquareCompositeMap,
    cubeMap,
    sqrtMap,
    cbrtMap,
];
