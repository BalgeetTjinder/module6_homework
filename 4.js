function printNumbers(num1, num2) {
    let i = num1;
    const intervalId = setInterval(() => {
      console.log(i);
      if (i === num2) {
        clearInterval(intervalId);
      }
      i++;
    }, 1000);
  }

  console.log (printNumbers(3, 15));


