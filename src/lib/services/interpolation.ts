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
