function F1 (num1) 
{
    return function F2 (num2)
    {
        return num1 + num2;
    }
}

let result = F1(5);
console.log (result(10));
