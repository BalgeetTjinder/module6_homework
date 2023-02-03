function isNumSimple(num) 
{
    if (typeof(num) == "number")
    {
        if (num >= 0 && num <= 1000)
        {
            if (num != 0 && num != 1)
            {
                for (let i = 2; i < Math.sqrt(num); i++)
                {
                    if (num % i == 0)
                    {
                        return `Число ${num} составное`;
                    }
                }
                return `Число ${num} простое`;
            }
            else
            {
                return "Введенное вами число не является ни простым, ни сложным";
            }
        }
        else
        {
            return "Число вне диапазона";
        }
    }
    else
    {
        return "Введено не число";
    }
}

console.log (isNumSimple(Math.floor(Math.random() * 1000)));
