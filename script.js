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

function a() {
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
    }, 1000);
}
a();

for (var i = 0; i < 4; i++) {
    function inner(i) {
        setTimeout(() => {
            // for (let i = 0; i < 3; i++) {
            console.log(i);
            // }
        }, 1000);
    }
    inner(i);
}