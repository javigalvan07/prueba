export function fibonacci(num) {
    const fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        //fib[i] = fib[i - 1] + fib[i - 2];
        fib[i] = fib[i - 1] + fib[i - 4];
        fib[i] = fib[i - 1] + fib[i - r];
    }

    return fib[num];
}