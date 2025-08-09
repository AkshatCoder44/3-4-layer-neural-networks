//First way
function sig(x) {
    return 1 / (1 + Math.exp(-x));
}
function sigD(x) {
    let s = sig(x);
    return s * (1 - s);
}

let w1 = Math.random(); 
let b1 = Math.random();

let w2 = Math.random();
let b2 = Math.random();

let w3 = Math.random(); 
let b3 = Math.random();

const x = 0.7;   
const target = 1; 

const lr = 0.5; 

for (let epoch = 0; epoch < 500000; epoch++) {
    let z1 = x * w1 + b1;
    let h1 = sig(z1);

    let z2 = h1 * w2 + b2;
    let h2 = sig(z2);

    let z3 = h2 * w3 + b3;
    let h3 = sig(z3);

    let error = h3 - target;
    let dout = error * sigD(z3);

    w3 -= lr * dout * h2;
    b3 -= lr * dout;

    let dh2 = dout * w3 * sigD(z2);
    w2 -= lr * dh2 * h1;
    b2 -= lr * dh2;

    let dh1 = dh2 * w2 * sigD(z1);
    w1 -= lr * dh1 * x;
    b1 -= lr * dh1;
}

let z1 = x * w1 + b1;
let h1 = sig(z1);

let z2 = h1 * w2 + b2;
let h2 = sig(z2);

let z3 = h2 * w3 + b3;
let h3 = sig(z3);

console.log("Final Output:", h3.toFixed(3));

//Advanced way
function sig(x) {
    return 1 / (1 + Math.exp(-x));
}
function sigD(x) {
    let s = sig(x);
    return s * (1 - s);
}

let w1 = Math.random(); 
let b1 = Math.random();

let w2 = Math.random();
let b2 = Math.random();

let w3 = Math.random(); 
let b3 = Math.random();

const x = 0.7;   
const target = 1; 

const lr = 0.5; 

for (let epoch = 0; epoch < 500000; epoch++) {
    let z1 = x * w1 + b1;
    let h1 = sig(z1);

    let z2 = h1 * w2 + b2;
    let h2 = sig(z2);

    let z3 = h2 * w3 + b3;
    let h3 = sig(z3);

    let error = h3 - target;
    let dout = error * sigD(z3);

    let grad_w3 = dout * h2;
    let grad_b3 = dout;

    let dh2 = dout * w3 * sigD(z2);
    let grad_w2 = dh2 * h1;
    let grad_b2 = dh2;

    let dh1 = dh2 * w2 * sigD(z1);
    let grad_w1 = dh1 * x;
    let grad_b1 = dh1;

    w3 -= lr * grad_w3;
    b3 -= lr * grad_b3;

    w2 -= lr * grad_w2;
    b2 -= lr * grad_b2;

    w1 -= lr * grad_w1;
    b1 -= lr * grad_b1;
}

let z1 = x * w1 + b1;
let h1 = sig(z1);

let z2 = h1 * w2 + b2;
let h2 = sig(z2);

let z3 = h2 * w3 + b3;
let h3 = sig(z3);

console.log("Final Output:", h3.toFixed(2));
