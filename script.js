console.log("testing");

function find(index) {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = i * i;
        // console.log();
    }
    console.log(a[index])
}
console.time("10");
find(6);
console.timeEnd("10");

function findA() {
    let a = [];
    for (let i = 0; i < 10000; i++) {
        a[i] = i * i;
        // console.log();
    }
    return function(index) {
        console.log(a[index])
    };
}
const fa = findA();
console.time("10");
fa(6);
console.timeEnd("10");

// setTimeoutOutput

// function a() {
//     setTimeout(() => {
//         for (let i = 0; i < 3; i++) {
//             console.log(i);
//         }
//     }, 1000);
// }
// a();

// for (var i = 0; i < 4; i++) {
//     function inner(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
//     inner(i);
// }
//Closure to use private counter

function counter() {
    var count = 0;

    function add(increament) {
        count += increament;
    }

    function retrive() {
        return "Counter  = " + count;
    }
    return {
        add,
        retrive
    }
}
const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());

// Module pattern

var Module = (function() {
    function privateMethod() {
        console.log("Private Method");
    }
    return {
        publicMethod: function() {
            console.log("Public Method");
        }
    }
})();

Module.publicMethod();
// Module.privateMethod();

//currying in javascript

function f(a) {
    return function(b) {
        return `${a} ${b}`;
    }
}

console.log(f(5)(6))

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}


console.log(sum(2)(6)(1));

function myMemoize(fn, context) {

    const res = {};
    return function(...args) {
        var argCatche = JSON.stringify(args)
        if (!res[argCatche]) {
            res[argCatche] = fn.call(context || this, ...args)
        }
        return res[argCatche];
    };
}

const clumsProduct = (num1, num2) => {
    for (let i = 1; i < 100000; i++) {

    }
    return num1 * num2;
}

const memoizeProduct = myMemoize(clumsProduct);
console.time("first Memoize");
console.log(memoizeProduct(222, 333));
console.timeEnd("first Memoize");

console.time("second Memoize");
console.log(memoizeProduct(222, 333));
console.timeEnd("second Memoize");

function evaluate(operation) {
    return function(a) {
        return function(b) {
            if (operation === "sum") return a + b;
            else if (operation === "substract") return a - b;
            else if (operation === "divide") return a / b;
            else if (operation === "multiply") return a * b;
            else return " Invalid Operation";
        }
    }
}

const evlFun = evaluate("sum");

console.log(evlFun(5)(5));
console.log(evlFun(5)(50));

console.log(evaluate("sum")(4)(4));
console.log(evaluate("substract")(4)(4));
console.log(evaluate("divide")(4)(4));
console.log(evaluate("multiply")(4)(4));

// Infinite currying

function sumCheck(a) {
    return function(b) {
        if (b) return sumCheck(a + b);
        return a;
    }
}

console.log(sumCheck(1)(2)(3)(4)(5)(6)());

function multiply(a) {
    return function(b) {
        if (b !== undefined) {
            return multiply(a * b);
        }
        return a;
    }
}

console.log(multiply(2)(3)(4)(5)());


console.log("start");

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if (result) resolve("subscribe successfully");
        else reject(new Error("why have you not subscribe?"))
    }, 2000);
})

sub.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
});


console.log("stop");


const subpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rest = true;
        if (rest) resolve("subscribed");
        else reject(new Error("Not Subscribe"))
    }, 3000)
})
subpromise.then((res) => {
    // console.log(res)
}).catch((rej) => {
    // console.log(rej)
})

function fun1() {
    return 2
}

function fun2() {
    return 4
}
let a = ((fun1), (fun2));
console.log(a);


const arr = ["one", "two", "three"];

const res = arr.includes('one');

console.log(res);

console.log('1' == 1);
console.log(true == ' ');
let x = 10;
let y = new Number(10);
let z = 10;



console.log(x === y);
console.log("-------------------------------");

console.log(+true);
console.log(!"xyz");
console.log("-------------------------------")

function currying(a) {
    return function(b) {
        if (b) return currying(a * b);
        return a;
    }
}

// const summ =
console.log(currying(1)(2)(3)());
// console.log(sum);

// json.stringfy and josn.parse

const user = {
    name: "Muzaffar",
    age: 36
}

const strObj = JSON.stringify(user);

console.log(strObj)
console.log(JSON.parse(strObj))

const seting = {
    userName: " Muzafffar",
    level: 2,
    Health: 90
}

