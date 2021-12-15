//  Q1-- WAF for sum of N natural numbers

function numberSum(N) {
    let sum = "Invalid Natural Number";
    if (N > 0) {
        let sum = 0;
        for (i = 1; i <= N; i++) {
            sum += i;
        }
        return sum;
    }
    return sum;
}




//Another approach



function nSum(N) {
    let s = 0;
    if (N > 0) {
        s = N * (N + 1) / 2;

        return (console.log("Sum of Natural Numbers :", s));
    }
    else {
        return console.log("Enter Valid Natural number");
    }
}



// Q2 WAf to check even or odd by only IF-ELSE statement .

function checkEven(num) {
    let res = "";
    if (num > 0) {
        if (num % 2 == 0) {
            return res = "even";
        }
        else {
            return res = "odd";
        }
    }
    return "Invalid Number";

}


// Q3 WAF to check if the number is prime or not .

function checkPrime(n) {
    let res = "not prime";
    let flag;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return res;

        }
    }
    return n > 1 ? "prime" : res;


}

// Another approach to check prime or not 
function isPrime(n) {
    let res = "not prime";

    if (n < 2) {
        return res;
    }
    else {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return res;
            }
        }
        return res = "prime";

    }
}




// Q4. WAF ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only


function weekday(n) {
    let res = "";

    switch (n) {

        case 1: return res = "Monday";
            break;
        case 2: return res = "tuesday";
            break;
        case 3: return res = "wednesday";
            break;
        case 4: return res = "Thrusday";
            break;
        case 5: return res = "Friday";
            break;
        case 6: return res = "saturday";
            break;
        case 7: return res = "Sunday";
            break;
        default: return res = "Invalid input"
    }
}




// Q5. WAF ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using if else only

function weekdays(n) {

    let res = "Invalid Input";

    if (n < 1 || n > 7) {
        return res;
    }
    else {
        if (n == 1) {
            return res = "mon";
        }
        else {
            if (n == 2) {
                return res = "tue";

            }
            else {
                if (n == 3) {
                    return res = "wed";
                }
                else {
                    if (n == 4) {
                        return res = "thu"
                    }
                    else {
                        if (n == 5) {
                            return res = "fri"
                        }
                        else {
                            if (n == 6) {
                                return res = "sat"
                            }
                            else {
                                return res = "sun"
                            }
                        }
                    }
                }
            }
        }
    }

}




//Q6. WAF ‘WeekDay' that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using Ternary Operator only .

function Weekday(n) {
    return (n < 1 || n > 7 ? "invalid input" : n == 1 ? "mon" : n == 2 ? "tue" : n == 3 ? "wed" : n == 4 ? "thu" : n == 5 ? "fri" : n == 6 ? "sat" : "sun")
}




//Q7.WAF to search an element in the array?

function searchEle(arr, s) {

    for (let i in arr) {
        if (arr[i] == s) {
            return "element found at " + i;
        }
    }
    return "element not found";

}



// Q8. WAF to find the max in the array?

function maxElement(arr) {

    let max = -Infinity;
    for (let i in arr) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return "max value in the array :" + max;
}




//Q9. WAF to find the min in the array?

function minElement(arr) {

    let min = Infinity;
    for (let i in arr) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return "min value in the array :" + min;
}




//Q10. WAF to find the factorial of n?

function factorial(n) {
    let fact = 1;
    if (n < 0) {
        return "invalid value";
    }
    else {
        for (i = 2; i <= n; i++) {
            fact = fact * i;

        }
        return fact;
    }
}


// Q11. WAF to reverse an array?

function reverseArray(arr) {
    let arr1 = [];
    let length = arr.length;
    for (let i = length - 1; i >= 0; i--) {
        arr1.push(arr[i]);

    }
    return arr1;

}



//Q12. WAF to reverse string?

function reverseString(str) {
    let str1 = ""
    let length = str.length;
    for (let i = length - 1; i >= 0; i--) {
        str1 = str1 + str[i];

    }
    return str1;
}

//Q13. Check Palindrome number or not ?

function checkPalin(num) {
    let rem;
    let  final = 0; 
    let temp = num;

    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        final = final * 10 + rem;
    }
    if (temp == final) {
        return "palindrome";
    }
    else {
        return "Not a Palindrome";
    }
}







