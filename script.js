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