const data = JSON.stringify(seting, ["level", "Health"])

console.log(data);

const nums = [1, 2, 3, 4];
const nums1 = [5, 6, 7, 8];

const sumRes = [...nums, ...nums1]

console.log(sumRes)

function sums(...numbers) {
    return numbers;
}

console.log(sums(nums, nums1, 5, "hello"));
//Concat
const sumConcat = nums.concat(nums1, seting);

console.log(sumConcat)

// flatter Array

const flattenArray = [1, 2, [3, 4],
    [
        [5, 6], 7
    ]
]
const flatArray = flattenArray.flat(2)

console.log(flatArray)

// find secondLargest number

function secondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLarg = Number.NEGATIVE_INFINITY;
    for (let num of arr) {
        if (num > largest) {
            secondLarg = largest;
            largest = num
        } else if (num > secondLarg) {
            secondLarg = num;
        }
    }

    return secondLarg;
}

const numberss = [10, 5, 20, 3, 15, 20];
console.log(numberss)
const secondLargestNum = secondLargest(numberss);
console.log("Second largest number:", secondLargestNum);


// function findSecondLargest(arr) {
//     let largest = Number.MIN_SAFE_INTEGER;
//     let secondLargest = Number.MIN_SAFE_INTEGER;

//     for (let num of arr) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num;
//         } else if (num > secondLargest) {
//             secondLargest = num;
//         }
//     }

//     return secondLargest;
// }

// // Example usage:
// const numbers = [10, 5, 20, 3, 15, 20];
// const secondLargests = findSecondLargest(numbers);
// console.log("Second largest number:", secondLargests);

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenSum = sumEvenNumbers(numbers);
console.log("Sum of even numbers:", evenSum);

// Linear Search

// linearNums = [2, 3, 1, 0, 4, 7]

const linearSearch = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2, 3, 5, 1, 8, 0], 1));


// Binary search Algorithm

function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] <= target) {
            start = middle + 1
        } else {
            end = middle - 1;
        }

    }
    return -1;

}

console.log("----------------------------------")
console.log(search([2, 3, 5, 1, 8, 0], 8));

// find 5th missing positive number
function findMissingNumbrt(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + count) {
            count++;
        }
    }

    return k + count;
}

console.log(findMissingNumbrt([2, 4, 6, 9, 11], 5))

13578


function findkthmissing(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + count) {
            count++;
        }
    }
    return k + count;
}

// Recurssion\

function findrangOfNumber(startNumber, endNumber) {
    if (endNumber < startNumber) {
        return [];
    } else {
        const number = findrangOfNumber(startNumber, endNumber - 1);
        number.push(endNumber);
        return number;
    }
}

console.log(findrangOfNumber(1, 5))


// Reverse String

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString("HELLO"));


// Truncate

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '...';
    } else {
        return str;
    }
}

console.log(truncate("Muzaffar Ahmed is a Coder", 8))

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + '...';
    } else {
        return str;
    }
}
const originalString = "This is a long string that needs to be truncated.";
const truncatedString = truncate(originalString, 10);
console.log(truncatedString);


// Async / await

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("waiting for the result")
    }, 3000);
});
async function getData() {
    let result = await promise;
    console.log(result);
};

getData();



const prom = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("get data") }, 3000);
});
async function dataget() {
    let res = await prom;
    console.log(res);
};
dataget();

let result1 = document.getElementById('result');

function fetch1() {
    result1.innerText = "fetching data..."
};

// let proms = new promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Getting Data")
//     }, 3000);
// });

async function getDaata() {
    let res = await proms;
};

// truncatedString()

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + '...';
    } else {
        return str;
    }
}

const originalStrings = "This is a long string that needs to be truncated.";
const truncatedStrings = truncate(originalString, 15);
console.log("Testing", truncatedString); // Output: "This is a..."

// console.log(truncate("Hello Muzaffar"))

console.log("--------------------------------------------------------------");


function fruit() {


    name = "mango";
    let price = 40;
    console.log(name);
    console.log(price);

    var name = "Bananaa";
    // let price = 20;
}

fruit();

function printNumbers(n) {
    for (let i = 0; i < n; i++) {
        const square = i * i;
        console.log(i, square);
    }
}

printNumbers(5);


// -----------------------MAP

const myMap = new Map();

myMap.set("key1", "value1")
myMap.set("key2", "value2")
myMap.set("key3", "value3")
console.log(myMap)

const value = myMap.get("key1")
console.log(value)

