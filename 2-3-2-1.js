function sig(x) {
  return 1 / (1 + Math.exp(-x));
}

function sigD(x) {
  let s = sig(x);
  return s * (1 - s);
}
 
let w1 = Math.random();
let w2 = Math.random();
let b1 = Math.random();

let w3 = Math.random();
let w4 = Math.random();
let b2 = Math.random();

let w5 = Math.random();
let w6 = Math.random();
let b3 = Math.random();

let w7 = Math.random();
let w8 = Math.random();
let w9 = Math.random();
let b4 = Math.random();

let w10 = Math.random();
let w11 = Math.random();
let w12 = Math.random();
let b5 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let bo = Math.random();

let i1 = 0.3;
let i2 = 0.2;
let target = 1;
let lr = 0.1;
let e = 10000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * i1 + w2 * i2 + b1;
  let z2 = w3 * i1 + w4 * i2 + b2;
  let z3 = w5 * i1 + w6 * i2 + b3;
  
  let h1 = sig(z1);
  let h2 = sig(z2);
  let h3 = sig(z3);
  
  let z4 = w7 * h1 + w8 * h2 + w9 * h3 + b4;
  let z5 = w10 * h1 + w11 * h2 + w12 * h3 + b5;
  
  let h4 = sig(z4);
  let h5 = sig(z5);
  
  let zo = wo1 * h4 + wo2 * h5 + bo;
  let out = sig(zo);
  
  let error = out - target;
  let dout = error * sigD(zo);
  
  let dh4 = dout * wo1 * sigD(z4);
  let dh5 = dout * wo2 * sigD(z5);
  
  let dh1 = (dh4 * w7 + dh5 * w10) * sigD(z1);
  let dh2 = (dh4 * w8 + dh5 * w11) * sigD(z2);
  let dh3 = (dh4 * w9 + dh5 * w12) * sigD(z3);
  
  wo1 -= lr * dout * h4;
  wo2 -= lr * dout * h5;
  bo -= lr * dout;
  
  w12 -= lr * dh5 * h3;
  w11 -= lr * dh5 * h2;
  w10 -= lr * dh5 * h1;
  b5 -= lr * dh5;
  
  w9 -= lr * dh4 * h3;
  w8 -= lr * dh4 * h2;
  w7 -= lr * dh4 * h1;
  b4 -= lr * dh4;
  
  w6 -= lr * dh3 * i2;
  w5 -= lr * dh3 * i1;
  b3 -= lr * dh3;
  
  w4 -= lr * dh2 * i2;
  w3 -= lr * dh2 * i1;
  b2 -= lr * dh2;
  
  w2 -= lr * dh1 * i2;
  w1 -= lr * dh1 * i1;
  b1 -= lr * dh1;
}

console.log(sig(
  wo1 * sig(
    w7 * sig(w1 * i1 + w2 * i2 + b1) +
    w8 * sig(w3 * i1 + w4 * i2 + b2) +
    w9 * sig(w5 * i1 + w6 * i2 + b3) +
    b4
  ) +
  wo2 * sig(
    w10 * sig(w1 * i1 + w2 * i2 + b1) +
    w11 * sig(w3 * i1 + w4 * i2 + b2) +
    w12 * sig(w5 * i1 + w6 * i2 + b3) +
    b5
  ) +
  bo
).toFixed(2));
