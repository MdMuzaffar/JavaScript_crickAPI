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