const exists = myMap.has("key2")
console.log(exists)

const students = new Map();
students.set("Ali", { age: 20, grade: "A" });
students.set("Bacha", { age: 22, grade: "B+" });
students.set("Cute", { age: 19, grade: "B" });

console.log(students.get("Ali"));

for (const [name, student] of students) {
    console.log(name, student.age, student.grade);
}
const student = {
    name: "Md Ahmed",
    age: 35,
    grade: "A",
    courses: ["Math", "Science", "History"]
};

console.log(student.name);
console.log(student.courses[1]);

// adding new data into existing data
// import data from "./data.js";
// const license = {
//     license: "Unplash License",
//     licenseURL: "https://google.com/data"
// }

// const newData = data.map((imgData) => {
//     const newImgData = {...imgData, ...license };
//     return newImgData;
// })


// const newDat = data.map((itemData) => {
//     const concatData = {...itemData, ...licenseData }
//     return concatData;

// })

// getCatgegory$: Observable < any >


//     this.getCatgegory$ = this.service.product().pipe(map((item) => {
//         return item.data;
//         console.log(data)
//     }))

let products = ['socks:2.09', 'jacket:85.9'];

for (let i = 0; i < products.length; i++) {
    const subArray = products[i].split(':');
    const name = subArray[0];
    const price = Number(subArray[1]);
    console.log('sub Array', subArray, name, price)
}

function person(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        // alert('Hi' + obj.name + '.');
    }
    return obj;
}
const salve = person('Salva');
salve.name;
salve.greeting();

const numbers2 = [1, 2, 3, 4, 5];

const isEven = (value) => value % 2 === 0;

const hasEvenNumber = numbers2.some(isEven);
console.log(hasEvenNumber);

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];

const hasUserWithExactMatch = users.some(user => user.name === "Alice");
console.log(hasUserWithExactMatch);

const person2 = {
    name: "Muzaffar",
    age: 35,
    city: "Hyderabad"
};

const entries = Object.entries(person2);
console.log("JS ebtries", entries);
for (const [key, value] of entries) {
    console.log(key, value);
}
const newObject = Object.fromEntries(entries);
console.log(newObject);

console.log("----------------------------Object.Methods------------------------------------")
const person3 = {};
Object.defineProperty(person3, "name", {
    value: "Ahmed",
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(person3.name.writable);

const person4 = { name: 'Muzaffar', age: 36 };
const person5 = { city: "Hyderabad" }

const combinePersonData = Object.assign({}, person4, person5);
console.log(combinePersonData);

const person6 = { name: "Alice", age: 25 };
const newPerson = Object.create(person6);
newPerson.city = "New York";
console.log(newPerson);

const person7 = {
    name: 'Ahmed',
    age: 30,
    city: 'Canada'
};

const filterProperties = Object.entries(person7).filter(([key, value]) => typeof value === "string")
console.log(filterProperties);
const selectedNames = ["name", "city"];
const printSelected = Object.fromEntries(Object.entries(person7).filter(([key]) => selectedNames.includes(key)));
console.log(printSelected);

const ab = {
    x: 10,
    y: 20
}
ab.x = 100;
console.log(ab);

let arr1 = [1, 2, 3, 4];
let result = arr1.find(num => num > 2);
console.log(result);

const nestedArrays = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const flatArray1 = nestedArrays.reduce((acc, val) => acc.concat(val), []);
console.log(flatArray1)

const numbers3 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumber = numbers3.reduce((acc, current) => {
    if (!acc.includes(current)) {
        acc.push(current);
    }
    return acc;
}, []);
console.log(uniqueNumber);

const numbers4 = [5, 12, 8, 130, 44];
const findLargestNumber = numbers4.reduce((acc, val) => (val > acc ? val : acc), numbers4[0]);
console.log("find largest number", findLargestNumber)

const students3 = [
    { name: 'Amd', score: 45 },
    { name: 'Md', score: 22 },
    { name: 'Muzaffar', score: 38 },
    { name: 'Mohammed', score: 75 }
];

const totalScore = students3
    .map(student => student.score)
    .reduce((acc, score) => acc + score, 0);

console.log(totalScore);

// average of an array using reduce

const numbers6 = [19, 24, 35, 42, 53];
const average = numbers6.reduce((acc, current, index, array) => {
    acc += current;
    if (index === array.length - 1) {
        return acc / array.length;
    }
    return acc;
}, 0);

console.log(average);