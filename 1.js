function numbersParity(arr) {
    let even = arr.map(el => el % 2 === 0).filter(el => el).length;
    let odd = arr.map(el => el % 2 !== 0).filter(el => el).length;
    let zero = arr.map(el => el === 0).filter(el => el).length;
    return [even, odd, zero];
}

function randomArray() {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

result = numbersParity(randomArray())
console.log(`Четных чисел: ${result[0]}\nНечетных чисел: ${result[1]}\nНулей: ${result[2]}`);




