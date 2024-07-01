const add = (a, b) => {
    return a + b;
}

const average = (numbers) => {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    console.log(sum/numbers.length);
    return sum / numbers.length;
}

const factorial = number => {
    if (number < 0) return undefined;
    if (number === 1) return 1;
    return number * factorial(number - 1) 
}

console.log(factorial(1.3));

export { add, average, factorial };