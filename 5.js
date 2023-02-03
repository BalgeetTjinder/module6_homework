let arrow = (x, n) => {
    result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(arrow(8, 8));